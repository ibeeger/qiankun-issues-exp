import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

var instance;
function render(arg){
  console.log('render', arg);
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#childcon')
}

if(!window.__POWERED_BY_QIANKUN__){
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