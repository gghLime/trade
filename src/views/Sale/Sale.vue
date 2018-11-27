<template>
  <div>
    <mt-navbar fixed v-model="selected" style="margin-top: 55px;">
      <mt-tab-item id="1">{{ $t("Sale.commodity") }}</mt-tab-item>
      <mt-tab-item id="2">{{ $t("Sale.sales_return") }}</mt-tab-item>
      <mt-tab-item id="3">{{ $t("Sale.adjust") }}</mt-tab-item>
    </mt-navbar>
    
    <!-- tab-container -->
    <mt-tab-container v-model="selected" style="margin-top: 55px;">

      <mt-tab-container-item id="1">
        <div class="list">

          <div class="list_left">
            <!-- <mt-cell v-for="leftItem in list_left_data" :title="'退货 ' + n" /> -->
            <div v-for="(leftItem, index) in list_left_data" :key="index" class="itemtop itemright" @click="detail(index)">
              <img style="width: 97px;height: 92px;margin-bottom: 10px;" v-bind:src="mode_img">
              <div class="browse_price">
                <img :src="browse_img" class="browse_img" />
                <div class="browse">{{leftItem.browse}}</div>
                <img :src="price_img" class="price_img" />
                <div class="price">{{leftItem.price}}</div>
              </div>
              <div class="number_css">
                <img :src="number_img" class="number_img" />
                {{ $t("Sale.inventory") }}{{leftItem.number}}{{ $t("Sale.box") }}
              </div>
            </div>

          </div>

          <div class="list_right">
            <div v-for="(rightItem, index) in list_right_data" :key="index" class="itemtop"  @click="detail(index)">
              <img style="width: 97px;height: 92px;margin-bottom: 10px;" v-bind:src="mode_img">
              <div class="browse_price">
                <img :src="browse_img" class="browse_img" />
                <div class="browse">{{rightItem.browse}}</div>
                <img :src="price_img" class="price_img" />
                <div class="price">{{rightItem.price}}</div>
              </div>
              <div class="number_css">
                <img :src="number_img" class="number_img" />
                {{ $t("Sale.inventory") }}{{rightItem.number}}{{ $t("Sale.box") }}
              </div>
            </div>
          </div>

        </div>
      </mt-tab-container-item>

      <mt-tab-container-item id="2">
        <!-- <mt-cell v-for="n in 4" :title="'退货 ' + n" /> -->
        <div class="query_font">{{ $t("Sale.query_order") }}</div>
        <div class="query">
          <input type="text" name="nameinput" class="nameinput" placeholder="姓名/电话">
          <div class="query_time">

            <mt-field class="border_no" placeholder="" type="date" v-model="begtime"></mt-field>
            <div>~</div>
            <mt-field class="border_no" placeholder="" type="date" v-model="endtime"></mt-field>

          </div>

          <mt-button class="query_btu" @click="query_btu" type="primary">{{ $t("Sale.query") }}</mt-button>

        </div>

        <div class="return_box_list">
          <div class="full_box_list">

            <div class="full_box_list_font">{{ $t("Sale.the_whole_case") }}</div>

            <div class="table_border">
              <div class="box_list_head">
                <div class="width_20">{{ $t("Sale.model") }}</div>
                <div class="width_20">{{ $t("Sale.color") }}</div>
                <div class="width_20">{{ $t("Sale.number") }}</div>
                <div class="width_20">{{ $t("Sale.a_box") }}</div>
                <div class="width_20">{{ $t("Sale.price") }}</div>
              </div>
              <div class="box_list_body" v-for="(item,index) in full_box_list" :key="index">
                <div class="first_border">{{item.model}}</div>
                <div class="last_border">{{item.color}}</div>
                <div class="last_border">{{item.number}}</div>
                <div class="last_border">{{item.size}}</div>
                <div class="last_border">{{item.moner}}</div>
              </div>
            </div>
            

          </div>

          <div class="full_box_list">

            <div class="full_box_list_font">{{ $t("Sale.tail_box") }}</div>

            <div class="table_border">
              <div class="box_list_head">
                <div class="width_20">{{ $t("Sale.model") }}</div>
                <div class="width_20">{{ $t("Sale.color") }}</div>
                <div class="width_20">{{ $t("Sale.number") }}</div>
                <div class="width_20">{{ $t("Sale.a_box") }}</div>
                <div class="width_20">{{ $t("Sale.price") }}</div>
              </div>
              <div class="box_list_body" v-for="(item,index) in leave_box_list" :key="index">
                <div class="first_border">{{item.model}}</div>
                <div class="last_border">{{item.color}}</div>
                <div class="last_border">{{item.number}}</div>
                <div class="last_border">{{item.size}}</div>
                <div class="last_border">{{item.moner}}</div>
              </div>
            </div>
            

          </div>


        </div>



        <mt-button class="query_btu" type="primary">ok</mt-button>

        <mt-popup
        v-model="asideView"
        position="bottom"
        popup-transition="popup-fade">

        <div class="query_result">

          <div class="table_border margin_20">
            <div class="box_list_head">
              <div class="width_20">{{ $t("Sale.order_number") }}</div>
              <div class="width_20">{{ $t("Sale.model") }}</div>
              <div class="width_20">{{ $t("Sale.unit_price") }}</div>
              <div class="width_20">{{ $t("Sale.number") }}</div>
              <div class="width_20">{{ $t("Sale.data") }}</div>
            </div>
            <div class="box_list_body" v-for="(item,index) in querydata" :key="index">
              <div class="first_border">{{item.id}}</div>
              <div class="last_border">{{item.model}}</div>
              <div class="last_border">{{item.money}}</div>
              <div class="last_border">{{item.number}}</div>
              <div class="last_border">{{item.date}}</div>
            </div>
          </div>

          <mt-button class="query_btu" @click="close_query_result" type="primary">{{ $t("Sale.confirm") }}</mt-button>
        </div>

        </mt-popup>

      </mt-tab-container-item>

      <mt-tab-container-item id="3">
        <!-- <mt-cell v-for="n in 6" :title="'调整 ' + n" /> -->
      </mt-tab-container-item>

    </mt-tab-container>

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
          asideView: false,
          begtime: '',
          endtime: '',
          selected: '1',
          browse_img: browse_img,
          price_img: price_img,
          number_img: number_img,
          mode_img: mode_img,
          // 销售左边的数据
          list_left_data: [
              {
                img_url: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
                browse: '8333',
                price: '7.5',
                number: '655'
              },{
                img_url: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
                browse: '8333',
                price: '7.5',
                number: '655'
              },{
                img_url: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
                browse: '8333',
                price: '7.5',
                number: '655'
              },{
                img_url: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
                browse: '8333',
                price: '7.5',
                number: '655'
              },{
                img_url: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
                browse: '8333',
                price: '7.5',
                number: '655'
              },{
                img_url: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
                browse: '8333',
                price: '7.5',
                number: '655'
              },
            ],
            // 销售右边数据
            list_right_data: [
              {
                img_url: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
                browse: '8333',
                price: '7.5',
                number: '655'
              },{
                img_url: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
                browse: '8333',
                price: '7.5',
                number: '655'
              },{
                img_url: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
                browse: '8333',
                price: '7.5',
                number: '655'
              },{
                img_url: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
                browse: '8333',
                price: '7.5',
                number: '655'
              },{
                img_url: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
                browse: '8333',
                price: '7.5',
                number: '655'
              },{
                img_url: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
                browse: '8333',
                price: '7.5',
                number: '655'
              },
            ],
            // 整箱数据
            full_box_list: [
              {
                model: '8333',
                color: 'Blue',
                number: 2,
                size: 75,
                moner: 300
              },
              {
                model: '8333',
                color: 'Blue',
                number: 2,
                size: 75,
                moner: 300
              },{
                model: '8333',
                color: 'Blue',
                number: 2,
                size: 75,
                moner: 300
              },
              {
                model: '8333',
                color: 'Blue',
                number: 2,
                size: 75,
                moner: 300
              },{
                model: '8333',
                color: 'Blue',
                number: 2,
                size: 75,
                moner: 300
              },
              {
                model: '8333',
                color: 'Blue',
                number: 2,
                size: 75,
                moner: 300
              },{
                model: '8333',
                color: 'Blue',
                number: 2,
                size: 75,
                moner: 300
              },
              {
                model: '8333',
                color: 'Blue',
                number: 2,
                size: 75,
                moner: 300
              },{
                model: '8333',
                color: 'Blue',
                number: 2,
                size: 75,
                moner: 300
              },
              {
                model: '8333',
                color: 'Blue',
                number: 2,
                size: 75,
                moner: 300
              },{
                model: '8333',
                color: 'Blue',
                number: 2,
                size: 75,
                moner: 300
              },
              {
                model: '8333',
                color: 'Blue',
                number: 2,
                size: 75,
                moner: 300
              },
            ],
            // 尾箱数据
            leave_box_list: [
              {
                model: '8333',
                color: 'Blue',
                number: 2,
                size: 75,
                moner: 300
              },
              {
                model: '8333',
                color: 'Blue',
                number: 2,
                size: 75,
                moner: 300
              },
            ],
            querydata: [
              {
                id: 'xxxxx',
                model: 'xxx',
                money:  'xx',
                number: 23,
                date: '01/10/18'
              },{
                id: 'xxxxx',
                model: 'xxx',
                money:  'xx',
                number: 23,
                date: '01/10/18'
              },{
                id: 'xxxxx',
                model: 'xxx',
                money:  'xx',
                number: 23,
                date: '01/10/18'
              },{
                id: 'xxxxx',
                model: 'xxx',
                money:  'xx',
                number: 23,
                date: '01/10/18'
              },{
                id: 'xxxxx',
                model: 'xxx',
                money:  'xx',
                number: 23,
                date: '01/10/18'
              },{
                id: 'xxxxx',
                model: 'xxx',
                money:  'xx',
                number: 23,
                date: '01/10/18'
              },
            ]

        }
      },
      methods:{
        query_btu: function() {
          this.asideView = true;
        },
        close_query_result: function() {
          this.asideView = false;
        },
        detail: function(index) {
          this.$router.push({name: 'Detail', params:{model: index}});
        }
      },

    }
