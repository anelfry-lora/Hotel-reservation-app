import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import HotelView from '../views/HotelView.vue'
import CheapestHotelView from '../views/CheapestHotelView.vue'
import ReservationView from '../views/ReservationView.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Hotel',
        component: HotelView
    },
    {
        path: '/cheapest-hotel',
        name: 'Cheapest Hotel',
        component: CheapestHotelView
    },
    {
        path: '/reservation/:name',
        name: 'Reservation',
        component: ReservationView
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router