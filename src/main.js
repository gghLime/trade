import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'
import Api from './api/api'
import router from './router.js'
import VueI18n from 'vue-i18n'
import LangEn from './lang/en'
import LangZh from './lang/zh'

Vue.config.productionTip = false;
Vue.prototype.$req = Api;

Vue.use(MintUI);
Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'zh',
    messages:{
        'en': LangEn,
        'zh': LangZh,
    }
})

new Vue({
	el: '#app',
  router,
  store,
    i18n,
  render: h => h(App)
}).$mount('#app');
