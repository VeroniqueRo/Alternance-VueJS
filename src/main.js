import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Icon from 'vue-awesome/icons'
import VueRouter from 'vue-router'
import App from './App.vue'
import Project from "./Project";
import ProjectsList from './ProjectsList';
import VeroTable from './VeroTable';

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.component('icon', Icon);

const router = new VueRouter({
    routes: [
        // { path: '/', name:'accueil', component: App},
        { path: '/', name:'liste', component: ProjectsList, props: true},
        { path: '/project', name:'detail', component: Project, props: true},
        { path: '/table', name:'table', component: VeroTable, props: true},
    ]
})

new Vue({
  el: '#app',
  router, // Ajoute l'instance router dans Vue
  render: h => h(App)
})


