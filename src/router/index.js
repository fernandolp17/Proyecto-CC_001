import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'

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
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router