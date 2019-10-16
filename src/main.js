import Vue from 'vue'
import App from './App.vue'

// 引入echarts
import echarts from 'echarts'
import ECharts from 'vue-echarts'

//将echarts对象挂在vue实例的原型对象上
//在全局可通过this.$echarts调用echarts对象
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
// register component to use
Vue.component('v-chart', ECharts)

// Map of China
import chinaMap from './components/data/world.json'
// registering map data
ECharts.registerMap('china', chinaMap)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
