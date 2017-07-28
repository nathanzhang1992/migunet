<template>
  <div v-bind:style="style" class="btn" @click="changeValue">{{text}}</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'Button',
  props:['text','w','h','bg','color'],
  data () {
    return {
     style:{
      width:this.w,
      height:this.h,
      background:this.bg,
      lineHeight:this.height,
      color:this.color
    }
    }
  },
  methods:mapActions(["changeValue"])

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.btn{
    font-size: 14px;
    color: #ffffff;
    width: 100px;
    /*height: 34px;*/
    background: #46bafe;
    line-height: 34px;
    cursor: pointer;
    text-align: center;
    border-radius: 4px;
    box-sizing:border-box;
    border: 1px solid #46bafe;

}

</style>
