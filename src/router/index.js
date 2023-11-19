import { createRouter, createWebHistory } from 'vue-router'
import { useRoomStore } from '../stores/useRoomStore.js'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ImpressumView from '../views/ImpressumView.vue'
import AvailableRoomsView from '../views/AvailableRoomsView.vue'
import ReservationView from '../views/ReservationView.vue'
import ConfirmationView from '../views/ConfirmationView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: ImpressumView
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: AvailableRoomsView
    },
    {
      path: '/reservation/:id',
      name: 'reservation',
      component: ReservationView
    },
    {
      path: '/confirmation/:id',
      name: 'confirmation',
      component: ConfirmationView
    }
  ]
})


// Router guard to prevent access to confirmation page without a booking
router.beforeEach((to, from, next) => {
  if (to.name !== 'confirmation') {
    next()
    return
  }
  const roomStore = useRoomStore()
  if (!roomStore.booking.room) {
    next({ name: 'home' })
    return
  }
  next()
})


export default router
