<template>
  <select v-model="$store.state.slected" name="select1" id="select1" v-bind:style="style">
    <option  v-for="item in $store.state.selectData" v-bind:value="item" >
      {{item}}
    </option>
  </select>
  <!-- <select v-model="$store.state.selected">
  <option v-for="option in $store.state.options" v-bind:value="option.value">
    {{option.text }}
  </option>
</select> -->
</template>

<script>
export default {
  name: 'Select',
  props:['text','w','h','bg','color','optionData'],
  data () {
    return {
     style:{
      width:this.w,
      height:this.h,
      background:this.bg,
      lineHeight:this.height,
      color:this.color,
      optionData:this.optionData
    }
    }
  },
  computed:{
    // fill:function(){
    //   this.slected=this.optionData[0];
    // }
  },
  methods:{
    // selectVaule:function(){
    //   this.$emit('sendSlectedValue',this.slected);
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#select1{
  width: 200px;
  height: 30px;
  background: #ffffff;
  padding-left: 5px;
  border-radius: 0;
  border: 1px solid #dedede;
  background: url('../../assets/arrow-down.png') no-repeat 95% 11px;
}

</style>
