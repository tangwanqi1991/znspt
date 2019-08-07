// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router/index'

//柱状图
/*import VCharts from 'v-charts'
Vue.use('VCharts');*/

//end 柱状图

/*圆形百分比*/
/*import ProgressBar from 'vuejs-progress-bar'
Vue.use(ProgressBar)*/

import CiRCLEpROGREES from 'vue2-circle-progress'
Vue.use(CiRCLEpROGREES)
/*end 圆形百分比*/

/*-- U圆形插件 --*/
import VueKnobControl from 'vue-knob-control'
Vue.use(VueKnobControl)


// 注册组件，并指定组件的标签，组件的HTML标签为<my-button>
Vue.component('knob-control', VueKnobControl) // 组件名 构造器

// 注册组件，并指定组件的标签，组件的HTML标签为<my-button>
Vue.component('md-card-media', VueAwesomeSwiper) // 组件名 构造器

/*-- End 圆形插件 ---*/


//高德地图
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'your amap key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
//end 高德地图

//vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);







import $ from 'jquery'
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false;




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  components: { App },
  template: '<App/>'
})
