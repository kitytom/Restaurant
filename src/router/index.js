import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPAge from '../components/LoginPage'
import Show from '../components/ShowPage'
import HomePage from '../components/HomePage'
import IndexPage from '../components/nav/IndexPage'
import DatyPlay from '../components/nav/DatyPlay'
import HostPage from '../components/nav/HostMan'
import TongjiPage from '../components/nav/TongjiPage'
import ProFit from '../components/nav/ProFit'
import AddCai from '../views/AddCai'
import UserPage from '../views/UserPage'
import UserNumber from '../components/nav/UserNumber'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: LoginPAge },
  { path: '/login', component: LoginPAge },
  { path: '/show', component: Show },
  {
    path: '/home',
    component: HomePage,
    redirect: '/index',
    children: [
      { path: '/index', component: IndexPage },
      { path: '/datyplay', component: DatyPlay },
      { path: '/host', component: HostPage },
      { path: '/tongji', component: TongjiPage },
      { path: '/profit', component: ProFit },
      { path: '/addcai', component: AddCai },
      { path: '/userpage', component: UserPage },
      { path: '/usernumber', component: UserNumber }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
