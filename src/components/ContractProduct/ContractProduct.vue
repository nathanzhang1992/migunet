<template>
<div class="container" @click="hideSelectOption">
    <v-Header></v-Header>
    <div class="main-wrapper">
      <div class="nav-wrapper">
        <v-Nav></v-Nav>
      </div>
      <div class="table-wrapper">
        <v-Search title="合约产品管理"></v-Search>
        <v-Table></v-Table>
        <v-Paging></v-Paging>
      </div>
    </div>

</div>  
</template>

<script>
import vHeader from '../common/Header'
import vTable  from '../common/Table2'
import vNav from '../common/Nav'
import Mock from 'mockjs'
import calendar from '../common/calendar.vue'
import vSearch from '../common/Search'
import vPaging from '../common/Paging'




var data = Mock.mock('http://www.ppt.com',{
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
// 输出结果
// console.log(JSON.stringify(data, null, 4));

export default {
  name: 'ContractProduct',
  components:{
    vHeader,
    vTable,
    vNav,
    calendar,
    vSearch,
    vPaging
  },
  methods:{
    hideSelect:function(){

      // this.$http.get('http://www.ppt.com').then((data)=>{
      //  var res = JSON.parse(data.bodyText);
      //     console.log(res);
      // });
    },
    hideSelectOption(){
      this.$store.dispatch('setOptionState',false);
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container{
  
}
.main-wrapper{
  background: #f4f4f4;
}
.nav-wrapper{
  float: left;
}
.table-wrapper{
  float: left;
  margin-left: 20px;
  width: 1050px;
  background: #ffffff;
  width: 1157px;
  box-sizing: border-box;
  margin-top:20px;
  padding-bottom: 50px;
}
.main-wrapper:after{
  content: '';
  display: block;
  clear: both;
}
.date-wrapper{
    
}

</style>
