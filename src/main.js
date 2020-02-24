import Vue from "vue";
import { configure } from 'vee-validate';
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import "./assets/app.scss";

require('./fonts.js');

Vue.config.productionTip = false;

configure({
  classes: {
    valid: 'border-green-600',
    invalid: 'border-red-600',
  },
});


new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
