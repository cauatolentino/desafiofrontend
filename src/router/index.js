import { createRouter, createWebHistory } from 'vue-router'
import FormularioView from '@/views/FormularioView.vue'

const routes = [
  {
    path: '/',
    name: 'formulario',
    component: FormularioView
  },
  {
    path: '/tabela',
    name: 'tabela',
    component: () => import('@/views/TabelaView.vue')
  },
  {
    path: '/resumos',
    name: 'resumos',
    component: () => import('@/views/ResumosView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
