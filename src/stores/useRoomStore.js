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
      const available = this.checkRoomAvailability(id, form.arrival, form.departure)
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
      return true // Endpoint does not work so we return true for now TODO: exchange logic if endpoint works again
      axios.post(`${BASE_URL}/room/${id}/from/${form.arrival}/to/${form.departure}`, {
        firstname: form.firstName,
        lastname: form.lastName,
        email: form.email,
        birthdate: form.birthdate,
      }).then((response) => {
        console.log('response', response)
      })
    }
  }
})
