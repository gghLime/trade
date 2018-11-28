<template>
    <div id="app">
    <!-- <mt-header fixed title="欧洲服装贸易管理系统" class="head"></mt-header> -->
    <mt-header fixed title="欧洲服装贸易管理系统" class="head">
      <router-link :to="preroute" slot="left" @click="back">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button @click="Shopping" v-if=" $route.path === '/Sale' || $route.path === '/Detail'" slot="right"><van-icon name="cart" size='20px' /></mt-button>
    </mt-header>

    <div v-show="$route.path === '/ClientList'">
      <router-view/>
    </div>
    <div v-show="$route.path === '/StaffList'">
      <router-view/>
    </div>
    <div v-show="$route.path === '/SetUp'">
      <router-view/>
    </div>
    <div v-show="$route.path === '/Maintenance'">
      <router-view/>
    </div>
    <div v-show="$route.path === '/Software'">
      <router-view/>
    </div>


    <!-- 登录 -->
    <div v-if="$route.path === '/'">
      <router-view/>
    </div>
    <!-- 特殊处理页面 -->
    <div v-else-if="$route.path === '/setAndRes'">
      <router-view/>
    </div>
    <!-- 非登录界面 -->
    <div v-else>
        
        <!-- 详情页面 -->
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

    <!-- 购物车弹出层 -->
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

        <div class="shop_area">
          <van-button size="small" @click="del">清空购物车</van-button>
          <div v-for="(item, index) in buy_list_data" :key="index">
            <van-panel>
              <div class="shopping_list">
                <div class="buy_list_pic">
                  <img :src="mode" class="show_img" />
                </div>
                <div class="buy_list_detail_font1">
                  <div class="xinghao">型号:{{item.mode}}</div>
                  <div class="zixinghao">子型号:{{item.child}}</div>
                  <div class="yanse">颜色: {{item.color}}</div>
                </div>
                <div class="buy_list_detail_font2">
                  <div class="xinghao">每箱件数:{{item.number}}</div>
                  <div class="zixinghao">尺寸:{{item.size}}</div>
                  <div class="yanse">销售模式:{{item.sale_way}}</div>
                </div>
                <div slot="footer" class="footer">
                  <van-stepper
                    v-model="item.num"
                    integer
                    :min="1"
                    :max="1000"
                    :step="1"
                  />
                </div>
                <!-- <div class="buy_list_detail">
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
                </div> -->
                <!-- <div class="buy_list_delete">
                  <img :src="del_img" @click="del(index)" class="del_img"/>
                </div> -->
              </div>
            </van-panel>
          </div>
        </div>
        <div class="sub_calculater_button">
          

          <mt-button name="settlement" class="settlement" @click="settlement">结算</mt-button>
          <mt-button name="reservation" class="reservation" @click="reservation">预定</mt-button>
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
  import { Toast } from 'vant';

    export default {
        components: {
        },
        data: function () {
            return {
              footer_value: 1,
              preroute: '/',//上一级路由地址
              del_img: del_img,
              mode: mode,
              number: '',
              selected: '',
              popupVisible: false,
              buy_list_data: [
              // {
              //     picurl: mode,
              //     mode: 8333,
              //     child: "I",
              //     color: "红色",
              //     number: 75,
              //     size: "XL",
              //     sale_way: "整箱",
              //     num: 4
              //   },{
              //     picurl: mode,
              //     mode: 8333,
              //     child: "I",
              //     color: "红色",
              //     number: 75,
              //     size: "XL",
              //     sale_way: "整箱",
              //     num: 4
              //   },{
              //     picurl: mode,
              //     mode: 8333,
              //     child: "I",
              //     color: "红色",
              //     number: 75,
              //     size: "XL",
              //     sale_way: "整箱",
              //     num: 4
              //   }
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
          back: function() {
            this.$router.back(-1);
          },
          del: function(index) {
            alert(index);
          },
          Shopping: function() {
            this.buy_list_data = JSON.parse(localStorage.getItem('car'));
            this.popupVisible = true;
          },
          // 结算 0
          settlement: function() {
            this.popupVisible = false;
            // this.$router.push({name: 'Detail', params:{model: 1}});
            //this.$router.push('/setAndRes');
            this.$router.push({name: 'setAndRes', params:{routeForm: 0, routeData: this.buy_list_data}});
          },
          // 预定界面 1
          reservation: function() {
            this.popupVisible = false;
            // this.$router.push({name: 'Detail', params:{model: 1}});
            this.$router.push({name: 'setAndRes', params:{routeForm: 1, routeData: this.buy_list_data}});
          },
          add: function() {
            localStorage.setItem('car',JSON.stringify(this.buy_list_data));
          },
          // 清空购物车
          del: function() {
            // var data = new Array();
            // var data = JSON.parse(localStorage.getItem('car'));
            // data = data.concat(data);
            // console.log(data);
            // localStorage.setItem('car',JSON.stringify(data));
            localStorage.removeItem('car');
            this.buy_list_data = [];
            Toast('清空购物车成功');
            //console.log(JSON.parse(localStorage.getItem('car')));
          }
        },
        created() {
        },
        mounted() {
          
        }
    }
</script>
<style type="text/css">
  html{
    margin-top: 55px;
    margin-bottom: 60px;
  }
  body{
    margin-bottom: 60px;
  }
</style>
<style lang="scss" scoped>
  @import '~@/styles/themes.scss';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
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
    overflow: auto;
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
    height: 300px;
    overflow: auto;
  }
  .buy_list_pic {
    height: 80px;
    width: 80px;
    margin-top: 10px;
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
  .buy_list_detail_font1 {
    display: flex;
    position: absolute;
    .xinghao {
      margin-bottom: 60px;
      margin-left: 90px;
    }
    .zixinghao {
      margin-left: 20px;
    }
    .yanse {
      margin-left: 20px;
    }
  }
  .buy_list_detail_font2 {
    display: flex;
    position: absolute;
    .xinghao {
      margin-bottom: 40px;
      margin-left: 90px;
    }
    .zixinghao {
      margin-left: 20px;
    }
    .yanse {
      margin-left: 20px;
    }
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
  .sub_calculater_button {
    display: flex;
  }
  .settlement {
    width: 250px;
    border-radius: 3em;
    margin-right: 20px;
  }
  .reservation {
    width: 100px;
    border-radius: 3em;
  }
  .step_css {
    border: red 1px solid;
  }
  .shopping_list {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .footer {
    margin: 0px 5px 10px 0px;
  }
  .shop_area {
    height: 290px;
    overflow: auto;
    margin: 10px 0px;
  }
</style>
