<template>
    <div class="date-wrapper">
        <div class="flex">
            <div>
                <input style="position:relative" placeholder="生效时间" type="text" @click="openByDrop($event)" v-model="calendar3.display" readonly>
            </div>
        </div>
        <transition name="fade">
    <div class="calendar-dropdown" :style="{'left':(calendar3.left-260)+'px','top':(calendar3.top-80)+'px'}" v-if="calendar3.show">
        <calendar :zero="calendar3.zero" :lunar="calendar3.lunar" :value="calendar3.value" :begin="calendar3.begin" :end="calendar3.end" @select="calendar3.select"></calendar>
    </div>
    </transition>
    </div>
 
</template>

<script>
import calendar from '../common/calendar.vue'
export default {
  name: 'PickDate',
  components:{
    calendar
  },
  data(){
        return {
            calendar3:{
                display:"请输入日期",
                show:false,
                zero:true,
                // value:[2018,2,16], //默认日期
                lunar:false, //显示农历
                select:(value)=>{
                    this.calendar3.show=false;
                    this.calendar3.value=value;
                    this.calendar3.display=value.join("/");
                }
            }
        }
    },
  methods:{
    
    openByDrop(e){
            this.calendar3.show=true;
            this.calendar3.left=e.target.offsetLeft+199;
            this.calendar3.top=e.target.offsetTop+120;
           
            e.stopPropagation();
            window.setTimeout(()=>{
                document.addEventListener("click",(e)=>{
                    this.calendar3.show=false;
                    document.removeEventListener("click",()=>{},false);
                },false);
            },1000)
        },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.date-wrapper{
    width: 100%;
    position: relative;
    
}
.flex{
    /*width:150px;*/
    width: 100%;
}
.flex>div{
    /*padding:20px;*/
    /*width:150px;*/
    width: 100%;
    /*min-width:300px;*/
    /*border: 1px solid #eee;*/
    /*border-radius: 2px;*/
    position: relative;
}
.flex>div>span{
    position: absolute;
    left:0px;
    top:0px;
    padding:2px 10px;
    font-size:10px;
    border-radius:0 0 2px 0;
    background:#ea6151;
    color:#fff;
}
.flex>div>input{
    box-sizing: border-box;
    width:100%;
    border-radius: 2px;
    border:1px solid #dedede;
    font-size: 16px;
    background:url('../../assets/calendar.png') no-repeat 95% 7px;
        padding-left: 5px;
        color:#666;
        height: 32px;
}

/*transition*/
.fade-enter-active,
.fade-leave-active {
    transition: all .5s ease-in-out;
}
.fade-enter,.fade-leave-active{
    opacity: 0;
    transform: translateY(-10px);

}

/*下拉框*/
.calendar-dropdown{
    background: #fff;
    position: absolute;
    left:0;
    top:0;
    padding:20px;
    border: 1px solid #eee;
    border-radius: 2px;
    z-index: 2;
}
.calendar-dropdown:before {
    position: absolute;
    left:30px;
    top: -10px;
    content: "";
    border:5px solid rgba(0, 0, 0, 0);
    border-bottom-color: #DEDEDE;
}
.calendar-dropdown:after {
    position: absolute;
    left:30px;
    top: -9px;
    content: "";
    border:5px solid rgba(0, 0, 0, 0);
    border-bottom-color: #fff;
}

/*弹出框*/
.calendar-dialog{
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
}

.calendar-dialog-mask{
    background:rgba(255,255,255,.5);
    width:100%;
    height:100%;
}

.calendar-dialog-body{
    background: #fff;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    padding:20px;
    border: 1px solid #eee;
    border-radius: 2px;
}

</style>
