<template>
  <div class="container">
    <v-Pop></v-Pop>
    <v-Location :selected="selected" :showLocation="showLocation"></v-Location>
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
                  <div class="step-circle active"></div>
                  <div class="step-text">批价配置</div>
                </div>
                <div class="step-item">
                  <div class="step-circle active"></div>
                  <div class="step-text">资费信息配置</div>
                </div>
              </div>
            </div>
            <div class="input-area">
              <div class="input-row">
                <span class="input-text"> <span class="required">*</span> BOSS计费代码：</span>
            <span class="row-wrapper">
              <input type="text" placeholder="请输入"/>
            </span>
              </div>
              <div class="input-row">
                <span class="input-text"> <span class="required">*</span>  租费金额（分CN）：</span>
            <span class="row-wrapper">
              <input type="text" placeholder="请输入"/>
            </span>
              </div>
              <div class="input-row">
                <span class="input-text"> <span class="required">*</span>企业代码：</span>
            <span class="row-wrapper">
             <!--  <v-Select v-on:sendSlectedValue="getSlectedValue" v-bind:optionData="optionObj"></v-Select> -->
             <select class="typeSelect" name="" id="">
               <option value="1">咪咕包</option>
               <option value="2">咪咕包2</option>
               <option value="3">咪咕包3</option>
             </select>
            </span>
              </div>
              <div class="input-row">
                <span class="input-text"> <span class="required">*</span> 赠送的彩信业务：</span>
            <span class="row-wrapper">
              <input type="text" placeholder="请输入"/>
            </span>
              </div>
              <div class="input-row">
                <span class="input-text"> <span class="required">*</span>是否体验产品：</span>
            <span class="row-wrapper row-wrapper-ta">
              <label class="lable1"><input name="Fruit" type="radio" value=""/>是</label>
              <label class="lable1"><input name="Fruit" type="radio" value=""/>否</label>
              <div class="info">
                <p class="info-head">体验版本转正式版本，订购正式版本时短信二次确认信息设置
                  <span>(同步短搜配置)</span>：</p>

                <div class="info-input">
                  <div class="info-left">
                    <div class="input-row">
                      <span class="input-text input-text-new">短信订购接入码：</span>
            <span class="row-wrapper">
              <input type="text" placeholder="请输入"/>
            </span>
                    </div>
                    <div class="input-row">
                      <span class="input-text input-text-new"> 短信退订接入码：</span>
            <span class="row-wrapper">
              <input type="text" placeholder="请输入"/>
            </span>
                    </div>
                  </div>
                  <div class="info-right">
                    <div class="input-row">
                      <span class="input-text input-text-new">命令字：</span>
            <span class="row-wrapper">
              <input type="text" placeholder="请输入"/>
            </span>
                    </div>
                    <div class="input-row">
                      <span class="input-text input-text-new">命令字：</span>
            <span class="row-wrapper">
              <input type="text" placeholder="请输入"/>
            </span>
                    </div>
                  </div>
                  <div class="modify-wrapper">
                    <div class="modify">
                      修改短信发送提示语
                    </div>
                    <div class="des-area">
                      <span class="des-left">短信模板ID：</span>
                      <span class="des-right">sms.user.unsubconflict</span>
                    </div>
                    <div class="des-area">
                      <span class="des-left"> 短信模版信息：</span>
                      <span class="des-right">尊敬的用户，您还：由于您订购的动漫5元包，已赠送了《每日一笑》业务，故您之前订购的《每日一笑》
业务将自动为您取消，敬请留意。</span>
                    </div>
                  </div>

                  <div class="input-row">
                    <span class="input-text input-feel"> 短信二次确认下发的<br/>