</script>

<style>
.itemtop {
  cursor: pointer;
  padding-top: 30px;
  border-bottom: #D1D1D1 1px solid;
}
.itemright {
  border-right: #D1D1D1 1px solid;
}
.list {
  display: flex;
  overflow: scroll;
}
.list_left {
  width: 50%;
}
.list_right {
  width: 50%;
}
.browse_price {
  display: flex;
  align-items: center;
  justify-content: center;
}
.browse_img {
    width: 15px;
    height: 15px;
}
.price_img {
  width: 15px;
  height: 15px;
  margin-left: 25px;
}
.number_css {
  display: flex;
  align-items: center;
  justify-content: center;
}
.number_img {
  width: 30px;
  height: 30px;
}
.query_font {
  position: absolute;
  font-size: 15px;
  background: white;
  margin-left: 10%;
}
.query {
  border: black 1px solid;
  height: 200px;
  margin: 10px 15px 0px 15px;
}
.nameinput {
  width: calc(100% - 40px);
  margin: 30px 10px 0px 10px;
  height: 30px;
}
.query_time {
  margin-top: 20px;
  display: flex;
  align-items: center;
}
.border_no {
  border: none !important;
}
.query_btu {
  width: 100%;
  border-radius: 3em;
  width: 80%;
  margin-top: 15px;
}
.boxlist {
  overflow: auto;
  height: calc(100% - 500px);
  border: 1px black solid;
}
.full_box {
  padding: 10px;
}
.tablestyle {
  width: calc(100% - 40px);
  margin: 0px 20px;
  border: black 1px solid;
  margin-bottom: 20px;
}
.table_head {
  background-color: rgb(153, 153, 153);
}
td {
  border: solid black 1px;
}
.query_result {
  width: 390px;
  height: 500px;
  padding: 40px;
}
.return_box_list {
  overflow: auto;
  height: 300px;
  margin: 10px 15px;
}
.box_list_head {
  display: flex;
  background-color: #A9A9A9;
  border: grey solid 1px;
}
.table_border {
}
.box_list_body {
  display: flex;
}
.first_border {
  /*border: grey solid 1px;*/
  border-right: grey solid 1px;
  border-left: grey solid 1px;
  border-bottom: grey solid 1px;
  width: 20%;
}
.width_20 {
  width: 20%;
}
.last_border {
  width: 20%;
  border-right: grey solid 1px;
  border-bottom: grey solid 1px;
}
.margin_20 {
  margin: 0px 20px;
}
</style>
