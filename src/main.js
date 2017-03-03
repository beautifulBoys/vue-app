// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Home from './view/home.vue';
import Picture from './view/picture.vue';
import Joke from './view/joke.vue';
import Shoping from './view/shoping.vue';
import BaiduMap from './view/baiduMap.vue';
import Travel from './view/travel.vue';
import Router from 'vue-router';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload);
Vue.use(Router);

const routes = [
  {path: '/', redirect: '/home'},
  {path: '/home', component: Home},
  {path: '/picture', component: Picture},
  {path: '/joke', component: Joke},
  {path: '/shoping', component: Shoping},
  {path: '/baidu', component: BaiduMap},
  {path: '/travel', component: Travel}
];

const router = new Router({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
