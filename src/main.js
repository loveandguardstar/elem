import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods.vue';
import header from 'components/header/header.vue';
import rating from 'components/rating/rating.vue';

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

let app = Vue.extend(App);

let router = new VueRouter({
  linkActiveClass: 'active'
});

router.map({
  '/goods': {
    component: goods
  },
  '/header': {
    component: header
  },
  '/rating': {
    component: rating
  }
});

router.start(app, '#app');

router.go('/goods');
