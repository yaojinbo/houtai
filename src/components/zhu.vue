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
                //单个标题样式
                // title:{
                    // //标题名称
                    // text:'2020年法律法规查询TOP10',
                    // //水平居中
                    // x:'center',
                    // //标题距离上部分距离
                    // top:30
                // },
                //如何给title中多个文字设置不同样式
                title:[
                  {
                    //标题名称
                    text:'TOP10',
                    //水平居中
                    x:'center',
                    //标题距离上部分距离
                    top:30,
                    //标题距离左部分距离
                    left:330,
                    //字体文本样式
                    textStyle:{
                      //字体颜色
                      color:'#BC4747'
                    }
                  },
                  {
                    //标题名称
                    text:'2020年法律法规查询',
                    //水平居中
                    x:'center',
                    //标题距离上部分距离
                    top:30,
                    //字体文本样式
                    textStyle:{
                      //字体颜色
                      color:'#2364B4'
                    }
                  }
                ],
                //柱状图上方的选项
                legend:{
                    //选项数据
                    data:['查询次数'],
                    //选项距离上部分距离
                    top:60,
                    //修改字体样式
                    textStyle:{
                      color:'#ccc'
                    },
                    //图标宽度
                    itemWidth: 30,
                    //图标高度
                    itemHeight:10
                },
                //X轴配置
                xAxis:{
                    //x轴是否显示
                    show:true,
                    //刻度线
                    axisTick:{
                      //隐藏刻度线 
		                  show:false
                    },
                    //x轴数据配置
                    data:['法规1','法规2','法规3','法规4','法规5','法规6','法规7','法规8','法规9']
                },
                //y轴配置
                yAxis:{
                  //y轴是否显示
                  show:true,
                  //y轴最小值
                  min:0,
                  //刻度线
                  axisTick:{
                    //隐藏刻度线 
		                show:false
                  },
                  //网格线
                   splitLine: {
                     //去掉网格线
                    show: false
                  },
                  //坐标轴轴线相关设置
                  axisLine:{
                    //是否显示坐标轴
                    show:true
                  }
                },
                //坐标系网格配置
                grid:{
                  //距离上边距离100
                  top:100
                },
                //图表系列选项
                series:[{
                  name:'查询次数', 
                  //图表类型为柱状图
                  type:'bar',
                  //柱子之间的间距
                  barCategoryGap:'50%',

                  //图形样式
                  itemStyle:{
                    //设置渐变色
                    normal:{
                        color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: "#284990" // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: "#6486D0" // 100% 处的颜色
                        }], false)
                    }
                  },
                  //柱的数据
                  data:[200,170,180,200,300,120,80,100,150]
                }],
            })
        }
    }
}
</script>
<style lang="scss" scoped>

</style>