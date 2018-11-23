<template>
    <div>
      <div class="setAndRes">
        <!-- 表单title -->
        <div class="head_title">
          <div class="title_font" v-if="routeForm == 0">结算单</div>
          <div class="title_font" v-if="routeForm == 1">预定单</div>
        </div>

        <!-- 数据展示 -->
        <table class="showBody">
          <tr>
            <th>型号</th>
            <th>子型号</th>
            <th>颜色</th>
            <th>每箱件数</th>
            <th>尺寸</th>
            <th>销售模式</th>
          </tr>
          <tr v-for="(item, index) in routeData" :key="index">
            <td>{{item.mode}}</td>
            <td>{{item.child}}</td>
            <td>{{item.color}}</td>
            <td>{{item.number}}</td>
            <td>{{item.size}}</td>
            <td>{{item.sale_way}}</td>
          </tr>
        </table>
        <div v-if="routeForm == 1">
          <div>结算状态：成功</div>
          <div>结算金额：10000</div>
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
</style>
