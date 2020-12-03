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
                    text:'行业年度事故图',
                    //水平居中
                    x:'center',
                    //标题距离上部分距离
                    top:30
                },
                //柱状图上方的选项
                legend:{
                    //选项数据
                    data:['事故数量','死亡人数'],
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
                //单y轴配置
                // yAxis:{
                //   //y轴是否显示
                //   show:true,
                //   //y轴最小值
                //   min:0,
                //   //刻度线
                //   axisTick:{
                //     //隐藏刻度线 
		            //     show:false
                //   },
                //   //网格线
                //    splitLine: {
                //      //去掉网格线
                //     show: false
                //   },
                //   //坐标轴轴线相关设置
                //   axisLine:{
                //     //是否显示坐标轴
                //     show:true
                //   }
                // },
                //如果想绑定双y轴,注意如果绑定双y轴并且显示刻度的话
                yAxis:[{
                  //y轴名称
                  name:'事故数量',
                   //y轴是否显示
                  show:true,
                  //y轴最小值
                  min:0,
                  //y轴最大值
                  max:800,
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
                },{
                  //y轴最小值
                  min:0,
                  //y轴最大值
                  max:1600,
                  //y轴名称
                  name:'死亡人数',
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
                }],
                //坐标系网格配置
                grid:{
                  //距离上边距离100
                  top:100
                },
                //图表系列选项
                series:[{
                  //选项名称
                  name:'死亡人数',
                  //图标类型为折线图
                  type:'line',
                  //绑定第几个Y轴
                  yAxisIned:2,
                  //线的数据
                  data:[400,270,280,400,400,420,180,200,250],
                  //图形上的文本标签
                  label:{
                    //是否显示文本标签
                    show:true,
                    //文本显示位置
                    position:'inside',
                    //文字颜色
                    color:'black'
                  }
                },{
                  //选项名称
                  name:'事故数量', 
                  //图表类型为柱状图
                  type:'bar',
                  //绑定第几个Y轴
                  yAxisIned:1,
                  //柱子之间的间距
                  barCategoryGap:'50%',
                  //图形上的文本标签
                  label:{
                    //是否显示文本标签
                    show:true,
                    //文本显示位置
                    position:'inside',
                    //文字颜色
                    color:'black'
                  },
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