import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import home from './home'
import search from './search'

export default new Vuex.Store({
  // 实现模块式开发存储数据
  modules:{
    home,
    search
  }
})