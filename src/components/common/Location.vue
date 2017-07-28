<template>
  <div class="mask" v-bind:class="{show:isShow}">
    <div class="dialog">
      <div class="dialog-head">
        <div class="dialog-title">
          选择业务归属地
        </div>
        <div class="close" @click="closeMask"></div>
      </div>

      <div class="dialog-content">
        <ul>
          <li v-for="item in locations">
            <h3 class="location-title">{{item.title}}</h3>
            <p class="location-item">
              <span v-for="text in item.items" :class="{active:selected === text}" @click="selectItem(text)">{{text}}</span>
            </p>
          </li>
        </ul>
      </div>

      <div class="dialog-btn-wrapper">
        <div class="dialog-btn" @click="closeMask">
          <Confirm-Button text="确定"></Confirm-Button>
        </div>
        <div class="dialog-btn">
          <CancelButton text="取消"></CancelButton>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  import ConfirmButton from '../common/Button1'
  import CancelButton from '../common/Button2'



  export default {
    name: 'Location',
    props: ['showLocation'],
    components:{
      ConfirmButton,
      CancelButton
    },
    data() {
      return{
        isShow: this.showLocation,
        locations:
          [
            {
              title: 'ABCDEFG',
              items:
                [ '安徽省', '福建省', '甘肃省' ]
            },
            {
              title: 'HIJKLMN',
              items:
                [ '广东省', '广西省', '贵州省', '海南省', '河北省', '河南省', '黑龙江省', '湖北省', '湖南省', '吉林省', '江苏省', '江西省', '辽宁省', '内蒙古省' ]
            },
            {
              title: 'OPQRST',
              items:
                [ '青海省', '山东省', '山西省', '陕西省', '四川省' ]
            },
            {
              title: 'UVWXYZ',
              items:
                [ '云南省', '浙江省' ]
            },
            {
              title: '全国',
              items:
                [ '全国' ]
            }
          ],
        selected: ''
      }
    },
    methods: {
      closeMask() {
        this.isShow = false;
        this.$emit('selected', this.selected);
      },
      selectItem(text) {
        this.selected = text;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  ul, li, p, h3 {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  .dialog-content {
    font-size: 14px;
  }
  .location-title {
    font-weight: normal;
    font-family: "Arial Narrow";
    color: #8a919d;
    width: 100px;
    height: 30px;
    line-height: 30px;
    position: relative;
    top: 0;
    margin: 10px 0;
  }
  .location-item {
    width: 0;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  .location-item span {
    display: inline-block;
    width: 74px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #4dbbfa;
    margin: 10px 0;
    border: 1px solid #fff;
    border-radius: 2px;
    cursor: pointer;
  }
  .active {
    border-color: #c1e8ff !important;
  }
  .mask {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.5);
    color:#333333;
  }
  .mask.show{
    display: block;
  }
  .mask.hide{
    display: none;
  }
  .dialog {
    width: 800px;
    position: absolute;
    top: 110px;
    left: 50%;
    margin-left: -400px;
    border: 1px solid #e1e1e1;
    background: #fff;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 28px;
    box-sizing:border-box;
    border-radius: 4px;
  }

  .dialog-title{
    font-size:14px;
    float: left;
  }
  .close{
    width: 16px;
    height: 16px;
    background: url('../../assets/close.png') no-repeat 0 0;
    background-size: 16px 16px;
    float: right;
    margin-top: 20px;
    cursor: pointer;
  }
  .res-title{
    font-size:18px;
    text-align: center;
    margin-top: 8px;

  }
  .res-des{
    font-size:14px;
    color:#666666;
    text-align: center;
    margin-top: 8px;
  }
  .dialog-head{
    line-height: 58px;
    border-bottom: solid 1px #f0f0f0;
  }
  .dialog-head:after{
    content:'';
    display: block;
    clear: both;
  }
  .dialog-icon{
    text-align: center;
    margin-top: 16px;
  }
  .dialog-btn{
    display: inline-block;
    margin-left: 14px;
  }
  .dialog-btn-wrapper{
    text-align: center;
    margin-top: 20px;
  }
</style>
