import Vue from 'vue'
import Router from 'vue-router'
import BootPage from '@/page/bootpage/BootPage'
import HomePage from '@/page/homepage/Homepage'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'BootPage',
            component: BootPage
        },
        {
            path: '/homepage/',
            name: 'HomePage',
            component: HomePage
        }
    ]
})