<template>
  <div id="myChart" :style="{width: '300px', height: '300px'}">


  </div>
</template>

<script>
import '../../node_modules/echarts/map/js/china.js' // 引入中国地图数据
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
    //初始化
    let myChart = this.$echarts.init(document.getElementById('myChart'))
    //窗口变化时，echarts刷新  
    window.onresize = myChart.resize;

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
