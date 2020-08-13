import Vue from 'vue';
import App from './App.vue';
import contextMenu from '../src/main';
Vue.use(contextMenu);
Vue.config.productionTip = false;
Vue.config.devtools = true;
new Vue({
    render: (h) => h(App),
}).$mount('#app');
