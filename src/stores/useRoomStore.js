import { defineStore } from 'pinia'
import axios from 'axios'
import { BASE_URL } from '../config/constants.js'

export const useRoomStore = defineStore('store', {
  state: () => ({
    rooms: [],
    init: false,
  }),
  getters: {
    async getRoomById(id) {
      if (!state.init) {
        await this.initRooms()
      }
      return state.rooms.find(room => room.id === id)
    },
  },
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
    preSelectRoom(roomId) {
      console.log('preSelectRoom', roomId)
    }
  }
})