import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
// import './require'

var instance;
function render(arg){
 
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#childcon')
  setTimeout(()=>{
    console.log('render', window.require);
  if(window.require){
    window.require(['http://localhost:8080/arealocation_en.js'],function(a){
      console.log('aaaaa',a)
      })
  }
  },1000)
}


if(!window.__POWERED_BY_QIANKUN__){
  console.log(router);
  render()
}


async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

 async function mount(props) {
  render(props);
}

 async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}

export {
  bootstrap,
  mount,
  unmount
}