<template>
    <div>
        <div class="page-navbar">
            <mt-navbar class="page-part" v-model="selected">
              <mt-tab-item id="1"><span>{{ $t("finance.saleslis") }}</span></mt-tab-item>
              <mt-tab-item id="2"><span>{{ $t("finance.capitalflow") }}</span></mt-tab-item>
              <mt-tab-item id="3"><span>{{ $t("finance.salestrend") }}</span></mt-tab-item>
            </mt-navbar>
            <!-- tabcontainer -->
            <div class="TheTable">
                <mt-tab-container v-model="selected">
                    <!-- 销售清单 -->
                    <mt-tab-container-item id="1">
                    <div class="firsttable">
                        <div class="myhead">
                            <div class="myhead_box1">
                                <div class="myhead_boxname1">{{ $t("finance.saleno") }}</div>
                            </div>
                            <div class="myhead_box1">
                                <div class="myhead_boxname1">{{ $t("finance.commodityinformation") }}</div>
                            </div>
                            <div class="myhead_box2">
                                <div class="myhead_boxname2">{{ $t("finance.number") }}</div>
                            </div>
                        </div>
                        <div v-for= "(item, index) in items" :key="index">
                            <div class="mybody_box1">
                                <div class="mybody_inbox1">
                                    <span>
                                        {{ $t("finance.oddnumbers") }}: {{item.sale_num}}<br>
                                        {{ $t("finance.customer") }}: {{item.customer_name}}<br>
                                        {{ $t("finance.Telephone") }}: {{item.customer_phone}}<br>
                                        {{ $t("finance.state") }}: {{item.sale_state}}<br>
                                        {{ $t("finance.data") }}: {{item.sale_date}}<br>
                                    </span>
                                </div>
                            </div>
                            <div class="mybody_box1">
                                <div class="mybody_inbox1">
                                    <span>
                                        {{ $t("finance.model") }}： {{item.product_model}}<br>
                                        {{ $t("finance.submodel") }}： {{item.product_submodel}}<br>
                                        {{ $t("finance.color") }}： {{item.product_color}}<br>
                                        {{ $t("finance.size") }}： {{item.product_size}}<br>
                                        {{ $t("finance.eachbox") }}： {{item.per}} <br>
                                        {{ $t("finance.type") }}： {{item.type}}<br>
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
                                        {{ $t("finance.model") }}： {{item.product_model}}<br>
                                        {{ $t("finance.submodel") }}： {{item.product_submodel}}<br>
                                        {{ $t("finance.color") }}： {{item.product_color}}<br>
                                        {{ $t("finance.size") }}： {{item.product_size}}<br>
                                        {{ $t("finance.eachbox") }}： {{item.per_tial}} <br>
                                        {{ $t("finance.type") }}： {{item.thetype}}<br>
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
                            <mt-button class="TheSelectButton_button" type="primary">{{ $t("finance.issure") }}</mt-button>
                        </div>
                    </div>
                    <div class="CapitalFlow">
                        <div class="myhead0">
                            <div class="myhead1">
                                <div class="myhead1_box">{{ $t("finance.data") }}</div>
                            </div>
                            <div class="myhead1">
                                <div class="myhead1_box">{{ $t("finance.customer") }}</div>
                            </div>
                            <div class="myhead1">
                                <div class="myhead1_box">{{ $t("finance.money") }}</div>
                            </div>
                            <div class="myhead1">
                                <div class="myhead2_box">{{ $t("finance.remarks") }}</div>
                            </div>
                        </div>
                        <div v-for= "(capotal, index) in capotals" :key="index">
                            <div class="mybody1">
                                <div class="mybody1_box1">
                                    <span>{{capotal.account_in_date}}</span>
                                </div>
                            </div>
                            <div class="mybody1">
                                <div class="mybody1_box1">
                                    <span>{{capotal.customer_name}}</span>
                                </div>
                            </div>
                            <div class="mybody1">
                                <div class="mybody1_box1">
                                    <span>{{capotal.sum}}</span>
                                </div>
                            </div>
                            <div class="mybody1">
                                <div class="mybody1_box2">
                                    <span>{{capotal.content}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="CapitalFlowWhole">
                        <span>
                            {{ $t("finance.remarks") }}: {{allmoney}}
                            {{ $t("finance.arrivalaccount") }}: {{arrmoney}}
                            {{ $t("finance.copewith") }}: {{facmoney}}
                        </span>
                    </div>
                  </mt-tab-container-item >

                  <!-- 销售趋势 -->
                  <mt-tab-container-item id="3">
                    <div class="SalesTrend">
                        <div class="SetSalesTrend">
                            <mt-button class="selectbut" type="primary" @click="CusBut">{{ $t("finance.selectcustomers") }}</mt-button>
                        </div>
                        <div class="SetSalesTrend">
                            <mt-button class="selectbut" type="primary" @click="CusBut">{{ $t("finance.choosecommodity") }}</mt-button>
                        </div>
                    </div>
                    <mt-popup v-model="SelectCustomers" position="bottom" popup-transition="popup-fade"
                    class="thepopup">
                        <div class="popuphead">
                            <div>
                                <div class="popupinhead">
                                    <div class="popupinheadin">
                                        {{ $t("finance.customername") }}
                                    </div>
                                </div>
                                <div class="popupinhead">
                                    <div class="popupinheadin">
                                        {{ $t("finance.customertelephone") }}
                                    </div>
                                </div>
                                <div class="popupinhead">
                                    <div class="popupinheadin">
                                        {{ $t("finance.merchandisemodel") }}
                                    </div>
                                </div>
                                <div class="popupinhead">
                                    <div>
                                        {{ $t("finance.mycommodityinformation") }}
                                    </div>
                                </div>
                            </div>
                            <div v-for= "(customer, index) in customers" :key="index">
                                <div class="popupbody">
                                    <div class="popupinbody1">
                                        <span>
                                            {{customer.name}}
                                        </span>
                                    </div>
                                </div>
                                <div class="popupbody">
                                    <div class="popupinbody1">
                                        <span>
                                            {{customer.phone}}
                                        </span>
                                    </div>
                                </div>
                                <div class="popupbody">
                                    <div class="popupinbody1">
                                        <span>
                                            {{customer.mode}}
                                        </span>
                                    </div>
                                </div>
                                <div class="popupbody">
                                    <div class="popupinbody2">
                                        <span>
                                            {{customer.information}}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="popupbut">
                            <mt-button class="trendbut" type="primary" @click="myreturn">{{ $t("finance.issure") }}</mt-button>
                        </div>
                    </mt-popup>
                    <div class="SalesTrendInformation">
                        <div class="myhead2">
                            <div class="myhead2_box1">
                                <div class="myhead2_boxname1">{{ $t("finance.merchandisemodel") }}/{{ $t("finance.customername") }}</div>
                            </div>
                            <div class="myhead2_box1">
                                <div class="myhead2_boxname1">{{ $t("finance.mycommodityinformation") }}/{{ $t("finance.customertelephone") }}</div>
                            </div>
                            <div class="myhead2_box2">
                                <div class="myhead2_boxname2">{{ $t("finance.selectionstate") }}</div>
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
                                    <input type="checkbox" name="">
                                </div>
                            </div>
                        </div>                       
                    </div>
                     <div class="MySalesTrend">
                        <mt-button class="trendbut" type="primary">{{ $t("finance.displaytrend") }}</mt-button>
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
                SelectCustomers: false,
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
                customers:[{
                    name: 'Vittorio',
                    phone: '39******',
                    mode: '8333',
                    information: '75(件/箱)',
                },
                {
                    name: 'Vittorio',
                    phone: '39******',
                    mode: '8333',
                    information: '75(件/箱)',
                },
                {
                    name: 'Vittorio',
                    phone: '39******',
                    mode: '8333',
                    information: '75(件/箱)',
                },
                {
                    name: 'Vittorio',
                    phone: '39******',
                    mode: '8333',
                    information: '75(件/箱)',
                },],
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
            CusBut: function(){
                this.SelectCustomers = true;
            },
            myreturn: function(){
                this.SelectCustomers = false;
            },
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
}
.myhead_box1{
    width: 40%; 
    float: left; 
    background-color: #F5F6F7;
    border-bottom: 1px solid black;
}
.myhead_box2{
    width: 20%; 
    float: left; 
    background-color: #F5F6F7;
    border-bottom: 1px solid black;
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
    border-bottom: 1px solid black;
}
.mybody_box2{
    width: 20%; 
    float: left; 
    height: 140px;
    border-bottom: 1px solid black;
}
.mybody_inbox1{
    border-right: 1px solid black; 
    height: 100%; 
    padding: 1px 0;
}
.mybody_inbox1 span{
    top: 5px;
    position: relative;
}
.mybody_inbox2{
   
}
.mybody_inbox2 span{
    top: 60px;
    position: relative;
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
.selectbut{
    width: 150px;
    border-radius: 3em;
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
.TheSelectButton_button{
    border-radius: 3em; 
    width: 100px;
}
.CapitalFlow{
    overflow: scroll;
    height: 380px;
    width: calc(100% - 7px);
    border: 1px solid black;
}
.myhead0{
    width: 100%;
}
.myhead1{
    float: left; 
    width:25%;
}
.myhead1_box{
    border-right: 1px solid black;
    border-bottom: 1px solid black;
}
.myhead2_box{
    border-bottom: 1px solid black;
}
.mybody1{
    float: left; 
    width:25%;  
    height: 35px;
    border-bottom: 1px solid black;
}
.mybody1_box1{
    border-right: 1px solid black;
    height: 100%; 
}
.mybody1_box1 span{
    top: 10px;
    position: relative;
}
.mybody1_box2{
    
}
.mybody1_box2 span{
    top: 8px;
    position: relative;
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
    border-bottom: 1px solid black;
}
.myhead2_boxname2{
    border-bottom: 1px solid black;
    width: 99%; 
}
.mybody2_box1{
    width: 40%; 
    float: left; 
    height: 35px; 
    border-bottom: 1px solid black;
}
.mybody2_box2{
    width: 20%; 
    float: left; 
    height: 35px;
    border-bottom: 1px solid black;
}
.mybody2_inbox1{
    border-right: 1px solid black; 
    height: 100%; 
}
.mybody2_inbox1 span{
    top:7px;
    position: relative;
}
.mybody2_inbox2{

}
.mybody2_inbox2 input{
    position: relative;
    top: 10px;
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
.trendbut{
    width: 300px;
    border-radius: 3em;
}


.thepopup{
    width: 390px; 
    height: 430px; 
}
.popuphead{
    width:370px; 
    height: 350px;
    left: 10px;
    top: 10px;
    border: 1px solid black;
    position: relative;
}
.popupbut{
    width:370px; 
    height: 50px;
    left: 10px;
    top: 20px;
    position: relative; 
}
.popupinhead{
    float: left; 
    width: 25%;
    border-bottom: 1px solid black;
}
.popupinheadin{
    border-right: 1px solid black;
}
.popupbody{
    float: left; 
    width: 25%;
    border-bottom: 1px solid black;
}
.popupinbody1{
    border-right: 1px solid black; 
    height: 35px;
}
.popupinbody1 span{
    top:10px;
    position: relative;
}
.popupinbody2{
    height: 35px;
}
.popupinbody2 span{
    top:7px;
    position: relative;
}
</style>
