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
                  <mt-tab-container-item id="2" style="background-color: white">
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
                                <td>{{capotal.mydate}}</td>
                                <td>{{capotal.myname}}</td>
                                <td>{{capotal.mymoney}}</td>
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
                    mydate: '2018.03.09',
                    myname: 'Vittorio',
                    mymoney: '-8000',
                    content: '到账',
                },{
                    mydate: '2018.03.09',
                    myname: 'Vittorio',
                    mymoney: '-8000',
                    content: '到账',
                },{
                    mydate: '2018.03.09',
                    myname: 'Vittorio',
                    mymoney: '-8000',
                    content: '到账',
                },{
                    mydate: '2018.03.09',
                    myname: 'Vittorio',
                    mymoney: '-8000',
                    content: '到账',
                },{
                    mydate: '2018.03.09',
                    myname: 'Vittorio',
                    mymoney: '-8000',
                    content: '到账',
                },{
                    mydate: '2018.03.09',
                    myname: 'Vittorio',
                    mymoney: '-8000',
                    content: '到账',
                },{
                    mydate: '2018.03.09',
                    myname: 'Vittorio',
                    mymoney: '-8000',
                    content: '到账',
                },{
                    mydate: '2018.03.09',
                    myname: 'Vittorio',
                    mymoney: '-8000',
                    content: '到账',
                },{
                    mydate: '2018.03.09',
                    myname: 'Vittorio',
                    mymoney: '2600',
                    content: '订单***',
                },{
                    mydate: '2018.03.09',
                    myname: 'Vittorio',
                    mymoney: '2600',
                    content: '订单***',
                },{
                    mydate: '2018.03.09',
                    myname: 'Vittorio',
                    mymoney: '2600',
                    content: '订单***',
                },{
                    mydate: '2018.03.09',
                    myname: 'Vittorio',
                    mymoney: '2600',
                    content: '订单***',
                },{
                    mydate: '2018.03.09',
                    myname: 'Vittorio',
                    mymoney: '2600',
                    content: '订单***',
                },{
                    mydate: '2018.03.09',
                    myname: 'Vittorio',
                    mymoney: '2600',
                    content: '订单***',
                },{
                    mydate: '2018.03.09',
                    myname: 'Vittorio',
                    mymoney: '2600',
                    content: '订单***',
                }],
                allmoney: '-2000',
                arrmoney: '12700',
                facmoney: '-14700'
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
    height: 400px;
    width: calc(100% - 7px);
    border: 1px solid black;
}
.CapitalFlow table{
    width: 100%;
    font-size: 20px;
}
.CapitalFlowWhole{
    width: calc(100% - 5px);
    background-color:#C0C0C0;
    font-size: 20px;
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
