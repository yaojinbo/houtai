<template>
  <div id="myChart" :style="{width: '500px', height: '500px'}">


  </div>
</template>
<script>
export default {
    name: 'echarts',
    data () {
    return {
    }
    },
    mounted(){
        this.playEcharts()
    },
    methods:{
        playEcharts(){
            //初始化
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            //窗口变化时，echarts刷新  
            window.onresize = myChart.resize;
            //进行相关配置
            myChart.setOption({
                //标题
                title:{
                    //标题名称
                    text:'2020年法律法规查询TOP10',
                    //水平居中
                    x:'center',
                    //标题距离上部分距离
                    top:30,
                },
                //柱状图上方的选项
                legend:{
                    //选项数据
                    data:['查询次数'],
                    //选项距离上部分距离
                    top:60,
                    backgroundColor:'#ccc'
                },
                //X轴配置
                xAxis:{
                    //x轴是否显示
                    show:true
                },
                //y轴配置
                yAxis:{
                  //y轴是否显示
                  show:true,
                  //坐标轴轴线相关设置
                  axisLine:{
                    //是否显示坐标轴
                    show:true
                  }
                },
                //图表系列选项
                series:[{
                  name:'查询次数', 
                  //图表类型为柱状图
                  type:'bar',
                //   label: {
                //         show: true,
                //         position: 'inside'
                //   },
                //   //柱的数据
                //   data:[200,170,180,200,300,120]
                }],
            })
        }
    }
}
</script>
<style lang="scss" scoped>

</style>