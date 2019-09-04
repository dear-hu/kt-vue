import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Idea from './views/Idea.vue'
import News from './views/News.vue'
import Plant from './views/Plant.vue'
import Product from './views/Product.vue'
import Research from './views/Research.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }, 
        {
            path: '/about',
            name: 'about',
            component: About
        }, {
            path: '/idea',
            name: 'idea',
            component: Idea
        }, {
            path: '/news',
            name: 'news',
            component: News
        }, {
            path: '/plant',
            name: 'plant',
            component: Plant
        }, {
            path: '/product',
            name: 'product',
            component: Product
        }, {
            path: '/research',
            name: 'research',
            component: Research
        },
    ]
})
