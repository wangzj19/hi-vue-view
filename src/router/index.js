import Vue from 'vue'
import VueRouter from 'vue-router'

import Test from '../components/Test.vue'
import Login from '../views/Login.vue'
import NotFound from '../views/404.vue'
import Index from '../views/Index.vue'
import Home from '../views/home/Home.vue'
import Statistics from '../views/statistics/Statistics.vue'
import Management from '../views/management/Management.vue'


Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',

    routes: [
        { path: '/Test', name: 'Test', component: Test },
        { path: '/Login', name: 'Login', component: Login },
        {
            path: '/Index', name: 'Index', component: Index,
            children: [
                { path: 'Statistics', component: Statistics },
                { path: 'Management', component: Management },
                { path: 'Home', name: 'Home', component: Home },

            ],
        },
        {
            //为图表组件设置访问路径 
            path: '/chart',
            name: 'chart',
        },
        { path: '/*', name: '404', component: NotFound },

    ]
})