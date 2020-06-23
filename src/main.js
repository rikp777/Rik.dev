import Vue from "vue";
import App from "./App.vue";

import "./registerServiceWorker";

import router from "./router";
import store from "./store";

import './plugins'
import colxx from './components/common/Colxx'

if (process.env.NODE_ENV === "production") {
} else {
  Vue.config.productionTip = false;
  Vue.config.devtools = true;
  Vue.config.performance = true;
}


Vue.component('b-colxx', colxx);

//AccessControlService.router(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
