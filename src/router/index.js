import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/views/first'
import Confirm from '@/components/sub/Confirm'
import Second from '@/components/sub/second'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/first',
      name:'First',
      component: First
    },{
      path:'/Confirm',
      name:'Confirm',
      component: Confirm
    },{
      path:'/second',
      name:'Second',
      component: Second
    }
  ]
})
