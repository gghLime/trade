<template>
    <div>
        <div class="page-navbar">
            <mt-navbar class="page-part" v-model="selected">
              <mt-tab-item id="1"><span>{{ $t("finance.saleslis") }}</span></mt-tab-item>
              <mt-tab-item id="2"><span>资金流水</span></mt-tab-item>
              <mt-tab-item id="3"><span>销售趋势</span></mt-tab-item>
            </mt-navbar>
            <!-- tabcontainer -->
            <div class="TheTable">
                <mt-tab-container v-model="selected">
                    <!-- 销售清单 -->
                    <mt-tab-container-item id="1">
                    <div class="firsttable">
                        <div class="myhead">
                            <div class="myhead_box1">
                                <div class="myhead_boxname1">销售单号</div>
                            </div>
                            <div class="myhead_box1">
                                <div class="myhead_boxname1">商品信息</div>
                            </div>
                            <div class="myhead_box2">
                                <div class="myhead_boxname2">数量</div>
                            </div>
                        </div>
                        <div v-for= "(item, index) in items" :key="index">
                            <div class="mybody_box1">
                                <div class="mybody_inbox1">
                                    <span>
                                        单号: {{item.sale_num}}<br>
                                        客户: {{item.customer_name}}<br>
                                        电话: {{item.customer_phone}}<br>
                                        状态: {{item.sale_state}}<br>
                                        日期: {{item.sale_date}}<br>
                                    </span>
                                </div>
                            </div>
                            <div class="mybody_box1">
                                <div class="mybody_inbox1">
                                    <span>
                                        型号： {{item.product_model}}<br>
                                        子型号： {{item.product_submodel}}<br>
                                        颜色： {{item.product_color}}<br>
                                        尺寸： {{item.product_size}}<br>
                                        每箱： {{item.per}} <br>
                                        类型： {{item.type}}<br>
                                    </span>
                                </div>
                            </div>
                            <div class="mybody_box2">
                                <div class="mybody_inbox2">
                                    <span>{{item.quantity}}</span>
                                </div>
                            </div>
                            <div class="mybody_box1">
                                <div class="mybody_inbox1">
                                    
                                </div>
                            </div>
                            <div class="mybody_box1">
                                <div class="mybody_inbox1">
                                    <span>
                                        型号： {{item.product_model}}<br>
                                        子型号： {{item.product_submodel}}<br>
                                        颜色： {{item.product_color}}<br>
                                        尺寸： {{item.product_size}}<br>
                                        每箱： {{item.per_tial}} <br>
                                        类型： {{item.thetype}}<br>
                                    </span>
                                </div>
                            </div>
                            <div class="mybody_box2">
                                <div class="mybody_inbox2">
                                    <span>{{item.quantity_tail}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </mt-tab-container-item>
                  <!-- 基金流水 -->
                    <mt-tab-container-item id="2">
                    <div class="selectbutton">
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
                        <div class="myhead">
                            <div class="myhead1">
                                <div class="myhead1_box">日期</div>
                            </div>
                            <div class="myhead1">
                                <div class="myhead1_box">客户</div>
                            </div>
                            <div class="myhead1">
                                <div class="myhead1_box">金额</div>
                            </div>
                            <div class="myhead1">
                                <div>备注</div>
                            </div>
                        </div>
                        <div v-for= "(capotal, index) in capotals" :key="index">
                            <div class="mybody1">
                                <div class="mybody1_box1">
                                    {{capotal.account_in_date}}
                                </div>
                            </div>
                            <div class="mybody1">
                                <div class="mybody1_box1">
                                    {{capotal.customer_name}}
                                </div>
                            </div>
                            <div class="mybody1">
                                <div class="mybody1_box1">
                                    {{capotal.sum}}
                                </div>
                            </div>
                            <div class="mybody1">
                                <div class="mybody1_box2">
                                    {{capotal.content}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="CapitalFlowWhole">
                        <span>
                            合计: {{allmoney}}
                            到账: {{arrmoney}}
                            应付: {{facmoney}}
                        </span>
                    </div>
                  </mt-tab-container-item >

                  <!-- 销售趋势 -->
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
                        <div class="myhead2">
                            <div class="myhead2_box1">
                                <div class="myhead2_boxname1">商品型号/客户姓名</div>
                            </div>
                            <div class="myhead2_box1">
                                <div class="myhead2_boxname1">商品信息/客户电话</div>
                            </div>
                            <div class="myhead2_box2">
                                <div class="myhead2_boxname2">选择状态</div>
                            </div>
                        </div>
                         <div v-for= "(trend, index) in trends" :key="index">
                            <div class="mybody2_box1">
                                <div class="mybody2_inbox1">
                                    <span>
                                        {{trend.ModelAndName}}
                                    </span>
                                </div>
                            </div>
                            <div class="mybody2_box1">
                                <div class="mybody2_inbox1">
                                    <span>
                                        {{trend.InforAndPhone}}
                                    </span>
                                </div>
                            </div>
                            <div class="mybody2_box2">
                                <div class="mybody2_inbox2">
                                    <span>{{trend.SelectState}}</span>
                                </div>
                            </div>
                        </div>                       
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
                selected: '3',
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
                    per_tial: '34件',
                    thetype: '尾箱',
                    quantity_tail: '2',
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
                    per_tial: '34件',
                    thetype: '尾箱',
                    quantity_tail: '2',
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
                    per_tial: '34件',
                    thetype: '尾箱',
                    quantity_tail: '2',
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
                    per_tial: '34件',
                    thetype: '尾箱',
                    quantity_tail: '2',
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
    height: 700px;
}
.page-part span{
    font-size: 18px;
}
.TheTable{
    padding-top: 10px;
}
.firsttable{
    overflow: auto;
    height: 480px;
    width: calc(100% - 7px);
    border: 1px solid black;
}
.myhead{
    width: 100%;
    height: 20px;
}
.myhead_box1{
    width: 40%; 
    float: left; 
    background-color: #A9A9A9;
}
.myhead_box2{
    width: 20%; 
    float: left; 
    background-color: #A9A9A9
}
.myhead_boxname1{
    width: 99%; 
    border-right: 1px solid black;
}
.myhead_boxname2{
    width: 99%; 
}
.mybody_box1{
    width: 40%; 
    float: left; 
    height: 140px; 
    border-top: 1px solid black;
}
.mybody_box2{
    width: 20%; 
    float: left; 
    height: 140px;
    border-top: 1px solid black;
}
.mybody_inbox1{
    border-right: 1px solid black; 
    height: 100%; 
    padding: 6px 0;
}
.mybody_inbox2{
    padding: 60px 0;
}

.selectbutton{
    width: calc(100% - 5px);
}
.TheSelect{
    width: 60%;
    float: left;
    padding: 10px 0px 20px 0px;
    background-color: #dce0e6;
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
    float: left;
    padding: 10px 0px 20px 0px;
    border: 50px;
    background-color: #dce0e6;
}
.CapitalFlow{
    overflow: scroll;
    height: 380px;
    width: calc(100% - 7px);
    border: 1px solid black;
}
.myhead1{
    float: left; 
    width:25%;
}
.myhead1_box{
    border-right: 1px solid black;
}
.mybody1{
    float: left; 
    width:25%; 
    border-top: 1px solid black; 
    height: 35px;
}
.mybody1_box1{
    border-right: 1px solid black; 
    height: 100%; 
    padding-top: 8px;
}
.mybody1_box2{
    padding-top: 8px;
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
.myhead2{
    
}
.myhead2_box1{
    width: 40%; 
    float: left;
    height: 20px;
    background-color: #F5F6F7;
}
.myhead2_box2{
    width: 20%; 
    float: left; 
    height: 20px;
    background-color: #F5F6F7;
}
.myhead2_boxname1{
    width: 99%; 
    border-right: 1px solid black;
}
.myhead2_boxname2{
    width: 99%; 
}
.mybody2_box1{
    width: 40%; 
    float: left; 
    height: 35px; 
    border-top: 1px solid black;
}
.mybody2_box2{
    width: 20%; 
    float: left; 
    height: 35px;
    border-top: 1px solid black;
}
.mybody2_inbox1{
    border-right: 1px solid black; 
    height: 100%; 
    padding: 6px 0;
}
.mybody2_inbox2{
    padding: 6px 0;
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
.MySalesTrend{
    width: 100%;
    background-color: white;
    padding: 10px 0px 10px 0px;
}
</style>
