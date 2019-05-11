import Vue from 'vue'
import Router from 'vue-router'
import BootPage from '@/page/bootpage/BootPage'
import HomePage from '@/page/homepage/Homepage'
import PalyPage from '@/page/homepage/palypage/PalyPage'

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
        },
        {
            path: '/palypage/',
            name: 'PalyPage',
            component: PalyPage
        }
    ]
})