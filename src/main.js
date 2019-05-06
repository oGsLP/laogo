import Vue from 'vue';
import App from './App.vue';
// import VueAnalytics from 'vue-analytics';
import VTooltip from 'v-tooltip';

import router from './router/router';
import store from './vuex/store';

Vue.config.productionTip = false;

// Vue.use(VueAnalytics, {
//   id: 'UA-139600522-1',
//   router,
//   autoTracking: {
//     pageviewOnLoad: false,
//   },
// });

Vue.use(VTooltip);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
