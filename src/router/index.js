import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:login
    },
    {
      path:'/login',
      name:'login',
      component:resolve => 
        require(["@/components/home"], resolve),
    },
    {
      //中国地图
      path:'/map',
      name:'map',
      component:resolve => 
        require(["@/components/map"], resolve),
    },
      //柱状图
    {
      path:'/zhu',
      name:'zhu',
      component:resolve=>
        require(["@/components/zhu"],resolve)
    },
    //柱线结合
    {
      path:'/zxjiehe',
      name:'zxjiehe',
      component:resolve=>
        require(["@/components/zxjiehe"],resolve)
    }
  ]
})
