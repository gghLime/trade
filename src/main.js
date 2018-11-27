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

import Vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible'

Vue.config.productionTip = false;
Vue.prototype.$req = Api;

Vue.use(MintUI);
Vue.use(VueI18n);
Vue.use(Vant);

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
