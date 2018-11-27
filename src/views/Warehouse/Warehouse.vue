
<template>
    <div>
        <mt-navbar v-model="selected" value>
            <mt-tab-item id="1">{{ $t("warehouse.inventory") }}</mt-tab-item>
            <mt-tab-item id="2">{{ $t("warehouse.inwarehouse") }}</mt-tab-item>
            <mt-tab-item id="3">{{ $t("warehouse.outwarehouse") }}</mt-tab-item>
            <mt-tab-item id="4">{{ $t("warehouse.stocktaking") }}</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected" style="padding-top: 10px">
            <mt-tab-container-item id="1">
                <div class="firsttable">
                    <div class="box3" v-for="product in products">
                            <div class="box331"></div>
                            <div class="box332" style="width: 80%">
                                <table style="text-align: left" border="1" cellspacing="0" >
                                    <tr>
                                        <th style="width: 15%"> {{ $t("warehouse.product_model") }}:</th>
                                        <td style="width: 35%"> {{product.product_model}} </td>
                                        <th style="width: 15%"> {{ $t("warehouse.product_submodel") }}:</th>
                                        <td style="width: 35%"> {{product.product_submodel}}</td>
                                    </tr>
                                    <tr>
                                        <th> {{ $t("warehouse.product_size") }}:</th>
                                        <td> {{product.product_size}} </td>
                                        <th> {{ $t("warehouse.product_color") }}:</th>
                                        <td> {{product.product_color}}</td>
                                    </tr>
                                    <tr>
                                        <th> {{ $t("warehouse.company_num") }}:</th>
                                        <td> {{product.company_num}} </td>
                                        <th> {{ $t("warehouse.inventories") }}:</th>
                                        <td> {{product.inventories}}</td>
                                    </tr>
                                    <tr>
                                        <th> {{ $t("warehouse.full") }}:</th>
                                        <td> {{product.full}} </td>
                                        <th> {{ $t("warehouse.full_num") }}:</th>
                                        <td> {{product.full_num}}</td>
                                    </tr>
                                    <tr v-for= "tail in product.tail_list" >
                                        <th> {{ $t("warehouse.tail") }}:</th>
                                        <td> {{tail.tail}}</td>
                                        <th> {{ $t("warehouse.tail_num") }}:</th>
                                        <td> {{tail.tail_num}}</td>
                                    </tr>

                                </table>

                            </div>
                        </div><br>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div class="box1"  v-if="isPulled === false" >
                    <table border="1" cellspacing="0">
                        <tr>
                            <th style="width: 15%">{{$t('warehouse.product_model')}}:</th>
                            <td style="width: 35%"><mt-field v-bind:placeholder="$t('warehouse.product_model_edit')" v-model="list_in.product_model"></mt-field></td>
                            <th style="width: 15%">{{$t('warehouse.product_submodel')}}:</th>
                            <td style="width: 35%"><mt-field v-bind:placeholder="$t('warehouse.product_submodel_edit')" v-model="list_in.product_submodel"></mt-field></td>
                        </tr>
                        <tr>
                            <th>{{$t('warehouse.product_color')}}:</th>
                            <td><mt-field v-bind:placeholder="$t('warehouse.product_color_edit')" v-model="list_in.product_color"></mt-field></td>
                            <th>{{$t('warehouse.product_size')}}</th>
                            <td><mt-field v-bind:placeholder="$t('warehouse.product_size_edit')" v-model="list_in.product_size"></mt-field></td>
                        </tr>
                        <tr>
                            <th>{{$t('warehouse.full')}}:</th>
                            <td><mt-field v-bind:placeholder="$t('warehouse.num_edit')" v-model="list_in.full"></mt-field></td>
                            <th>{{$t('warehouse.full_num')}}:</th>
                            <td><mt-field v-bind:placeholder="$t('warehouse.box_num_edit')" v-model="list_in.full_num"></mt-field></td>
                        </tr>
                        <tr v-for="tail in list_in.tail_list">
                            <th>{{$t('warehouse.tail')}}</th>
                            <td><mt-field v-bind:placeholder="$t('warehouse.num_edit')" v-model="tail.tail"></mt-field></td>
                            <th>{{$t('warehouse.tail_num')}}</th>
                            <td><mt-field v-bind:placeholder="$t('warehouse.box_num_edit')" v-model="tail.tail_num"></mt-field></td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <th></th>
                            <td style="width: 50%"><mt-button @click="addInInfo">{{ $t("warehouse.add_in") }}</mt-button></td>
                            <th></th>
                            <td style="width: 50%"><mt-button @click="addTailInfo">{{ $t("warehouse.tail_add_in") }}</mt-button></td>
                        </tr>
                    </table>
                </div>
                <div class="box1">
                    <mt-button  @click.native="changeStatus" v-if="isPulled === true">▼</mt-button>
                    <mt-button  @click.native="changeStatus" v-if="isPulled === false">▲</mt-button>
                </div>
                <div class="box1">
                    <div class="box3" v-for="product in products_in">
                            <div  class="box331" ></div>
                            <div class="box332" style="width: 80%">
                                <table style="text-align: left"  border="1" cellspacing="0">
                                    <tr>
                                        <th style="width: 15%"> {{ $t("warehouse.product_model") }}:</th>
                                        <td style="width: 35%"> {{product.product_model}} </td>
                                        <th style="width: 15%"> {{ $t("warehouse.product_submodel") }}:</th>
                                        <td style="width: 35%"> {{product.product_submodel}}</td>
                                    </tr>
                                    <tr>
                                        <th> {{ $t("warehouse.product_size") }}:</th>
                                        <td> {{product.product_size}} </td>
                                        <th> {{ $t("warehouse.product_color") }}:</th>
                                        <td> {{product.product_color}}</td>
                                    </tr>
                                    <tr>
                                        <th> {{ $t("warehouse.company_num") }}:</th>
                                        <td> {{product.company_num}} </td>
                                        <th> {{ $t("warehouse.inventories") }}:</th>
                                        <td> {{product.inventories}}</td>
                                    </tr>
                                    <tr>
                                        <th> {{ $t("warehouse.full") }}:</th>
                                        <td> {{product.full}} </td>
                                        <th> {{ $t("warehouse.full_num") }}:</th>
                                        <td> {{product.full_num}}</td>
                                    </tr>
                                    <tr v-for= "tail in product.tail_list" >
                                        <th> {{ $t("warehouse.tail") }}:</th>
                                        <td> {{tail.tail}}</td>
                                        <th> {{ $t("warehouse.tail_num") }}:</th>
                                        <td> {{tail.tail_num}}</td>
                                    </tr>
                                </table>
                            </div>
                        </div><br>
                </div>
                <mt-button @click="uploadWarehouseIn">{{$t("warehouse.confirm_warehouse_in")}}</mt-button>
                <mt-popup v-model="tail_in_visible" style="width: 95%">
                    <table border="1" cellspacing="0">
                        <tr>
                            <th style="width: 20%">{{$t('warehouse.tail')}}:</th>
                            <td style="width: 30%"><mt-field v-bind:placeholder="$t('warehouse.num_edit')" v-model="tail_list_in.tail"></mt-field></td>
                            <th style="width: 20%">{{$t('warehouse.tail_num')}}:</th>
                            <td style="width: 30%"><mt-field v-bind:placeholder="$t('warehouse.box_num_edit')" v-model="tail_list_in.tail_num"></mt-field></td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <th></th>
                            <td style="width: 50%"><mt-button @click="addTailToListIn">{{$t("basic.ok")}}</mt-button></td>
                            <th></th>
                            <td style="width: 50%"><mt-button @click="cancelTailToListIn">{{$t("basic.cancel")}}</mt-button></td>
                        </tr>
                    </table>
                </mt-popup>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-button @click="showSaleSlip">{{ $t("warehouse.chooseSaleSlip") }}</mt-button>
                <mt-popup v-model="saleslip_visible" style="width: 95%">
                    <div style="border: 2px solid black;" >
                        <table border="1" cellspacing="0">
                            <tr>
                                <th>{{$t('customer.customer_name')}}:</th>
                                <th colspan="2"><mt-field v-bind:placeholder="$t('customer.customer_name_edit')" v-model="saleslip.name"></mt-field></th>
                                <th>{{$t('customer.customer_tele')}}:</th>
                                <th colspan="2"><mt-field v-bind:placeholder="$t('customer.customer_tele_edit')" v-model="saleslip.phone"></mt-field></th>
                            </tr>
                            <tr>
                                <th>{{$t('basic.start_time')}}:</th>
                                <th><mt-field v-bind:placeholder="$t('basic.start_time_select')" v-model="saleslip.start_date" disabled="true"></mt-field></th>
                                <th><mt-button @click="openPicker(true)">···</mt-button></th>
                                <th>{{$t('basic.end_time')}}:</th>
                                <th><mt-field v-bind:placeholder="$t('basic.end_time_select')" v-model="saleslip.end_date" disabled="true"></mt-field></th>
                                <th><mt-button @click="openPicker(false)">···</mt-button></th>
                            </tr>
                            <tr>
                                <th colspan="6"><mt-button @click="searchSaleSlips">{{ $t("warehouse.search_saleslip") }}</mt-button></th>
                            </tr>
                        </table>
                        <table border="1" cellspacing="0">
                            <tr>
                                <th>{{ $t("warehouse.sale_num") }}</th>
                                <th>{{ $t("customer.customer_name") }}</th>
                                <th>{{ $t("customer.customer_tele") }}</th>
                                <th>{{ $t("customer.customer_address") }}</th>
                                <th>{{ $t("warehouse.sale_time") }}</th>
                            </tr>
                            <tr v-for="saleslip in saleslips">
                                <td style="width: 10%"><mt-cell v-model="saleslip.sale_num" ></mt-cell></td>
                                <td style="width: 10%"><mt-cell v-model="saleslip.customer_name"></mt-cell></td>
                                <td style="width: 10%"><mt-cell v-model="saleslip.customer_tele"></mt-cell></td>
                                <td style="width: 15%"><mt-cell v-model="saleslip.customer_address"></mt-cell></td>
                                <td style="width: 50%"><mt-cell v-model="saleslip.sale_date"></mt-cell></td>
                            </tr>
                            <tr>
                                <th colspan="6"><mt-button @click="showSaleSlip">{{ $t("basic.ok") }}</mt-button></th>
                            </tr>
                        </table>
                    </div>
                </mt-popup>
                <div class="box1">
                    <div class="boxsale" v-for="obj in saleslips ">
                            <table border="1" cellspacing="0" ><tr>
                                <th style="width: 20%">{{$t('warehouse.sale_num')}}:</th>
                                <td style="width: 30%" colspan="2"><mt-field v-model="obj.sale_num"></mt-field></td>
                                <!--<th style="width: 20%"　colspan="2"></th>-->
                                <td style="width: 30%" colspan="3"><mt-button @click="deleteSaleSlip()">{{ $t("basic.delete") }}</mt-button></td>
                            </tr>
                            <tr>
                                <th style="width: 20%">{{$t('customer.customer_name')}}:</th>
                                <td style="width: 30%" colspan="2"><mt-field v-model="obj.customer_name"></mt-field></td>
                                <th style="width: 20%">{{$t('customer.customer_tele')}}:</th>
                                <td style="width: 30%" colspan="2"><mt-field v-model="obj.customer_tele"></mt-field></td>
                            </tr>
                            <tr>
                                <th style="width: 20%">{{$t('customer.customer_address')}}:</th>
                                <th style="width: 30%"　colspan="5"><mt-field v-model="obj.customer_address"></mt-field></th>
                            </tr>
                                <tr>
                                    <th style="width: 20%">{{ $t("basic.type") }}</th>
                                    <th style="width: 20%">{{ $t("warehouse.product_model") }}</th>
                                    <th style="width: 20%">{{ $t("warehouse.product_submodel") }}</th>
                                    <th style="width: 20%">{{ $t("warehouse.product_color") }}</th>
                                    <th style="width: 20%">{{ $t("warehouse.product_size") }}</th>
                                    <th style="width: 20%" >{{ $t("basic.box_num") }}</th>

                                </tr>
                                <tr v-for="_obj in obj.box_list">
                                    <td style="width: 20%"><mt-cell v-model="_obj.box_type"></mt-cell></td>
                                    <td style="width: 20%"><mt-cell v-model="_obj.product_model"></mt-cell></td>
                                    <td style="width: 20%"><mt-cell v-model="_obj.product_submodel"></mt-cell></td>
                                    <td style="width: 20%"><mt-cell v-model="_obj.product_color"></mt-cell></td>
                                    <td style="width: 20%"><mt-cell v-model="_obj.product_size"></mt-cell></td>
                                    <td style="width: 20%"><mt-cell v-model="_obj.box_num"></mt-cell></td>
                                </tr>
                            </table>
                        </div>
                </div>
                <mt-button @click="uploadWarehouseOut">{{ $t("warehouse.confirm_warehouse_out") }}</mt-button>
                <mt-datetime-picker ref="picker_start" type="date" v-model="saleslip.start_date" @confirm="handleConfirm(true)"
                                    year-format="{value}"
                                    month-format="{value}"
                                    date-format="{value}"></mt-datetime-picker>
                <mt-datetime-picker ref="picker_end" type="date" v-model="saleslip.end_date" @confirm="handleConfirm(false)"
                                    year-format="{value} 年"
                                    month-format="{value} 月"
                                    date-format="{value} 日"></mt-datetime-picker>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <div class="box1">
                    <div class="box3" v-for="product in products">
                            <div class="box331"></div>
                            <div class="box332">
                                <table style="text-align: left"  border="1" cellspacing="0">
                                    <tr>
                                        <th> {{ $t("warehouse.product_model") }}:</th>
                                        <td> {{product.product_model}} </td>
                                        <th> {{ $t("warehouse.product_submodel") }}:</th>
                                        <td> {{product.product_submodel}}</td>
                                    </tr>
                                    <tr>
                                        <th> {{ $t("warehouse.product_size") }}:</th>
                                        <td> {{product.product_size}} </td>
                                        <th> {{ $t("warehouse.product_color") }}:</th>
                                        <td> {{product.product_color}}</td>
                                    </tr>
                                    <tr>
                                        <th> {{ $t("warehouse.company_num") }}:</th>
                                        <td> {{product.company_num}} </td>
                                        <th> {{ $t("warehouse.inventories") }}:</th>
                                        <td> {{product.inventories}}</td>
                                    </tr>
                                    <tr>
                                        <th> {{ $t("warehouse.full") }}:</th>
                                        <td> {{product.full}} </td>
                                        <th> {{ $t("warehouse.full_num") }}:</th>
                                        <td> {{product.full_num}}</td>
                                    </tr>
                                    <tr v-for= "tail in product.tail_list" >
                                        <th> {{ $t("warehouse.tail") }}:</th>
                                        <td> {{tail.tail}}</td>
                                        <th> {{ $t("warehouse.tail_num") }}:</th>
                                        <td> {{tail.tail_num}}</td>
                                    </tr>
                                </table>
                            </div>
                            <div class="box333">
                                <table  border="1" cellspacing="0">
                                    <tr>
                                        <th><mt-button @click="checked">{{ $t("basic.confirm") }}</mt-button></th>
                                    </tr>
                                    <tr>
                                        <th><mt-button @click="showModifySaleslip">{{ $t("basic.modify") }}</mt-button></th>
                                    </tr>
                                </table>
                            </div>
                        </div><br>
                </div>
                <mt-button @click="modifyInventories">{{ $t("warehouse.stocktaking_complete") }}</mt-button>
                <mt-popup v-model="modify_visible" style="width: 90%">
                    <table style="text-align: left"  border="1" cellspacing="0">
                        <tr>
                            <th>{{$t('warehouse.product_model')}}:</th>
                            <td><mt-field></mt-field></td>
                            <th>{{$t('warehouse.product_submodel')}}:</th>
                            <td colspan="2"><mt-field></mt-field></td>
                        </tr>
                        <tr>
                            <th>{{$t('warehouse.product_color')}}:</th>
                            <td><mt-field></mt-field></td>
                            <th>{{$t('warehouse.product_size')}}:</th>
                            <td colspan="2"><mt-field></mt-field></td>
                        </tr>
                        <tr>
                            <th>{{$t('warehouse.full')}}:</th>
                            <td><mt-field></mt-field></td>
                            <th>{{$t('warehouse.full_num')}}:</th>
                            <td colspan="2"><mt-field></mt-field></td>
                        </tr>
                        <tr>
                            <th>{{$t('warehouse.tail')}}:</th>
                            <td><mt-field></mt-field></td>
                            <th>{{$t('warehouse.tail_num')}}:</th>
                            <td><mt-field></mt-field></td>
                            <th><mt-button @click="deleteTail">{{ $t("basic.delete") }}</mt-button></th>
                        </tr>
                        <tr>
                            <th colspan="2"><mt-button @click="addTail">{{ $t("warehouse.add_tail") }}</mt-button></th>
                            <th colspan="3"><mt-button @click="showModifySaleslip">{{ $t("basic.ok") }}</mt-button></th>
                        </tr>
                    </table>
                </mt-popup>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
    // eslint-disable-next-line
    // @ is an alias to /src
    /* eslint-disable */
    import {getInventoriesData,uploadWarehouseOut,uploadWarehouseIn,modifyInventories} from '../../api/warehouse'

    export default {
        components: {

        },
        data: function () {
            return {
                selected: "4",                              // 分页控制
                isPulled:false,                            // 下来按钮状态控制
                tail_in_visible:false,                     // 是否显示尾箱录入画面
                saleslip_visible:false,                    // 是否显示销售单
                modify_visible:false,                      // 是否显示修改窗口
                list_in: {
                    // "product_model": "test",
                    // "product_submodel": "0001",
                    // "product_size": "XL",
                    // "product_color": "RED",
                    // "inventories": "180",
                    // "company_num": "A0004",
                    // "full": "170",
                    // "full_num": "10",
                     "tail_list": []
                    },                             // 入库上方需要添加的数据
                tail_list_in:{},                            // 插入的尾箱数据
                products: [
                    { "product_model":"test","product_submodel":"0001","product_size":"XL","product_color":"RED","inventories":"180",
                        "company_num":"A0004","full":"170","full_num":"10",
                        "tail_list":[{"tail":"20","tail_num":"2"},{"tail":"30","tail_num":"4"},]
                    },
                    { "product_model":"test","product_submodel":"0002","product_size":"L","product_color":"WHITE","inventories":"400",
                        "company_num":"A0004","full":"170","full_num":"4",
                        "tail_list":[{"tail":"46","tail_num":"2"},]
                    },
                    { "product_model":"test","product_submodel":"0002","product_size":"L","product_color":"WHITE","inventories":"400",
                        "company_num":"A0004","full":"170","full_num":"4",
                        "tail_list":[{"tail":"46","tail_num":"2"},]
                    },
                    { "product_model":"test","product_submodel":"0002","product_size":"L","product_color":"WHITE","inventories":"400",
                        "company_num":"A0004","full":"170","full_num":"4",
                        "tail_list":[{"tail":"46","tail_num":"2"},]
                    },
                ],                            // 库存数据
                products_in: [
                    { "product_model":"test","product_submodel":"0001","product_size":"XL","product_color":"RED","inventories":"180",
                        "company_num":"A0004","full":"170","full_num":"10",
                        "tail_list":[{"tail":"20","tail_num":"2"},{"tail":"30","tail_num":"4"},]
                    },
                ],                         // 最后提交的数据
                saleslip:{},                                // 销售单数据
                saleslips:[
                    {"sale_num":"100001","customer_name":"Allen","customer_tele":"138123456789","customer_address":"ST.Louis No.1","sale_date":"2018-11-20",
                    "box_list":[{"box_type":"整箱","product_model":"test","product_submodel":"0001","product_color":"RED","box_num":"15","product_size":"M"},
                        {"box_type":"整箱","product_model":"test","product_submodel":"0001","product_color":"RED","box_num":"15","product_size":"XL"}]
                    }
                ]                             // 出库数据
            }
        },
        created() {
            // this.getWarehouseData();
        },
        methods:{

            // 库存模块
            // 获取库存信息
            getWarehouseData(){
                getInventoriesData().then(response => {
                    response = response.data;
                    if (response.back_code === "200") {
                        this.products = response.datas;
                    }
                })
            },

            // 入库模块
            // 更改下拉框的状态
            changeStatus(){
                this.isPulled = this.isPulled !== true;
            },
            // 把上方数据录入下方列表
            addInInfo(){
                this.products_in.push(this.list_in);
                this.list_in = {};
            },
            // 显示尾箱录入画面
            addTailInfo(){
                this.tail_in_visible = true;
            },
            // 尾箱数据插入
            addTailToListIn(){
                this.list_in.tail_list.push(this.tail_list_in);
                this.cancelTailToListIn();
            },
            // 关闭尾箱录入画面
            cancelTailToListIn(){
                this.tail_list_in = {};
                this.tail_in_visible = false;
            },
            // 提交入库信息
            uploadWarehouseIn(){
                uploadWarehouseIn().then(response => {
                    response = response.data;
                    if (response.back_code === "200") {

                    }
                })
            },

            // 出库模块
            // 日期框里的确定按钮触发事件
            handleConfirm(type){
                if (type === true)
                {
                    this.$refs.picker_start.close();
                }else
                {
                    this.$refs.picker_end.close();
                }
            },
            // 打开日期选择框
            openPicker(type){
                if (type === true)
                {
                    this.$refs.picker_start.open();
                }else
                {
                    this.$refs.picker_end.open();
                }
            },
            // 显示销售单
            showSaleSlip(){
                this.saleslip = {};
                this.saleslip_visible = this.saleslip_visible !== true;
            },
            // 搜索销售单
            searchSaleSlips(){

            },
            // 删除销售单
            deleteSaleSlip(index){

            },
            // 提交出库单
            uploadWarehouseOut(){
                uploadWarehouseOut().then(response => {
                    response = response.data;
                    if (response.back_code === "200") {

                    }
                })
            },

            // 盘库模块
            // 确认
            checked(){

            },
            // 显示修改窗口
            showModifySaleslip(){
                this.modify_visible = this.modify_visible !== true;
            },
            // 删除尾箱
            deleteTail(){

            },
            // 增加尾箱
            addTail(){

            },
            // 未改库存数
            modifyInventories(){
                modifyInventories().then(response => {
                    response = response.data;
                    if (response.back_code === "200") {
                        this.getWarehouseData()
                    }
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    /*@import "../../styles/themes.scss";*/
    mt-button{
        color: #9FA9BA;
        background-color: #4A90E2;
    }
    .box1{
        border: 1px solid black;
        background-color: #F5F5F5;
    }
    .box2{
        margin: 8px 8px 8px 8px;
        background-color: white;
    }
    .box3{
        border: 1px solid black;
        overflow: hidden;
        padding: 10px;
    }
    .boxsale{
        border: 1px solid black;
        overflow: hidden;
        padding: 10px;
    }
    .add_tail{
        border: 1px solid black;
        overflow: hidden;
    }
    .bar-font{
        font-size: large;
    }
    /*.b{*/
    /*float: left;*/
    /*height: 98px;*/
    /*}*/
    [class*="box33"]{
        float: left;
        height: 98px;
    }
    .box331{
        background-image: url("../../assets/mode.jpg");
        background-size: cover;
        height:80px;
        width: 20%;
    }
    .box332{
        height: 100%;
        width: 70%;
    }
    .box333{
        height: 100%;
        width: 10%;
    }
    .firsttable{
        overflow: scroll;
        height: 480px;
        width: calc(100% - 7px);
        border: 1px solid black;
    }
</style>

