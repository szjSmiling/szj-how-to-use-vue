/*
 * @Author: sunzhongjie
 * @Date: 2020-11-04 16:58:47
 * @LastEditors: Jelly
 * @LastEditTime: 2021-04-09 11:50:15
 */
import Vue from 'vue';
import router from './router.js';
import App from './App.vue';
import InitMainEntry from '@/plugins/initialvue.js';

InitMainEntry(Vue);

const newVue = new Vue({
  // store,
  router,
  render: h => h(App)
})
setTimeout(() => {
  // 清楚白屏时 loading 的计时器
  clearInterval(window.run)
  newVue.$mount('#app')
}, 500)

