import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Project from "./Project/Project";

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', component: App},
        { path: '/project', component: Project, props: true},
    ]
})

new Vue({
  el: '#app',
  router, // Ajoute l'instance router dans Vue
  render: h => h(App)
})


