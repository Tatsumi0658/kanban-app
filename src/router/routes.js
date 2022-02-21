import { createRouter, createWebHistory } from 'vue-router'
import BoardView from '@/components/templates/BoardView.vue'
import LoginView from '@/components/templates/LoginView.vue'
import TaskDetailModal from '@/components/templates/TaskDetailModal'

const routes = [
  {
    path: '/',
    component: BoardView,
    meta: { requiredAuth: true}
  },
  {
    path: '/login',
    component: LoginView,
  },
  {
    path: '/tasks/:id',
    component: TaskDetailModal,
    meta: {requiredAuth: true}
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
