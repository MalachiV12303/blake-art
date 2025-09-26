import { createRouter, createWebHistory } from 'vue-router'
import GalleryView from '@views/GalleryView.vue'
import AboutView from '@views/AboutView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GalleryView
    }
  ],
})

export default router
