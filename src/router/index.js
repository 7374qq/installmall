import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>import('views/home/Home.vue')
const Cart=()=>import('views/cart/Cart.vue')
const Category=()=>import('views/category/Category')
const Profile=()=>import('views/profile/Profile')
const Detail=()=>import('views/detail/Detail')

const routes=[
    {
        path: '/',
        redirect: '/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/detail/:iid',
        component:Detail
    }
]
Vue.use(VueRouter)

const router=new VueRouter({
    routes
})

export default router