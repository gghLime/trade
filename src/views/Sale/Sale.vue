<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">商品</mt-tab-item>
      <mt-tab-item id="2">退货</mt-tab-item>
      <mt-tab-item id="3">调整</mt-tab-item>
    </mt-navbar>
    
    <!-- tab-container -->
    <mt-tab-container v-model="selected">

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
                库存{{leftItem.number}}箱
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
                库存{{rightItem.number}}箱
              </div>
            </div>
          </div>

        </div>
      </mt-tab-container-item>

      <mt-tab-container-item id="2">
        <!-- <mt-cell v-for="n in 4" :title="'退货 ' + n" /> -->
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
          selected: '1',
          browse_img: browse_img,
          price_img: price_img,
          number_img: number_img,
          mode_img: mode_img,
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
            ]

        }
      },
      methods:{
        detail: function(index) {
          this.$router.push({name: 'Detail', params:{model: index}});
        }
      },

    }
</script>

<style scoped>
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
  margin-top: 5px;
  overflow: scroll;
  height: calc(100% - 140px);
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
</style>
