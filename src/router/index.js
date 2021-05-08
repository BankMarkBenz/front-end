import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Add from '../views/Add.vue'
import About from '../views/About.vue'
import Product from '../views/Product.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path:'/AddItem',
    name:'AddItem',
    component:Add
  },
  {
    path:'/About',
    name:'About',
    component:About
  },
  {
    path:'/Product/:getproductId',
    name:'Product',
    component:Product,
    props: true

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
