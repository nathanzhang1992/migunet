import Vue from 'vue'
import Vuex from 'vuex'
import Mock from 'mockjs'
import axios from 'axios'
import productModule from '../vuex/modules/productModule'
import productDetailModule from '../vuex/modules/productDetailModule'



Vue.use(Vuex)

export default new Vuex.Store({
	
  modules:{
    a:productModule,
    b:productDetailModule
  }
})