<template>
  <div id="app">
    <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router>
      <el-menu-item index="/home">Home</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
    </el-menu>
    <div class="line"></div>
    
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {

    }
  }

</script>

<style>


</style>
