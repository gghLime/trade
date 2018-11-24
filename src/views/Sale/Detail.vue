<template>
  <div>
    <div class="head">
      <div class="model">型号：{{model}}</div>
      <img style="width: 239px;height: 286px;margin-bottom: 10px;" v-bind:src="mode_img">
      <div class="detail">
        <div class="font">
          库存：{{data.number}}箱
          {{data.much}}件/箱
        </div>
        <div class="font">子型号：{{}}</div>
        <div class="font">颜色：{{}}</div>
        <div class="font">尺寸：{{}}</div>
      </div>
    </div>
    <div class="buy">
      <div class="font">价格：7.5€</div>
      <div class="buy_box">
        <div class="font number_top">购买箱数：<input type="number" class="number" name="points"/></div>
        <div class="font" @click="buy_leave">+购买尾箱</div>
      </div>
      
      <div v-if="leave_box_Vis == true">

        <div class="buy_box_table">
          <div class="table_left">购买尾箱数</div>
          <div class="table_right">每件箱数</div>
        </div>
        <div class="table_line" v-for="(item,index) in leave_box_buy_list" :key="index">
          <div class="table_line_left">{{item.buy_number}}</div>
          <div class="table_line_right">{{item.box_number}}</div>
        </div>

      </div>
      <div v-else>
        <div class="buy_box_table">
          <div class="table_left">Ps/Box</div>
          <div class="table_left">Inventory</div>
          <div class="table_left">Quantities</div>
          <div class="table_right">Operation</div>
        </div>
        <div class="table_line" v-for="(item,index) in leave_box_list" :key="index">
          <div class="table_line_left">{{item.box}}</div>
          <div class="table_line_left">{{item.inventory}}</div>
          <div class="table_line_left">{{item.quantities}}</div>
          <div class="table_line_right">{{item.operation}}</div>
        </div>
      </div>
      
    </div>

    <mt-button size="large" @click="add_to_buy_list_data" class="buy_button">添加到购物车</mt-button>
  </div>
</template>

<script>


  // eslint-disable-next-line
  // @ is an alias to /src
  /* eslint-disable */
  import browse_img from '@/assets/browse.png'
  import price_img from '@/assets/price.png'
  import number_img from '@/assets/number.png'
  import mode_img from '@/assets/mode.jpg'
    export default {
      data(){
        return{
          selected: '1',
          browse_img: browse_img,
          price_img: price_img,
          number_img: number_img,
          mode_img: mode_img,
          // 尾箱已购买或待购买显示 true 已购买 false 待购买
          leave_box_Vis: true,
          model: this.$route.params.model,
          data: {
            number: 655,
            much: 75,
            child: 13
          },
          // 已购买的尾箱数量
          leave_box_buy_list: [
            {
              buy_number: 1,
              box_number: 32
            },{
              buy_number: 2,
              box_number: 48
            },
          ],
          // 待购买尾箱数量列表
          leave_box_list: [
            {
              box: 34,
              inventory: 2,
              quantities: 1,
              operation: 0
            },{
              box: 34,
              inventory: 2,
              quantities: 1,
              operation: 0
            },
          ],

        }
      },
      methods:{
        buy_leave: function() {
          if(this.leave_box_Vis) {
            this.leave_box_Vis = false;
          }else {
            this.leave_box_Vis = true;
          }
        },
        add_to_buy_list_data: function() {
          // leave_box_buy_list
          //console.log(JSON.parse(sessionStorage.getItem('dataBuy')));
        }
      },

    }
</script>

<style scoped>
.model {
  font-size: 25px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.head {
  border-bottom: #D1D1D1 1px solid;
}
.detail {
  text-align: left;
  margin: 0px 20px 20px 20px;
}
.buy {
  text-align: left;
  margin: 10px 20px 0px 20px;
}
.font {
  font-size: 20px;
}
.number_top {
  margin-top: 10px;
  margin-right: 20px;
}
.number {
  width: 80px;
}
.buy_box {
  display: flex;
  align-items: flex-end;
}
.buy_box_table {
  display: flex;
  border: 1px black solid;
  height: 50px;
  margin-top: 30px;
}
.table_left {
  text-align: center;
  line-height: 50px;
    width: 50%;
    height: 100%;
    background-color: #8e8e8e;
    font-weight: 600;
  }
  .table_right {
    text-align: center;
    line-height: 50px;
    width: 50%;
    height: 100%;
    background-color: #8e8e8e;
    font-weight: 600;
  }
  .table_line {
    height: 50px;
    display: flex;
    align-items: flex-end;
  }
  .table_line_left{
    width: 50%;
    text-align: center;
    line-height: 50px;
    border-right: #D1D1D1 1px solid;
    border-bottom: #D1D1D1 1px solid;
  }
  .table_line_right {
    width: 50%;
    text-align: center;
    line-height: 50px;
    border-bottom: #D1D1D1 1px solid;
  }
  .add_buy {
    width: 500px;
  }
  .buy_button {
    margin: 10px 20px 20px 20px;
    width: 320px;
    background-color: #696969;
    border-radius: 50px;
    color: #DCE0E6;
  }
</style>
