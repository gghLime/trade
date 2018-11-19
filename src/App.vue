<template>
    <div id="app">
    <!-- <mt-header fixed title="欧洲服装贸易管理系统" class="head"></mt-header> -->
    <mt-header fixed title="欧洲服装贸易管理系统" class="head">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button @click="Shopping" slot="right">购物车</mt-button>
    </mt-header>


    <div v-show="$route.path === '/'">
      <router-view/>
    </div>
    <div  v-if="$route.path !== '/'">
    
    <div v-show="$route.path === '/Detail'">
      <router-view/>
    </div>

    <div v-show="$route.path === '/warehousein'">
      <router-view/>
    </div>
    
    <mt-tab-container v-model="selected">

      <mt-tab-container-item id="sale" v-show="$route.path === '/Sale'">
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

    <mt-tabbar v-model="selected" fixed v-if="$route.path !== '/Detail'">
     <mt-tab-item id="sale">
       <img slot="icon" src="@/assets/sale.png">
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


    <mt-popup
      v-model="popupVisible"
      position="bottom"
      popup-transition="popup-fade">
      <div class="shooping_css">
        <div class="kehu_detail">
          <div class="name_tel"> 
            <div>客户姓名:</div>
            <div>电话:</div>
          </div>
          
          <div>送货地址:</div>
        </div>
        <div class="buy_list">
          
        </div>
      </div>
    </mt-popup>

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
              selected: '',
              popupVisible: true
            }
        },
        watch: {
          selected: function() {
            if(this.selected == 'sale') {
              this.$router.push('/Sale');
            }else if(this.selected == 'warehouse') {
              this.$router.push('/Warehouse');
            }else if(this.selected == 'finance') {
              this.$router.push('/Finance');
            }else if(this.selected == 'my') {
              this.$router.push('/My');
            }
          }
          
        },
        methods: {
          Shopping: function() {
            this.popupVisible = true;
          }
        },
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
    font-size: 15px;
    text-align: center;
    line-height: 40px;
  }
  .shopping {
    border: red 1px solid;
    height: 300px;
    float: left;
  }
  .shooping_css {
    width: 390px;
    height: 500px;
    border: red 1px solid;
  }
  .kehu_detail {
    width: 100%;
    height: 100px;
    border: red solid 1px;
  }
  .name_tel {
    display: flex;
  }
</style>
