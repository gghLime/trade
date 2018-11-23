<template>
    <div>
        <div class="page-navbar">
            <mt-navbar class="page-part" v-model="selected">
              <mt-tab-item id="1"><span>销售清单</span></mt-tab-item>
              <mt-tab-item id="2"><span>资金流水</span></mt-tab-item>
              <mt-tab-item id="3"><span>销售趋势</span></mt-tab-item>
            </mt-navbar>
            <!-- tabcontainer -->
            <div class="TheTable">
                <mt-tab-container v-model="selected">
                  <mt-tab-container-item id="1" style="background-color: white">
                    
                    <table border="1" cellspacing="0">
                        <tr>
                            <th><span>销售单号</span></th>
                            <th><span>商品信息</span></th>
                            <th><span>数量</span></th>
                        </tr>
                        <tr v-for= "(item, index) in items" :key="index">
                            <td>
                                <span>单号: </span>
                                <span>{{item.id}}</span>
                                <span>客户: {{item.name}}</span>
                                <span>电话: {{item.phone}}</span>
                                <span>状态: {{item.state}}</span>
                                <span>日期: {{item.date}}</span>
                            </td>
                            <td>
                                <span>型号： {{item.model}} 子型号： {{item.sonmodel}}</span>
                                <span>颜色： {{item.color}} 尺寸： {{item.size}}</span>
                                <span>每箱： {{item.case}} 类型： {{item.type}}</span>
                            </td>
                            <td>
                                <span>{{item.num}}</span>
                            </td>
                        </tr>
                    </table>

                  </mt-tab-container-item>
                  <mt-tab-container-item id="2">
                    
                  </mt-tab-container-item >
                  <mt-tab-container-item id="3" style="background-color: white">
                    <div class="SalesTrend">
                        <div class="SetSalesTrend">
                            <mt-button type="default">选择客户</mt-button>
                        </div>
                        <div class="SetSalesTrend">
                            <mt-button type="default">选择商品</mt-button>
                        </div>
                    </div>
                    <div class="SalesTrendInformation">
                        <table border="1" cellspacing="0">
                            <tr>
                                <th>商品型号/客户姓名</th>
                                <th>商品信息/客户电话</th>
                                <th>选择状态</th>
                            </tr>
                            <tr v-for= "(trend, index) in trends" :key="index">
                                <td>{{trend.ModelAndName}}</td>
                                <td>{{trend.InforAndPhone}}</td>
                                <td>{{trend.SelectState}}</td>
                            </tr>
                        </table>
                    </div>
                     <div class="MySalesTrend">
                        <mt-button type="default">显示趋势</mt-button>
                    </div>
                    <div class="SalesTrendInformation">
                       
                    </div>
                  </mt-tab-container-item>
                </mt-tab-container>
            </div>
        </div>
     </div>
</template>

<script>
  // eslint-disable-next-line
  // @ is an alias to /src
  /* eslint-disable */
    export default {
        data() {
            return {
                selected: '1',
                theMaxHeight: '',
                theFirstHeight: '',
                theSecondHeight: '',
                theThirdHeight: '',
                items: [{
                    id: '20180101SSDASD',
                    name: 'Vittotio',
                    phone: '39************',
                    state: '待出货',
                    date: '09/03/2018',
                    model: '8333',
                    sonmodel: 'I',
                    color: '洋红色',
                    size: 'XL',
                    case: '75件',
                    type: '整箱',
                    num: '6',
                },{
                    id: '20180101SSDASD',
                    name: 'Vittotio',
                    phone: '39************',
                    state: '待出货',
                    date: '09/03/2018',
                    model: '8333',
                    sonmodel: 'I',
                    color: '洋红色',
                    size: 'XL',
                    case: '75件',
                    type: '整箱',
                    num: '6',
                },{
                    id: '20180101SSDASD',
                    name: 'Vittotio',
                    phone: '39************',
                    state: '待出货',
                    date: '09/03/2018',
                    model: '8333',
                    sonmodel: 'I',
                    color: '洋红色',
                    size: 'XL',
                    case: '75件',
                    type: '整箱',
                    num: '6',
                },{
                    id: '20180101SSDASD',
                    name: 'Vittotio',
                    phone: '39************',
                    state: '待出货',
                    date: '09/03/2018',
                    model: '8333',
                    sonmodel: 'I',
                    color: '洋红色',
                    size: 'XL',
                    case: '75件',
                    type: '整箱',
                    num: '6',
                }],
                trends:[{
                    ModelAndName: '8333/Vittorio',
                    InforAndPhone: '75(件/箱)/39******',
                    SelectState: 'ok',
                },{
                    ModelAndName: '8333/Vittorio',
                    InforAndPhone: '75(件/箱)/39******',
                    SelectState: 'ok',
                },{
                    ModelAndName: '8333/Vittorio',
                    InforAndPhone: '75(件/箱)/39******',
                    SelectState: 'ok',
                },{
                    ModelAndName: '8333/Vittorio',
                    InforAndPhone: '75(件/箱)/39******',
                    SelectState: 'ok',
                },{
                    ModelAndName: '8333/Vittorio',
                    InforAndPhone: '75(件/箱)/39******',
                    SelectState: 'ok',
                }]
            };
        },
        methods:{
            
        },
    }
</script>
<style lang="scss" scoped>
.page-navbar{
    margin: 0 auto;
    overflow: scroll;
}
.page-part span{
    font-size: 18px;
}

.TheFinanceID{
    margin: 0px;
    width: 39%; 
    background-color: white; 
    float: left;
    white-space:normal;
    word-break:break-all;
    word-wrap:break-word;
}
.TheFinanceID span{
    float: left;
}
.TheShopImformation{
    width: 39.5%; 
    background-color: white; 
    float: left;
}
.TheNumber{
    width: 19%; 
    background-color: white; 
    float: left;
}
.SalesTrend{
    width: 100%;
    background-color: white;
}
.SetSalesTrend{
    width: 50%;
    float: left;
    background-color: white;
    padding: 10px 0px 10px 0px;
}
.SalesTrendInformation{
    overflow: scroll;
    height: 180px;
    width: calc(100% - 7px);
    border: 1px solid black;
}
.SalesTrendInformation th{
    height: 50px;    
}
.SalesTrendInformation td{
    height: 50px;
}
.MySalesTrend{
    width: 100%;
    background-color: white;
    padding: 10px 0px 10px 0px;
}
</style>
