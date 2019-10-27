import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import VueShowdown from "vue-showdown";
import Info from "./views/Info.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(VueShowdown, {
  flavor: "github",
  options: {
    emoji: true
  }
});
Vue.config.productionTip = false;
Vue.component("info", Info);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
