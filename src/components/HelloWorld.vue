<template>
  <div id="myChart" :style="{width: '500px', height: '500px'}">


  </div>
</template>

<script>
import 'echarts/map/js/china.js' // 引入中国地图数据
export default {
  name: 'echarts',
  data () {
    return {
    }
  },
  created(){
  },
  mounted(){
    this.playEcharts()
  },
  methods:{
    //初始化echarts
    playEcharts(){
    function randomData() {  
     return Math.round(Math.random()*500);  
    } 
    let mydata = [  
        {name: '北京',value: '100' },{name: '天津',value: randomData() },  
        {name: '上海',value: randomData() },{name: '重庆',value: randomData() },  
        {name: '河北',value: randomData() },{name: '河南',value: randomData() },  
        {name: '云南',value: randomData() },{name: '辽宁',value: randomData() },  
        {name: '黑龙江',value: randomData() },{name: '湖南',value: randomData() },  
        {name: '安徽',value: randomData() },{name: '山东',value: randomData() },  
        {name: '新疆',value: randomData() },{name: '江苏',value: randomData() },  
        {name: '浙江',value: randomData() },{name: '江西',value: randomData() },  
        {name: '湖北',value: randomData() },{name: '广西',value: randomData() },  
        {name: '甘肃',value: randomData() },{name: '山西',value: randomData() },  
        {name: '内蒙古',value: randomData() },{name: '陕西',value: randomData() },  
        {name: '吉林',value: randomData() },{name: '福建',value: randomData() },  
        {name: '贵州',value: randomData() },{name: '广东',value: randomData() },  
        {name: '青海',value: randomData() },{name: '西藏',value: randomData() },  
        {name: '四川',value: randomData() },{name: '宁夏',value: randomData() },  
        {name: '海南',value: randomData() },{name: '台湾',value: randomData() },  
        {name: '香港',value: randomData() },{name: '澳门',value: randomData() }  
    ];
    //初始化
    let myChart = this.$echarts.init(document.getElementById('myChart'))
    //窗口变化时，echarts刷新  
    window.onresize = myChart.resize;
    //进行相关配置
    myChart.setOption({
      //标题
      title:{
        //标题名称
        text:'访问情况分析图',
        //水平居中
        x:'center'
      },
      //图表系列选项
      series:[{
        //图表类型为地图
        type:'map',
        //中国地图
        map:'china',
        //数据
        data:mydata
      }],
      //左下角视觉颜色控制器
      visualMap: {
        //最小值
        min: 0,
        //最大值
        max: 1500,
        //水平放置位置
        right: 'right',
        //竖直放置位置
        top: 'bottom',
        //视觉控制器上方和下方显示文字
        text: ['高', '低'],
        //整体控制器透明度
        calculable: true,
        //
        inRange: {
            color: ['#e0ffff', '#006edd','#ccc']
        },
        show: true
      },
    })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
