import Vue from 'vue'
import Vuex from 'vuex'
import Mock from 'mockjs'
import axios from 'axios'


Vue.use(Vuex)

var Random = Mock.Random
Random.extend({
    constellation: function(date) {
        var constellations = ['全职高手1', '全职高手2', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(constellations)
    }
})
Random.constellation();
// => "水瓶座"
var data1 = Mock.mock('http://address:port/productCenter/productDataDeclareCallback',{    
  "ProductInfos|1-10":[
  {
"ProductId":0,
"Name":"@CONSTELLATION",
"Describe":"产品描述",
"Keys":"关键字1，关键字2",
"CpId|988221-9009876988":1,
"ProductLine":"归属产品线1",
"Status|1-7":1,
"ChargeType":1,
"PayType":1,
"PlatformType":1,
"BossId":"100001",
"ProductType":1,
"Fee|0-100":100,
"EnableTag":0,
"StartTime":"2017-07-13 19:21:00",
"EndTime":"2017-09-01 10:00:00",
},

]

});
var data2 = Mock.mock('http://address:port/productCenter/productDataDeclareCallback?page=1&&pagesize=10',{    
  "ProductInfos|10":[
  {
"ProductId":1,
"Name":"@CONSTELLATION",
"Describe":"产品描述",
"Keys":"关键字1，关键字2",
"CpId|988221-9009876988":1,
"ProductLine":"归属产品线1",
"Status|1-7":1,
"ChargeType":1,
"PayType":1,
"PlatformType":1,
"BossId":"100001",
"ProductType":1,
"Fee|0-100":100,
"EnableTag":0,
"StartTime":"2017-07-13 19:21:00",
"EndTime":"2017-09-01 10:00:00",
},

]

});
var data2 = Mock.mock('http://address:port/productCenter/productDataDeclareCallback?page=2&&pagesize=10',{    
  "ProductInfos|10":[
  {
"ProductId":2,
"Name":"@CONSTELLATION",
"Describe":"产品描述",
"Keys":"关键字1，关键字2",
"CpId|988221-9009876988":1,
"ProductLine":"归属产品线1",
"Status|1-7":1,
"ChargeType":1,
"PayType":1,
"PlatformType":1,
"BossId":"100001",
"ProductType":1,
"Fee|0-100":100,
"EnableTag":0,
"StartTime":"2017-07-13 19:21:00",
"EndTime":"2017-09-01 10:00:00",
},

]

});
var data2 = Mock.mock('http://address:port/productCenter/productDataDeclareCallback?page=3&&pagesize=10',{    
  "ProductInfos|10":[
  {
"ProductId":3,
"Name":"@CONSTELLATION",
"Describe":"产品描述",
"Keys":"关键字1，关键字2",
"CpId|988221-9009876988":1,
"ProductLine":"归属产品线1",
"Status|1-7":1,
"ChargeType":1,
"PayType":1,
"PlatformType":1,
"BossId":"100001",
"ProductType":1,
"Fee|0-100":100,
"EnableTag":0,
"StartTime":"2017-07-13 19:21:00",
"EndTime":"2017-09-01 10:00:00",
},

]

});
var data2 = Mock.mock('http://address:port/productCenter/productDataDeclareCallback?page=4&&pagesize=10',{    
  "ProductInfos|10":[
  {
"ProductId":4,
"Name":"@CONSTELLATION",
"Describe":"产品描述",
"Keys":"关键字1，关键字2",
"CpId|988221-9009876988":1,
"ProductLine":"归属产品线1",
"Status|1-7":1,
"ChargeType":1,
"PayType":1,
"PlatformType":1,
"BossId":"100001",
"ProductType":1,
"Fee|0-100":100,
"EnableTag":0,
"StartTime":"2017-07-13 19:21:00",
"EndTime":"2017-09-01 10:00:00",
},

]

});
var data2 = Mock.mock('http://address:port/productCenter/productDataDeclareCallback?page=5&&pagesize=10',{    
  "ProductInfos|10":[
  {
"ProductId":5,
"Name":"@CONSTELLATION",
"Describe":"产品描述",
"Keys":"关键字1，关键字2",
"CpId|988221-9009876988":1,
"ProductLine":"归属产品线1",
"Status|1-7":1,
"ChargeType":1,
"PayType":1,
"PlatformType":1,
"BossId":"100001",
"ProductType":1,
"Fee|0-100":100,
"EnableTag":0,
"StartTime":"2017-07-13 19:21:00",
"EndTime":"2017-09-01 10:00:00",
},

]

});
var data2 = Mock.mock('http://address:port/productCenter/productDataDeclareCallback?page=6&&pagesize=10',{    
  "ProductInfos|10":[
  {
"ProductId":6,
"Name":"@CONSTELLATION",
"Describe":"产品描述",
"Keys":"关键字1，关键字2",
"CpId|988221-9009876988":1,
"ProductLine":"归属产品线1",
"Status|1-7":1,
"ChargeType":1,
"PayType":1,
"PlatformType":1,
"BossId":"100001",
"ProductType":1,
"Fee|0-100":100,
"EnableTag":0,
"StartTime":"2017-07-13 19:21:00",
"EndTime":"2017-09-01 10:00:00",
},

]

});
var data2 = Mock.mock('http://address:port/productCenter/productDataDeclareCallback?page=7&&pagesize=10',{    
  "ProductInfos|10":[
  {
"ProductId":7,
"Name":"@CONSTELLATION",
"Describe":"产品描述",
"Keys":"关键字1，关键字2",
"CpId|988221-9009876988":1,
"ProductLine":"归属产品线1",
"Status|1-7":1,
"ChargeType":1,
"PayType":1,
"PlatformType":1,
"BossId":"100001",
"ProductType":1,
"Fee|0-100":100,
"EnableTag":0,
"StartTime":"2017-07-13 19:21:00",
"EndTime":"2017-09-01 10:00:00",
},

]

});
var data3 = Mock.mock('http://address:port/productCenter/productDataDeclareCallback?id=100200300',{    
  "ProductInfos|10":[
  {
"ProductId":0,
"Name":"@CONSTELLATION",
"Describe":"产品描述",
"Keys":"关键字1，关键字2",
"CpId|988221-9009876988":1,
"ProductLine":"归属产品线1",
"Status|1-7":1,
"ChargeType":1,
"PayType":1,
"PlatformType":1,
"BossId":"100001",
"ProductType":1,
"Fee|0-100":100,
"EnableTag":0,
"StartTime":"2017-07-13 19:21:00",
"EndTime":"2017-09-01 10:00:00",
},

]

});

const state = {
  // 定义状态
    page:1,
    items:[]
}

const getters={
	getTable(state){
		return state.page;
	},
	getRes(state){
		// axios.get('http://address:port/productCenter/productDataDeclareCallback?page='+state.page+'&&pagesize=10').then((res)=>{
  //      var res = res.data;
  //      state.items=res.ProductInfos;
  //      console.log(state.items);
       
  //   })
		return state.items;
	}
}

const mutations={
	changeValue(state,pageNum){
		state.page=pageNum;
	},
  loadList(state,pageNum){
    state.page=pageNum;
  }
}
const actions ={
	changeValue(context,pageNum){
		axios.get('http://address:port/productCenter/productDataDeclareCallback?page='+pageNum+'&&pagesize=10').then((res)=>{
       var res = res.data;
       state.items=res.ProductInfos;
       console.log(state.items);
       
    })
		context.commit("changeValue",pageNum);
	},
  loadList(context,pageNum){
    axios.get('http://address:port/productCenter/productDataDeclareCallback?page='+pageNum+'&&pagesize=10').then((res)=>{
       var res = res.data;
       state.items=res.ProductInfos;
       console.log(state.items);
       
    })
    context.commit("loadList",pageNum);
  }

}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})