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
                  <mt-tab-container-item id="1">
                    <div class="firsttable">
                        <table border="1" cellspacing="0">
                            <tr>
                                <div class="myhead">
                                    <div style="width: 40%; float: left;">销售单号</div>
                                    <div style="width: 40%; float: left;">商品信息</div>
                                    <div style="width: 20%; float: left;">数量</div>
                                </div>
                            </tr>
                            <div v-for= "(item, index) in items" :key="index">
                                <tr>
                                    <td class="num1">
                                        <span>单号: </span>
                                        <span>{{item.sale_num}}</span>
                                        <span>客户: {{item.customer_name}}</span>
                                        <span>电话: {{item.customer_phone}}</span>
                                        <span>状态: {{item.sale_state}}</span>
                                        <span>日期: {{item.sale_date}}</span>
                                    </td>
                                    <td class="num1">
                                        <span>型号： {{item.product_model}} 子型号： {{item.product_submodel}}</span>
                                        <span>颜色： {{item.product_color}} 尺寸： {{item.product_size}}</span>
                                        <span>每箱： {{item.per}} 类型： {{item.type}}</span>
                                    </td>
                                    <td class="num2">
                                        <span>{{item.quantity}}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="num1"></td>
                                    <td class="num1">
                                        <span>型号： {{item.product_model}} 子型号： {{item.product_submodel}}</span>
                                        <span>颜色： {{item.product_color}} 尺寸： {{item.product_size}}</span>
                                        <span>每箱： {{item.per}} 类型： {{item.thetype}}</span>
                                    </td>
                                    <td class="num2">
                                        <span>{{item.quantity}}</span>
                                    </td>
                                </tr>
                            </div>
                        </table>
                    </div>
                  </mt-tab-container-item>
                  <mt-tab-container-item id="2">
                    <div>
                        <div class="TheSelect">
                            <select>
                                <option v-for="(select, index) in selects" :key="index">{{select.selecting}}</option>
                            </select>
                        </div>
                        <div class="TheSelectButton">
                            <mt-button type="default">确定</mt-button>
                        </div>
                    </div>
                    <div class="CapitalFlow">
                        <table border="1" cellspacing="0">
                            <tr>
                                <th>日期</th>
                                <th>客户</th>
                                <th>金额</th>
                                <th>备注</th>
                            </tr>
                            <tr v-for= "(capotal, index) in capotals" :key="index">
                                <td>{{capotal.account_in_date}}</td>
                                <td>{{capotal.customer_name}}</td>
                                <td>{{capotal.sum}}</td>
                                <td>{{capotal.content}}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="CapitalFlowWhole">
                        <span>合计: {{allmoney}}</span>
                        <span>到账: {{arrmoney}}</span>
                        <span>应付: {{facmoney}}</span>
                    </div>

                  </mt-tab-container-item >
                  <mt-tab-container-item id="3">
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
                    sale_num: '20180101SSDASD',
                    customer_name: 'Vittotio',
                    customer_phone: '39************',
                    sale_state: '待出货',
                    sale_date: '09/03/2018',
                    product_model: '8333',
                    product_submodel: 'I',
                    product_color: '洋红色',
                    product_size: 'XL',
                    per: '75件',
                    type: '整箱',
                    quantity: '6',
                    thetype: '尾箱',
                },{
                   sale_num: '20180101SSDASD',
                    customer_name: 'Vittotio',
                    customer_phone: '39************',
                    sale_state: '待出货',
                    sale_date: '09/03/2018',
                    product_model: '8333',
                    product_submodel: 'I',
                    product_color: '洋红色',
                    product_size: 'XL',
                    per: '75件',
                    type: '整箱',
                    quantity: '6',
                    thetype: '尾箱',
                },{
                   sale_num: '20180101SSDASD',
                    customer_name: 'Vittotio',
                    customer_phone: '39************',
                    sale_state: '待出货',
                    sale_date: '09/03/2018',
                    product_model: '8333',
                    product_submodel: 'I',
                    product_color: '洋红色',
                    product_size: 'XL',
                    per: '75件',
                    type: '整箱',
                    quantity: '6',
                    thetype: '尾箱',
                },{
                   sale_num: '20180101SSDASD',
                    customer_name: 'Vittotio',
                    customer_phone: '39************',
                    sale_state: '待出货',
                    sale_date: '09/03/2018',
                    product_model: '8333',
                    product_submodel: 'I',
                    product_color: '洋红色',
                    product_size: 'XL',
                    per: '75件',
                    type: '整箱',
                    quantity: '6',
                    thetype: '尾箱',
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
                }],
                selects:[{
                    selecting: '所有人',
                },{
                    selecting: 'Vittorio',
                },{
                    selecting: '测试人员',
                },{
                    selecting: 'Elsa',
                },{
                    selecting: 'Marrio',
                }],
                capotals:[{
                    account_in_date: '2018.03.09',
                    customer_name: 'Vittorio',
                    sum: '-8000',
                    content: '到账',
                },{
                    account_in_date: '2018.03.10',
                    customer_name: 'Vittorio',
                    sum: '33',
                    content: '订单：*****',
                },{
                    account_in_date: '2018.03.11',
                    customer_name: 'Vittorio',
                    sum: '2560',
                    content: '订单：*****',
                },{
                    account_in_date: '2018.03.12',
                    customer_name: 'Vittorio',
                    sum: '1000',
                    content: '订单：*****',
                },{
                    account_in_date: '2018.03.13',
                    customer_name: 'Vittorio',
                    sum: '2600',
                    content: '订单：*****',
                },{
                    account_in_date: '2018.03.14',
                    customer_name: 'Vittorio',
                    sum: '-3000',
                    content: '到账',
                },{
                    account_in_date: '2018.03.15',
                    customer_name: 'Vittorio',
                    sum: '6000',
                    content: '订单：*****',
                },{
                    account_in_date: '2018.03.16',
                    customer_name: 'Vittorio',
                    sum: '2600',
                    content: '订单：*****',
                },{
                    account_in_date: '2018.03.16',
                    customer_name: 'Vittorio',
                    sum: '-2600',
                    content: '到账',
                },{
                    account_in_date: '2018.03.16',
                    customer_name: 'Vittorio',
                    sum: '2600',
                    content: '订单：*****',
                },{
                    account_in_date: '2018.03.16',
                    customer_name: 'Vittorio',
                    sum: '2600',
                    content: '订单：*****',
                },{
                    account_in_date: '2018.03.16',
                    customer_name: 'Vittorio',
                    sum: '2600',
                    content: '订单：*****',
                },{
                    account_in_date: '2018.03.16',
                    customer_name: 'Vittorio',
                    sum: '2600',
                    content: '订单：*****',
                },{
                    account_in_date: '2018.03.16',
                    customer_name: 'Vittorio',
                    sum: '-2600',
                    content: '到账',
                },{
                    account_in_date: '2018.03.16',
                    customer_name: 'Vittorio',
                    sum: '2600',
                    content: '订单：*****',
                }],
                allmoney: '-2000',
                arrmoney: '12700',
                facmoney: '-14700',
            }
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
.TheTable{
    padding-top: 10px;
}
.myhead{
    height: 20px;
    background-color: #A9A9A9;
}
.firsttable{
    overflow: scroll;
    height: 480px;
    width: calc(100% - 7px);
    border: 1px solid black;
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
.num1{
    width: 40%;
}
.num2{
    width: 20%;
}
.SalesTrend{
    width: 100%;
    background-color: white;
}
.TheSelect{
    width: 60%;
    float: left;
    padding: 10px 0px 20px 0px;
}
.TheSelect select{
    width: 150px;
    height: 40px;
    font-size: 15px;
    border: none;
    outline: none;
    line-height: 40px;
}
.TheSelectButton{
    width: 40%;
    background-color: white;
    float: left;
    padding: 10px 0px 20px 0px;
}
.CapitalFlow{
    overflow: scroll;
    height: 380px;
    width: calc(100% - 7px);
    border: 1px solid black;
}
.CapitalFlow table{
    width: 100%;
    font-size: 20px;
}
.CapitalFlow td{
    height: 45px;
}
.CapitalFlowWhole{
    width: calc(100% - 5px);
    background-color:#dce0e6;
    font-size: 20px;
    height: 55px;
}
.CapitalFlowWhole span{
    top:10px;
    position: relative;
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
