import Vue from 'vue'
import Router from 'vue-router'
import BootPage from '@/page/bootpage/BootPage'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'BootPage',
        component: BootPage
    }]
})