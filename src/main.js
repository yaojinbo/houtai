// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入axios
import axios from 'axios';
//引入elementUI
import ElementUI from 'element-ui';
//我们会采用axios来存取api,但是axios会使用到ES6的promise,
//ie没有办法支援,所以用babel-polyfill将ES6语法转换到ES5
import "babel-polyfill";
//引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
//把axios挂载到vue上
Vue.prototype.$http = axios
//axios默认是请求的时候不会带上cookie的，需要通过设置withCredentials: true来解决。（可以解决跨域请求）
axios.defaults.withCredentials = true; 
// 超时时间
axios.defaults.timeout = 10000; 
//直接转化为json格式，不需要使用qs进行转换，后端也要接收json
axios.defaults.headers.post["Content-Type"] = "application/json";
Vue.config.productionTip = false
//全局使用element插件
Vue.use(ElementUI)
// loading效果  拦截器
import { Loading } from "element-ui";
//http请求拦截器
let loadinginstaceContainer;
axios.interceptors.request.use(
  config => {
    loadinginstaceContainer = Loading.service({
      text: "努力加载中...",
      customClass: "loading-await"
    });
    const token = sessionStorage.getItem('Authorization')?sessionStorage.getItem('Authorization'):'';
    if(token != undefined && token != ''){
      //这里将token设置到headers中
      config.headers['code'] = token
    }
    return config
  },
  error => {
    MessageBox({
      title: "提示",
      message: "加载超时",
      callback: action => {
        loadinginstaceContainer.close();
      }
    });
    //抛出错误，阻止程序运行
    return Promise.reject(error);
  }
)
//http响应拦截器
axios.interceptors.response.use(
    data => {setTimeout(() => {
      loadinginstaceContainer.close();
    }, 500);
    var status = data.data.code;
  }
)
//导航守卫
router.beforeEach((to, from, next) => {
  //console.log('登录005');
  if (sessionStorage.userId != "" && sessionStorage.userId != undefined) {
    // console.log(to.path) //每次跳转的路径
    if (to.path === "/") {
      //登录状态下 访问login.vue页面 会跳到index.vue
      // next({path: '/home'});
    } else {
      next();
    }
  } else {
    // 如果没有session ,访问任何页面。都会进入到 登录页
    if (to.path === "/login") {
      // 如果是登录页面的话，直接next() -->解决注销后的循环执行bug
      next();
    } else {
      // 否则 跳转到登录页面
      next("/login");
    }
  }
});
let vm = new Vue({
  data:{a:1},
  methods:{
    plus:function(){
      this.a++
    }
  }
})
vm.plus()
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
