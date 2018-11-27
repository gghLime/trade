<template>
    <div>
      <div class="setAndRes">
        <!-- 表单title -->
        <div class="head_title">
          <div class="title_font" v-if="routeForm == 0">{{ $t("Sale.statements") }}</div>
          <div class="title_font" v-if="routeForm == 1">{{ $t("Sale.pre_order") }}</div>
        </div>

        <!-- 数据展示 -->
        <!-- <table class="showBody">
          <tr>
            <th>{{ $t("Sale.model") }}</th>
            <th>{{ $t("Sale.sub_models") }}</th>
            <th>{{ $t("Sale.color") }}</th>
            <th>{{ $t("Sale.the_quantity_of_each") }}</th>
            <th>{{ $t("Sale.size") }}</th>
            <th>{{ $t("Sale.sales_model") }}</th>
          </tr>
          <tr v-for="(item, index) in routeData" :key="index">
            <td>{{item.mode}}</td>
            <td>{{item.child}}</td>
            <td>{{item.color}}</td>
            <td>{{item.number}}</td>
            <td>{{item.size}}</td>
            <td>{{item.sale_way}}</td>
          </tr>
        </table> -->

        <div class="table_border">
          <div class="box_list_head">
            <div class="width_20">{{ $t("Sale.model") }}</div>
            <div class="width_20">{{ $t("Sale.sub_models") }}</div>
            <div class="width_20">{{ $t("Sale.color") }}</div>
            <div class="width_20">{{ $t("Sale.the_quantity_of_each") }}</div>
            <div class="width_20">{{ $t("Sale.size") }}</div>
            <div class="width_20">{{ $t("Sale.sales_model") }}</div>
          </div>
          <div class="box_list_body" v-for="(item, index) in routeData" :key="index">
            <div class="first_border">{{item.mode}}</div>
            <div class="last_border">{{item.child}}</div>
            <div class="last_border">{{item.color}}</div>
            <div class="last_border">{{item.number}}</div>
            <div class="last_border">{{item.size}}</div>
            <div class="last_border">{{item.sale_way}}</div>
          </div>
        </div>



        <div v-if="routeForm == 1">
          <div>{{ $t("Sale.settlement") }}：{{ $t("Sale.success") }}</div>
          <div>{{ $t("Sale.amount") }}：10000</div>
        </div>

      </div>
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
              routeForm: this.$route.params.routeForm,
              routeData: this.$route.params.routeData
            }
        },
        watch: {

          
        },
        methods: {

        },
        created() {
        },
        mounted() {
        }
    }
</script>
<style lang="scss" scoped>
  /*@import '~@/styles/themes.scss';*/
  
  .setAndRes {
    border: red 1px solid;
  }
  .head_title {
    border: black 1px solid;
    height: 40px;
    margin-top: 10px;
  }
  .title_font {
    line-height: 40px;
  }
  .showBody {
    width: 100%;
  }
  .box_list_head {
    display: flex;
    background-color: #A9A9A9;
    border: grey solid 1px;
  }
  .width_20 {
    width: 20%;
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
  .last_border {
    width: 20%;
    border-right: grey solid 1px;
    border-bottom: grey solid 1px;
  }
</style>
