import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import CaseDetails from './views/CaseDetails.vue'
import NewCase from './views/NewCase.vue'
import Favorites from './views/Favorites.vue'
import Trash from './views/Trash.vue'
import Login from './views/auth/Login.vue'
import Register from './views/auth/Register.vue'
import Verify2FA from './views/auth/Verify2FA.vue'
import ForgotPassword from './views/auth/ForgotPassword.vue'
import Profile from './views/Profile.vue'
import Settings from './views/Settings.vue'
import Team from './views/Team.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { layout: 'auth' }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { layout: 'auth' }
  },
  {
    path: '/verify',
    name: 'Verify2FA',
    component: Verify2FA,
    meta: { layout: 'auth' }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: { layout: 'auth' }
  },
  {
    path: '/casos',
    name: 'Casos',
    component: Dashboard
  },
  {
    path: '/new',
    name: 'NewCase',
    component: NewCase
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/trash',
    name: 'Trash',
    component: Trash
  },
  {
    path: '/case/:id',
    name: 'CaseDetails',
    component: CaseDetails
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
