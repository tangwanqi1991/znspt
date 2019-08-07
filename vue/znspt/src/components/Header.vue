<template>
<div>
  <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link tag="li" to="/">后台首页</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">系统管理</template>
        <el-menu-item index="2-1">
          <router-link tag="li" to="/management">管理员</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link tag="li" to="/role">角色管理</router-link>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">商户管理</template>
        <el-menu-item index="3-1">商户列表</el-menu-item>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">设备管理</template>
        <el-menu-item index="4-1">设备列表</el-menu-item>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">用户管理</template>
        <el-menu-item index="5-1">用户列表</el-menu-item>
      </el-submenu>

      <el-menu-item index="3-2">
        <a href="https://www.ele.me" target="_blank">商户子系统</a>
      </el-menu-item>
    </el-menu>
</div>

</template>

<script>
export default {
  name: 'Header',
  data(){
    return {

    }
  }
}
</script>

<style scoped>

</style>

