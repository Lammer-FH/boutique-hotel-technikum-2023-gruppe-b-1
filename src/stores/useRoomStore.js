import { defineStore } from 'pinia'
import axios from 'axios'
import { BASE_URL } from '../config/constants.js'
import { useToast } from 'bootstrap-vue-next'
import router from "../router/index.js"


const { show } = useToast()


export const useRoomStore = defineStore('rooms', {
  state: () => ({
    rooms: [],
    init: false,
    booking: {}
  }),
  actions: {
    initRooms(force) {
      if (this.init && !force) {
        return
      }
      axios.get(`${BASE_URL}/rooms`).then((response) => {
        this.rooms = response.data
        this.init = true
      })
    },
    getRoomById(id) {
      return this.rooms.find(room => room.id === id)
    },
    async checkRoomAvailability(id, startDate, endDate) {
      if (!id || !startDate || !endDate) {
        return
      }
      const response = await axios(`${BASE_URL}/room/${id}/from/${startDate}/to/${endDate}`)
      return response.data?.available
    },
    async bookRoom(id, form) {
      this.booking = {}
      const available = await this.checkRoomAvailability(id, form.arrival, form.departure)
      if (!available) {
        show('The room you selected is not available for the selected dates.', {
          title: 'Room not available',
          variant: 'danger'
        })
        return
      }

      this.booking = {
        room: this.getRoomById(id),
        form
      }


      const response = await axios.post(`${BASE_URL}/room/${id}/from/${form.arrival}/to/${form.departure}`, {
        firstname: form.firstName,
        lastname: form.lastName,
        email: form.email,
        birthdate: form.birthdate,
      })
      if (response.status !== 201) {
        show('Das Zimmer konnte nicht erfolgreich gebucht werden!', {
          title: 'Unerwarteter Fehler',
          variant: 'danger'
        })
        return false
      }
      show('Das Zimmer wurde gebucht!', {
        title: 'Erfolgreich gebucht',
        variant: 'success'
      })
      router.push({ name: 'confirmation', params: { id: response.data.id } })
      return true
    }
  }
})
