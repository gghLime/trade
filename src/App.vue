<template>
    <div id="app">
    <mt-header fixed title="欧洲服装贸易管理系统" class="head"></mt-header>

    <div v-show="$route.path === '/'">
      <router-view/>
    </div>
    <div  v-if="$route.path !== '/'">
      
    <mt-tab-container v-model="selected">

      <mt-tab-container-item id="goods" v-show="$route.path === '/Goods'">
        <router-view/>
      </mt-tab-container-item>
        
      <mt-tab-container-item id="warehouse" v-show="$route.path === '/Warehouse'">
        <router-view/>
      </mt-tab-container-item>

      <mt-tab-container-item id="finance" v-show="$route.path === '/Finance'">
        <router-view/>
      </mt-tab-container-item>

      <mt-tab-container-item id="my" v-show="$route.path === '/My'">
        <router-view/>
      </mt-tab-container-item>

    </mt-tab-container>



    <mt-tabbar v-model="selected" fixed>
     <mt-tab-item id="goods">
       <img slot="icon" src="@/assets/goods.png">
       销售
     </mt-tab-item>
     <mt-tab-item id="warehouse">
       <img slot="icon" src="@/assets/warehouse.png">
       仓储
     </mt-tab-item>
     <mt-tab-item id="finance">
       <img slot="icon" src="@/assets/finance.png">
       财务
     </mt-tab-item>
     <mt-tab-item id="my">
       <img slot="icon" src="@/assets/my.png">
       我的
     </mt-tab-item>
    </mt-tabbar>

    </div>

  </div>
</template>

<script>
  // eslint-disable-next-line
  // @ is an alias to /src
  /* eslint-disable */
    export default {
        components: {
        },
        data: function () {
            return {
              selected: ''
            }
        },
        watch: {
          selected: function() {
            if(this.selected == 'goods') {
              this.$router.push('/Goods');
            }else if(this.selected == 'warehouse') {
              this.$router.push('/Warehouse');
            }else if(this.selected == 'finance') {
              this.$router.push('/Finance');
            }else if(this.selected == 'my') {
              this.$router.push('/My');
            }
          }
          
        },
        methods: {},
        created() {
        },
        mounted() {
        }
    }
</script>
<style lang="scss" scoped>
  @import '~@/styles/themes.scss';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  body{
    background: #DCDCDC;
  }
  .head {
    width: 100%;
    height: 60px;
    background-color: #00b9f1;
    font-size: 18px;
    text-align: center;
    line-height: 40px;
  }
</style>
