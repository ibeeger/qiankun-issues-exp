import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {start, registerMicroApps} from 'qiankun'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


registerMicroApps([{
  name: 'child', // app name registered
  entry: '//localhost:8080',
  container: '#main-content',
  activeRule: '/child',
  props:{
    
  }
}])

start({
  fetch(url){
    return window.fetch(url, {
      mode:'cors'
    })
  }
});