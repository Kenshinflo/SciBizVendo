import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OptionView from '../views/OptionView.vue'
import StoreView from '../views/StoreView.vue'
import ModalEx from '../components/BaseModal.vue'
import SuccessModal from '../components/PaySuccess.vue'
import CameraScan from '../components/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/option',
      name: 'option',
      component: OptionView
    },
    {
      path: '/store',
      name: 'store',
      component: StoreView
    },
    {
      path: '/modal',
      name: 'modalex',
      component: ModalEx
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessModal
    },
    {
      path: '/camera',
      name: 'camera',
      component: CameraScan
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
