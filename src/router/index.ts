import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SquadView from "@/views/SquadView.vue";
import Profile from "@/views/Profile.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/squad',
      name: 'squad',
      component: SquadView
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: Profile,
      props: true
    }
  ]
})

export default router
