import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;
// 三级联动组件---全局组件
import TypeNav from "@/components/TypeNav";
Vue.component(TypeNav.name, TypeNav);

// 引入MockServe.js
import "@/mock/mockServe";

// 引入路由
import router from "@/router";
// 引入仓库
import store from "@/store";

// 引入swiper样式
import "swiper/css/swiper.css";

new Vue({
  render: (h) => h(App),
  // 注册路由
  router,
  store,
}).$mount("#app");
