<template>
  <div class="container">
    <v-Header></v-Header>
    <div class="main-wrapper">
      <div class="nav-wrapper">
        <v-Nav></v-Nav>
      </div>
      <div class="add-product-wrapper">
        <div class="bread-menu">
          <span class="bread-link">产品管理</span>
          >
          <span class="bread-link">合约产品管理</span>
          >
          <span>产品管理新增</span>
        </div>
        <div class="add-main">
          <div class="table-wrapper">
          <div class="add-title">
            产品管理新增
          </div>
          <div class="step-wrapper">
            <div class="step">
            <div class="step-item">
              <div class="step-circle active"></div>
              <div class="step-text">基本信息填写</div>
            </div>
            <div class="step-item">
              <div class="step-circle"></div>
              <div class="step-text">批价配置</div>
            </div>
            <div class="step-item">
              <div class="step-circle"></div>
              <div class="step-text">资费信息配置</div>
            </div>
          </div>
          </div>
          <div class="input-area">
            <div class="input-row">
            <span class="input-text"> <span class="required">*</span> 产品名称（中文）：</span>
            <span class="row-wrapper">
              <input  type="text" placeholder="请输入" />
            </span>
          </div>
          <div class="input-row">
            <span class="input-text"> 产品描述（中文）：</span>
            <span class="row-wrapper row-wrapper-ta">
              <!-- <textarea rows="3" cols="20">
                </textarea> -->
              <textarea  placeholder="请输入"></textarea>
            </span>
          </div>
          <div class="input-row">
            <span class="input-text"> <span class="required">*</span>搜索关键字：</span>
            <span class="row-wrapper row-wrapper-ta">
              <textarea  placeholder="请输入"></textarea>
            </span>
          </div>
          <div class="input-row">
            <span class="input-text"> <span class="required">*</span>生效时间：</span>
            <span class="row-wrapper">
              <pick-date></pick-date>
            </span>
          </div>
          <div class="input-row">
            <span class="input-text"> <span class="required">*</span>失效时间：</span>
            <span class="row-wrapper">
              <pick-date></pick-date>
            </span>
          </div>
          <div class="input-row">
            <span class="input-text"> <span class="required">*</span>业务归属地：</span>
            <span class="row-wrapper row-wrapper-new">
              <select name="city-select" id="city-select">
                <option>广州</option>
                <option>深圳</option>
                <option>北京</option>
                <option>南京</option>
                <option>上海</option>
              </select>
            </span>
          </div>
          <div class="input-row">
            <span class="input-text"> <span class="required">*</span> 渠道ID：</span>
            <span class="row-wrapper">
              <input  type="text" placeholder="请输入" />
            </span>
          </div>
          <div class="input-row">
            <span class="input-text">&nbsp;</span>
            <span class="row-wrapper row-wrapper-no">
              <span class="tb-reset l-content-w tb-search">下一步</span>
              <span class="tb-reset l-content-w">取消</span>
            </span>
          </div>
          </div>
          
          
        </div>
        </div>
        
      </div>
      
    </div>
</div>  
</template>

<script>
import vHeader from '../common/Header'
import vTable  from '../common/Table'
import vNav from '../common/Nav'
import Mock from 'mockjs'
import PickDate from '../PickDate/PickDate'
export default {
  name: 'AddContractProduct',
  components:{
    vHeader,
    vTable,
    vNav,
    PickDate
  },
  data () {
    return {
      
    }
  },
  methods:{
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  .tb-reset {
    display: inline-block;
    font-size: 14px;
    color: #46bafe;
    width: 74px;
    height: 32px;
    background: #fff;
    line-height: 32px;
    border: 1px solid #46bafe;
    cursor: default;
    box-sizing:border-box;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
  }
  /*.tb-reset:hover{
    
  }*/
  .tb-search{
    background: #46bafe;
    color: #ffffff;
  }
  .l-content-w {
    margin-right: 20px;
  }
.step-wrapper{
  padding:20px 0;
  background:#f2f8ff; 
}
.step{
  width: 483px;
  margin:0 auto;
  position: relative;
}
.step:before{
  content: '';
  width: 420px;
  display: block;
  height: 1px;
  background: #d6e1e5;
  position: absolute;
  left: 30px;
  top: 23px;
}
.step:after{
  content: '';
  clear: both;
  display: block;
}
.step-item{
  float: left;
}
.step-item + .step-item{
  
  margin-left: 145px;
}
.step-text{
  text-align: center;
  color: #171717;
  font-size:12px;
  margin-top: 8px;
}
.step-circle{
  width: 45px;
  height: 45px;
  border:solid 1px #d6e1e5;
  position: relative;
  border-radius: 50%;
  margin:0 auto;
  background: #f2f8ff;
}

.step-circle:after{
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  background: #d6e1e5;
  left: 50%;
  top: 50%;
  margin-left: -12px;
  margin-top: -12px;
  border-radius: 50%;
}
.step-circle.active:after{
  background: #46bafe;
}
.add-product-wrapper{
  float: left;
  width: 1196px;

}
.bread-menu{
  font-size: 12px;
  color:#666666;
  padding:16px 0 20px 16px;
  background: #ffffff;
}
.container{
  width: 100%;
}
.main-wrapper{
  background: #f4f4f4;
}
.nav-wrapper{
  float: left;
}
.table-wrapper{
  /*float: left;*/
  /*margin-left: 20px;*/
  /*width: 1050px;*/
  background: #ffffff;
  margin-top: 20px;
  padding-bottom: 30px;
}
/*.main-wrapper:after{
  content: '';
  display: block;
  clear: both;
}*/
.main-wrapper:before,
  .main-wrapper:after {
    content: " ";
    display: table;
  }

  .main-wrapper:after {
    clear: both;
  }
.date-wrapper{
    
}
.bread-link:hover{
  color:#46bafe;
  cursor: pointer;
}
.input-row+.input-row{
  margin-top: 18px;
}
.row-wrapper{
  display: inline-block;
  width: 200px;
  background: #ffffff;
}
.row-wrapper-ta{
  width: 340px;
  height: 80px;
}
.row-wrapper textarea{
  width: 340px;
  height: 80px;
  box-sizing:border-box;
}

.row-wrapper input{
    width: 200px;
    height: 32px;
    padding-left: 5px;
    box-sizing: border-box;
    border: solid 1px #d6e1e5;
}
.input-text{
  width: 165px;
  display: inline-block;
  line-height: 32px;
  margin-right: 30px;
  text-align: right;
  vertical-align: top;
}
.required{
  color: red;
}
#city-select{
  background: #ffffff;
  width: 200px;
    height: 32px;
    padding-left: 5px;
    box-sizing: border-box;
    border: solid 1px #d6e1e5;
    background: url("../../assets/def.png") no-repeat 97% 7px;
    border-radius: 0;
}
.row-wrapper-no{
  background: transparent;
  margin-top: 10px;
}
.add-title{
  font-size:14px;
  color: #292c31;
  font-weight: bold;
  line-height: 50px;
  padding-left: 20px;
}
.add-main{
  background: #f4f4f4;
  padding: 0 20px;
}
.input-area{
  margin-top: 30px;
  padding-left: 40px;
}
</style>
