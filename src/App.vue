<template>
    <div id="app">
    <!-- <mt-header fixed title="欧洲服装贸易管理系统" class="head"></mt-header> -->
    <mt-header fixed title="欧洲服装贸易管理系统" class="head">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button @click="Shopping" v-if=" $route.path === '/Sale' || $route.path === '/Detail'" slot="right">购物车</mt-button>
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

      <mt-tab-container-item id="me" v-show="$route.path === '/Me'">
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
     <mt-tab-item id="me">
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
      <!-- 客户信息 -->
        <div class="kehu_detail">
          <!-- 姓名和电话 -->
          <div class="name_tel"> 
            <div>客户姓名:</div>

            <select class="user_select">
              <option value ="volvo">Volvo</option>
              <option value ="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select> 

            <div class="phonefont">电话:</div>
            <input type="text" name="phone" class="phonestyle" placeholder="请输入电话">
          </div>
          <div class="address">
            <div>送货地址:</div>
            <div class="address_textarea" contenteditable="true">
              
            </div>
          </div>
          
        </div>

        <div class="buy_list">
          <div v-for="(item, index) in buy_list_data" :key="index" class="buy_list_item">
            <div class="buy_list_pic">
              <img :src="mode" class="show_img" />
            </div>
            <div class="buy_list_detail">
              <div class="buy_list_detail_font">
                型号:{{item.mode}}
                子型号:{{item.child}}
              </div>
              <div class="buy_list_detail_font">
                颜色: {{item.color}}
                每箱件数:{{item.number}}
              </div>
              <div class="buy_list_detail_font">
                尺寸:{{item.size}}
                销售模式:{{item.sale_way}}
              </div>
            </div>
            <div class="buy_list_delete">
              <input type="number" class="number" name="number">
              <img :src="del_img" @click="del(index)" class="del_img"/>
            </div>
          </div>
        </div>
      </div>
    </mt-popup>

  </div>
</template>

<script>
  // eslint-disable-next-line
  // @ is an alias to /src
  /* eslint-disable */
  import mode from '@/assets/mode.jpg'
  import del_img from '@/assets/close.png'

    export default {
        components: {
        },
        data: function () {
            return {
              del_img: del_img,
              mode: mode,
              number: '',
              selected: '',
              popupVisible: false,
              buy_list_data: [
                {
                  picurl: mode,
                  mode: 8333,
                  child: "I",
                  color: "红色",
                  number: 75,
                  size: "XL",
                  sale_way: "整箱"
                },{
                  picurl: mode,
                  mode: 8333,
                  child: "I",
                  color: "红色",
                  number: 75,
                  size: "XL",
                  sale_way: "整箱"
                },{
                  picurl: mode,
                  mode: 8333,
                  child: "I",
                  color: "红色",
                  number: 75,
                  size: "XL",
                  sale_way: "整箱"
                }
              ]
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
            }else if(this.selected == 'me') {
              this.$router.push('/Me');
            }
          }
          
        },
        methods: {
        del: function(index) {
          alert(index);
        },
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
    height: 300px;
    float: left;
  }
  .shooping_css {
    width: 320px;
    padding: 10px 300px;
    height: 500px;
  }
  .kehu_detail {
    width: calc(100% - 20px);
    height: 100px;
    border: black solid 1px;
    padding: 10px;
  }
  .name_tel {
    display: flex;
    white-space: nowrap;
  }
  .user_select {
    width: 20%;
  }
  .phonestyle {
    width: 40%;
  }
  .phonefont {
    margin-left: 5px;
  }
  .address {
    display: flex;
    margin-top: 10px;
  }
  .address_textarea {
    border: #2c3e50 solid 1px;
    width: calc(100% - 87px);
    height: 60px;
    text-align: left;
    padding: 5px;
  }
  .buy_list {
    height: 380px;
    overflow: auto;
  }
  .buy_list_pic {
    height: 70px;
    width: 70px;
    border: black 1px solid;
  }
  .buy_list_detail {
    height: 70px;
    width: 180px;
    border: black solid 1px;
  }
  .buy_list_item {
    display: flex;
  }
  .buy_list_delete {
    height: 70px;
    width: 66px;
    border: black 1px solid;
  }
  .buy_list_detail_font {
    display: flex;
  }
  .number {
    width: 50px;
    margin-top: 10px;
  }
  .del_img {
    margin-top: 10px;
  }
  .show_img {
    width: 50px;
    height: 70px;
  }
</style>
