import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ImpressumView from '../views/ImpressumView.vue'
import AvailableRoomsView from '../views/AvailableRoomsView.vue'
import ReservationView from '../views/ReservationView.vue'

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
      path: '/reservation',
      name: 'reservation',
      component: ReservationView
    }
  ]
})

export default router
