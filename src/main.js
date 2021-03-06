import Vue from "vue";
import App from "./App.vue";
// import VueAnalytics from 'vue-analytics';

import "./assets/font.css";
import "./assets/iconfont.css";

import router from "./router/router";
import store from "./vuex/store";

import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

import Button from "bootstrap-vue/es/components/button";
Vue.use(Button);
import FormInput from "bootstrap-vue/es/components/form-input";
Vue.use(FormInput);
import ListGroup from "bootstrap-vue/es/components/list-group";
Vue.use(ListGroup);
import Modal from "bootstrap-vue/es/components/modal";
Vue.use(Modal);

import Tooltip from "bootstrap-vue/es/components/tooltip";
Vue.use(Tooltip);

import VTypewriter from "v-typewriter";
Vue.use(VTypewriter);

Vue.config.productionTip = false;

import VueAnalytics from "vue-analytics";

Vue.use(VueAnalytics, {
  id: 'UA-139600522-2',
  router,
  autoTracking: {
    pageviewOnLoad: false,
  },
});
Vue.prototype.$baseUrl = process.env.BASE_URL;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
