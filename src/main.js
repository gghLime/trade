import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'
import Api from './api/api'
import router from './router.js'

Vue.config.productionTip = false;
Vue.prototype.$req = Api;

Vue.use(MintUI);


new Vue({
	el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app');
