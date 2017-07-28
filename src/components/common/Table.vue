<template>
  <div class="table-container">
    <!-- <v-Search v-on:searchInfo="searchSelect"></v-Search> -->
    <div class="main-area">
    <table class="NewTable2">
      <thead>
      <tr>
        <td width="150">产品名称</td>
        <td>产品ID</td>
        <td>CP／TP ID</td>
        <td>资费(分)</td>
        <td>业务状态</td>
        <td>审批状态</td>
        <td>操作</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items">
        <td>
          <div class="l-app-name">{{item.Name}}</div>
        </td>
        <td>{{item.ProductId}}</td><td>{{item.CpId}}</td>
        <td>{{item.Fee}}</td>
        <td><span>{{item.Status}}</span></td>
        <td><span>{{item.Status}}</span></td>
        <td class="option td-blue">详情<!-- <span class="td-detail td-blue" >详情</span> -->
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <!-- <v-Paging v-on:listenToChild="showMorePage"></v-Paging> -->
  </div>
  

</template>
<script>
import vSearch from '../common/Search'
import vPaging from '../common/Paging'
import Mock from 'mockjs'


  export default {
    name: 'Table',
    components:{
      vSearch,
      vPaging
    
    },
    data ()
  {
    return {
      // items: [],
      totalPage:1
    }
  },
  computed:{
    items:function(){
      return this.$store.getters.getRes;
    }

  },
  mounted(){
    this.$store.dispatch('loadList',1);
    
  },
  methods:{
  
    searchSelect:function(data){
      console.log(data);
      axios.post('http://address:port/productCenter/productDataDeclareCallback?id=100200300').then((res)=>{
       var res = res.data;
       this.items=res.ProductInfos;
       
    })

    }
  }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.table-container{
  background: #ffffff;
}
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .NewTable2 {
    width: 100%;
    font-size: 14px;
    color: #333;
    border-top: solid 1px #e1e1e1;
    
    padding-top: 20px;
  }

  .NewTable2 thead {
    background: #f2f8ff;
  }

  legend, td, th {
    padding: 0;
  }

  .NewTable2 td, .dialog-ctn, .l-content-button, .nl-table, .tb-reset {
    text-align: center;
  }

  .NewTable2 td {
    padding: 8px;
    /*border-right: solid 1px #e1e1e1;*/
    border-bottom: solid 1px #e1e1e1;
  }
  .NewTable2 tbody tr:hover{
    background: #f7f7f7;
  }

  .btn, .l-app-name {
    white-space: nowrap;
  }

  .l-app-name {
    width: 143px;
    display: block;
    word-wrap: normal;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .td-detail, .td-edit {
    margin-right: 15px;
    cursor: default;
  }

  .l-go, .td-delete, .td-detail, .td-edit {
    display: inline-block;
  }

  .td-blue {
    color: #6dadef !important;
  }

  .td-red {
    color: #f16767 !important;
  }
  .option{
    cursor: pointer;
  }
  .tab-wrapper{
    background: #f4f4f4;
  }
  .tab-wrapper:after{
    content:'';
    display: block;
    clear: both;
  }
  .tab-item{
    float: left;
    line-height: 46px;
    margin-right: 10px;
    color:#1e1e1e;
    font-size:14px;
    background: #e5e6e8;
    padding: 0 10px;
    cursor: pointer;
  }
  .tab-item.active{
    background: #ffffff;
  }
</style>
