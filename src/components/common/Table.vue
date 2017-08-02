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
          <div class="l-app-name">{{item.name}}</div>
        </td>
        <td>{{item.productId}}</td>
        <td>{{item.cpId}}</td>
        <td>{{item.fee}}</td>
        <td><span>{{item.status}}</span></td>
        <td><span>{{item.auditStatus}}</span></td>
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
    items(){
      let allData=this.$store.getters.getListData;
      let list =allData.list;
      let newList=[];
      newList=list;
      if(newList){
        newList.forEach(function(e){
        
        if(e.status=='1'){
          e.status='上线报备中';
        }
        if(e.status=='2'){
          e.status='上线报备失败';
        }
        if(e.status=='3'){
          e.status='变更报备中';
        }
        if(e.status=='4'){
          e.status='变更报备失败';
        }
        if(e.status=='5'){
          e.status='下线报备中';
        }
        if(e.status=='6'){
          e.status='下线报备失败';
        }
        if(e.auditStatus=='1'){
          e.auditStatus='上线报备中';
        }
        if(e.auditStatus=='2'){
          e.auditStatus='上线报备失败';
        }
        if(e.auditStatus=='3'){
          e.auditStatus='变更报备中';
        }
        if(e.auditStatus=='4'){
          e.auditStatus='变更报备失败';
        }
        if(e.auditStatus=='5'){
          e.auditStatus='下线报备中';
        }
        if(e.auditStatus=='6'){
          e.auditStatus='下线报备失败';
        }
      });
      }
      
      return newList;
    }

  },
  mounted(){
    this.$store.dispatch('loadListData');
    
  },
  methods:{
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