提示短信接入码：</span>
            <span class="row-wrapper">
              <input type="text" placeholder="请输入"/>
            </span>
                  </div>


                </div>

              </div>
            </span>
              </div>
              <div class="input-row input-row-spa">
                <span class="input-text">限制发送提示短信省份：</span>
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
                <span class="input-text"> 订购成功下发提示短信：</span>
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
                <span class="input-text"> <span class="required">*</span>业务归属地：</span>
            <span class="row-wrapper row-wrapper-new">
              <input name="city-select" id="city-select" v-model="location" @click="selectLocation">
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
  import vPop from '../common/Pop'
  import vLocation from  '../common/Location'
  export default {
    name: 'AddContractProduct',
    components: {
      vHeader,
      vTable,
      vNav,
      PickDate,
      vPop,
      vLocation
    },
    data() {
      return {
        location:'',
        showLocation: false
      }
    },
    methods:{
      selected(location){
        this.location = location;
      },
      selectLocation() {
        this.showLocation = true;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .info {
    width: 808px;
    padding: 20px 0;
    border:solid 1px #d6e1e5;
    position: relative;
    margin-top: 10px;
  }
  /*.info:before{*/
    /*content: '';*/
    /*position: absolute;*/
    /*left: 20px;*/
    /*top: -10px;*/
    /*width: 0;*/
    /*height: 0;*/
    /*border-style: solid;*/
    /*border-width: 0 9.5px 19px 9.5px;*/
    /*border-color: transparent transparent #ffffff transparent*/

  /*}*/
  .info:before{
    content: '';
    position: absolute;
    left: 80px;
    top: -9px;
    width: 20px;
    height: 10px;
    background: url("../../assets/arrow-up.png") #ffffff no-repeat;
  }

  .lable1 {
    width: 30px;
    display: inline;
    margin-right: 20px;
  }

  .lable1 > input {
    display: inline-block;
    width: 15px;
    height: 15px;
    box-sizing: border-box;
  }

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
    box-sizing: border-box;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
  }

  /*.tb-reset:hover{

  }*/
  .tb-search {
    background: #46bafe;
    color: #ffffff;
  }

  .l-content-w {
    margin-right: 20px;
  }

  .step-wrapper {
    padding: 20px 0;
    background: #f2f8ff;
  }

  .step {
    width: 483px;
    margin: 0 auto;
    position: relative;
  }

  .step:before {
    content: '';
    width: 420px;
    display: block;
    height: 1px;
    background: #d6e1e5;
    position: absolute;
    left: 30px;
    top: 23px;
  }

  .step:after {
    content: '';
    clear: both;
    display: block;
  }

  .step-item {
    float: left;
  }

  .step-item + .step-item {

    margin-left: 145px;
  }

  .step-text {
    text-align: center;
    color: #171717;
    font-size: 12px;
    margin-top: 8px;
  }

  .step-circle {
    width: 45px;
    height: 45px;
    border: solid 1px #d6e1e5;
    position: relative;
    border-radius: 50%;
    margin: 0 auto;
    background: #f2f8ff;
  }

  .step-circle:after {
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

  .step-circle.active:after {
    background: #46bafe;
  }

  .add-product-wrapper {
    float: left;
    width: 1196px;

  }

  .bread-menu {
    font-size: 12px;
    color: #666666;
    padding: 16px 0 20px 16px;
    background: #ffffff;
  }

  .container {
    width: 100%;
  }

  .main-wrapper {
    background: #f4f4f4;
  }

  .nav-wrapper {
    float: left;
  }

  .table-wrapper {
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

  .date-wrapper {

  }

  .bread-link:hover {
    color: #46bafe;
    cursor: pointer;
  }

  .input-row + .input-row {
    margin-top: 18px;
  }

  .row-wrapper {
    display: inline-block;
    width: 200px;
    background: #ffffff;
    line-height: 32px;
  }

  .row-wrapper-ta {
    width: 340px;
    height: 80px;
  }

  .row-wrapper textarea {
    width: 340px;
    height: 80px;
    box-sizing: border-box;
  }

  .row-wrapper > input {
    width: 200px;
    height: 32px;
    padding-left: 5px;
    box-sizing: border-box;
    border: solid 1px #d6e1e5;
  }

  .input-text {
    width: 185px;
    display: inline-block;
    line-height: 32px;
    margin-right: 30px;
    text-align: right;
    vertical-align: top;
  }
  .des-left {
    width: 165px;
    display: inline-block;
    margin-right: 30px;
    text-align: right;
    vertical-align: top;
    line-height: 18px;
  }

.des-right{
    display: inline-block;
    vertical-align: top;
    width: 500px;
    line-height: 18px;
}
  .required {
    color: red;
  }

  #city-select {
    background: #ffffff;
    width: 200px;
    height: 32px;
    padding-left: 5px;
    box-sizing: border-box;
    border: solid 1px #d6e1e5;
    background: url("../../assets/def.png") no-repeat 97% 7px;
    border-radius: 0;
  }

  .row-wrapper-no {
    background: transparent;
    margin-top: 10px;
  }

  .add-title {
    font-size: 14px;
    color: #292c31;
    font-weight: bold;
    line-height: 50px;
    padding-left: 20px;
  }

  .add-main {
    background: #f4f4f4;
    padding: 0 20px;
  }

  .input-area {
    margin-top: 30px;
    padding-left: 40px;
  }

  .typeSelect {
    width: 200px;
    height: 30px;
    background: #ffffff;
    padding-left: 5px;
    border-radius: 0;
    border: 1px solid #dedede;
    background: url('../../assets/arrow-down.png') no-repeat 95% 11px;
  }

  .info-left {
    display: inline-block;
  }

  .info-right {
    display: inline-block;
  }

  .modify {
    border-radius: 2px;
    color: #46bafe;
    font-size: 12px;
    padding-right: 6px;
    padding-left: 46px;
    background: url('../../assets/edit.png') transparent no-repeat 17px 3px;
    cursor: pointer;
    margin-left: 20px;
    width: 190px;
    line-height: 32px;
    box-sizing: border-box;
    border: solid 1px #d6e1e5;
    margin-bottom: 20px;
  }
  .des-area{
    color:#6d7684;
    font-size:12px;
  }
  .modify-wrapper{
    background: #f2f8ff;
    margin-top: 20px;
    padding-top:10px;
    padding-bottom: 30px;
    margin-bottom: 20px;
  }
  .input-feel{
    line-height: 19px;
    text-align: center;
    width: 165px;
    padding-left: 15px;
  }
  .input-text-new{
    width: 150px;
  }
  .input-row-spa{
    margin-top: 50px !important;
  }
  .info-head{
    padding-left: 20px;
  }
</style>
