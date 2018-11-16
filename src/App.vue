<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link>-->
    <!--</div>-->
    <el-container>
      <!--侧边栏-->
      <el-aside width="200px" v-show="$route.path !== '/'">
        <asideTag></asideTag>
      </el-aside>
      <el-container>
        <!--头部-->
        <el-header  v-show="$route.path !== '/'">
          <headerTag></headerTag>
        </el-header>
        <!--内容-->
        <el-main :class="{'is-login': $route.path === '/'}">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import asideTag from '@/components/aside'
  import headerTag from '@/components/header'
    export default {
        components: {
            asideTag,
            headerTag
        },
        data: function () {
            return {}
        },
        methods: {},
        created() {
        },
        mounted() {
        }
    }
</script>
<style lang="scss">
  @import '~@/styles/themes.scss';
  body, html{
    height: 100%;
    margin: 0;
    padding: 0;
  }
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.el-container{
  height: 100%;
}
.el-header, .el-footer {
  background-color: $themse-BgHead;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: $themes-BgColor;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  height: 100%;
  min-width: 1000px;
  min-height: 500px;
}
  .is-login{
    min-width: 1200px;
    padding: 0 !important;
  }

  /*弹出框*/
  .el-dialog{
    border-radius: 4px !important;
  }
  .el-dialog__header{
    padding: 0 !important;
  }
  .el-dialog__body{
    padding: 20px !important;
    text-align: left;
  }
</style>
