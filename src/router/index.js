import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import ReportarCrimen from "../views/ReportarCrimen";

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'About',
        component: About,
    },
    {
        path: '/mapa',
        name: 'Home',
        component: Home,
    },
    {
        path: '/report',
        name: 'ReportarCrimen',
        component: ReportarCrimen,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router