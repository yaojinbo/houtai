<template>
  <div  :style="{width: '500px', height: '500px'}">
      <el-menu  class="el-menu-demo" mode="horizontal" >
            <el-menu-item index="1" @click="goChina()">中国地图</el-menu-item>
            <el-menu-item index="1" @click="gozhu()">柱状图</el-menu-item>
            <el-menu-item index="1" @click="gozxjiehe()">柱状图结合折线图</el-menu-item>
      </el-menu>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        
      }
    },
    methods:{
      goChina(){
        this.$router.push({
          path:'/map'
        })
      },
      gozhu(){
        this.$router.push({
          path:'/zhu'
        })
      },
      gozxjiehe(){
        this.$router.push({
          path:'/zxjiehe'
        })
      }
    }
  }
</script>
<style  lang="scss" scoped>

</style>