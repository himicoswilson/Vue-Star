<script>

</script>

<template>
<div>
  <router-link to="/">
    <el-button type="primary" round>前端</el-button>
  </router-link>
  <router-link to="/linux">
    <el-button type="success" round>Linux</el-button>
  </router-link>
  <router-link to="/tools">
    <el-button type="warning" round>工具</el-button>
  </router-link>
  <router-link to="/themes">
    <el-button type="danger" round>Hexo 主题</el-button>
  </router-link>
</div>
<router-view></router-view>
</template>
<style scoped>

div{
  text-align: center;
}

button{
  margin: 2.5px;
}
</style>