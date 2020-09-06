import Vue from 'vue'
import App from './App.vue'
// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入router
import router from './router'
// 引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// 引入 easytable
import 'vue-easytable/libs/themes-base/index.css' // 引入样式
import {VTable,VPagination} from 'vue-easytable' // 导入 table 和 分页组件
// 引入echarts
import echarts from 'echarts'



Vue.config.productionTip = false

// 全局注册
Vue.use(ElementUI)
Vue.use(router)
Vue.use(VueAxios, axios)
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
Vue.prototype.$echarts = echarts // 将echarts注册到Vue组件的原型对象中去

new Vue({
  router,
  echarts,
  render: h => h(App),
}).$mount('#app')
