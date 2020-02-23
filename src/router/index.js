import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home,
        //children: [{
        //path: '/',
        //name: 'Index',
        // 页面在进入此组件时才加载此组件
        //component: () =>
        //    import ('@/components/index/Log')
        //}]
    }, {
        path: '/Template',
        name: 'Template',
        component: () =>
            import ('@/components/Template')
    }]
})