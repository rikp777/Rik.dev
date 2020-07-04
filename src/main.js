import Vue from "vue";
import App from "./App.vue";

import "./registerServiceWorker";

import router from "./router";
import store from "./store";
import "./plugins"

import ApiService from "./services/api.service";

ApiService.initialize();

let MOCK = true
if (process.env.NODE_ENV === "development") {
  Vue.config.productionTip = false;
  Vue.config.devtools = true;
  Vue.config.performance = true;


  if (MOCK) {
    let mirage = require("./mock/mirage/server")
    mirage.createServer();
  }
}



//AccessControlService.router(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
