
<template>
    <div>
        <!--<mt-navbar v-model="selected">-->
        <!--<mt-tab-item id="1">库存</mt-tab-item>-->
        <!--<mt-tab-item id="2">入库</mt-tab-item>-->
        <!--<mt-tab-item id="1">出库</mt-tab-item>-->
        <!--<mt-tab-item id="1">库盘</mt-tab-item>-->
        <!--</mt-navbar>-->

        <div class="mint-navbar page-part">
            <a class="mint-tab-item " id="1">
                <div class="mint-tab-item-icon"></div>
                <div class="mint-tab-item-label">库存</div>
            </a>
            <a class="mint-tab-item is-selected" id="2">
                <div class="mint-tab-item-icon"></div>
                <div class="mint-tab-item-label">入库</div>
            </a>
            <a class="mint-tab-item" id="3">
                <div class="mint-tab-item-icon">
                </div> <div class="mint-tab-item-label">出库</div>
            </a>
            <a class="mint-tab-item" id="4">
                <div class="mint-tab-item-icon">
                </div> <div class="mint-tab-item-label">库盘</div>
            </a>
        </div>
        <br/>
        <!--<div style="border: 1px solid black; height: 500px">-->


        <!--</div>-->
        <!--<div style="border: 1px solid black; height: 500px">-->


        <!--</div>-->
        <!--<div style="border: 1px solid black; height: 500px">-->


        <!--</div>-->
        <!--<div style="border: 1px solid black; height: 500px">-->


        <!--</div>-->


        <div style="height:40%; margin-left:0px; padding-left:0px; overflow: hidden;margin-right: 0px;padding-right: 0px">
            <div style="width:50% ;float: left; margin-right: 0px;padding-right: 0px">
                <!--<label>型号：</label><input type="text" placeholder="型号（必输）"/><label>件</label>-->
                <!--<label>每箱件数：</label><input type="number" placeholder="型号（必输）"/>-->
                <mt-field  label="型号:" placeholder="型号" v-model="version"></mt-field>
                <mt-field label="每箱件数:" placeholder="必输" type="text" v-model="total"></mt-field>
                <mt-field label="颜色:" placeholder="输入颜色" type="text" v-model="color"></mt-field>
                <mt-button type="default" >&nbsp;&nbsp;&nbsp;&nbsp;录入&nbsp;&nbsp;&nbsp;&nbsp;</mt-button>
            </div>
            <div style="width: 50% ;float: right; ">
                <mt-field label="子型号:" placeholder="子型号" type="text" v-model="sversion"></mt-field>
                <mt-field label="尺寸:" placeholder="XXL" type="text" v-model="size"></mt-field>
                <mt-field label="数量:" placeholder="3" type="number" v-model="number"></mt-field>
                <mt-button type="default" >尾箱录入</mt-button>
            </div>
        </div>
        <!--显示暂时录入的信息-->
        <div style="height: 50% ;border: 2px solid black; height: 40%; margin-top: 5px; padding-top: 5px">
            <div style="overflow: hidden;border: 1px solid black">
                <div style="float: left;padding-top: 0px; margin-top: 0px; ">
                    img
                </div>
                <div style="float: right; border-left: 1px solid black;padding-top: 0px; margin-top: 0px">
                    型号：{{version}} 每箱件数:{{total}} 颜色：{{color}}<br>
                    子型号：{{sversion}} 尺寸:{{size}}    数量:{{number}}
                </div>
            </div>

            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        </div>

        <div style="height: 10%">
            <mt-button type="primary" size="large">确定录入</mt-button>
        </div>






    </div>
</template>
<script>
    // eslint-disable-next-line
    // @ is an alias to /src
    /* eslint-disable */
    export default {
        components: {
        },
        data: function () {
            return {
                version:"8333",
                total:'75',
                color:'红色',
                sversion:'I',
                size:'XL',
                number:'6'

            }
        },
        watch: function() {
        },
        methods: {},
        created() {
        },
        mounted() {
        }
    }
</script>
<style lang="scss" scoped>
    /*@import "../../styles/themes.scss";*/
    mt-button{
        color: #9FA9BA;
        background-color: #4A90E2;
    }

    .bar-font{
        font-size: large;
    }

</style>
<!--<template>-->
<!--<div>-->
<!--<div>-->
<!--<div class="mint-navbar page-part">-->
<!--<a class="mint-tab-item is-selected" id="1">-->
<!--<div class="mint-tab-item-icon"></div>-->
<!--<div class="mint-tab-item-label">库存</div>-->
<!--</a>-->
<!--<a class="mint-tab-item" id="2">-->
<!--<div class="mint-tab-item-icon"></div>-->
<!--<div class="mint-tab-item-label">入库</div>-->
<!--</a>-->
<!--<a class="mint-tab-item" id="3">-->
<!--<div class="mint-tab-item-icon">-->
<!--</div> <div class="mint-tab-item-label">出库</div>-->
<!--</a>-->
<!--<a class="mint-tab-item" id="4">-->
<!--<div class="mint-tab-item-icon">-->
<!--</div> <div class="mint-tab-item-label">库盘</div>-->
<!--</a>-->
<!--</div>-->
<!--<div id="item">-->
<!--{{msg}}-->
<!--</div>-->

<!--&lt;!&ndash;<mt-navbar v-model="selected">&ndash;&gt;-->
<!--&lt;!&ndash;<mt-tab-item id="1"><span class="bar-font">库存</span></mt-tab-item>&ndash;&gt;-->
<!--&lt;!&ndash;<mt-tab-item id="2"><span class="bar-font">入库</span></mt-tab-item>&ndash;&gt;-->
<!--&lt;!&ndash;<mt-tab-item id="3"><span class="bar-font">出库</span></mt-tab-item>&ndash;&gt;-->
<!--&lt;!&ndash;<mt-tab-item id="4"><span class="bar-font">库盘</span></mt-tab-item>&ndash;&gt;-->
<!--&lt;!&ndash;</mt-navbar>&ndash;&gt;-->
<!--</div>-->

<!--</div>-->
<!--</template>-->
<!--<script>-->

<!--// eslint-disable-next-line-->
<!--// @ is an alias to /src-->
<!--/* eslint-disable */-->
<!--export default {-->
<!--components: {-->
<!--},-->
<!--data: function () {-->
<!--return {-->

<!--}-->
<!--},-->
<!--watch: {-->
<!--// selected: function() {-->
<!--//     if(this.selected == '1') {-->
<!--//         this.$router.push('/Goods');-->
<!--//     }else if(this.selected == '2') {-->
<!--//         this.$router.push('/Warehouse');-->
<!--//     }else if(this.selected == '3') {-->
<!--//         this.$router.push('/Finance');-->
<!--//     }else if(this.selected == '4') {-->
<!--//         this.$router.push('/My');-->
<!--//     }-->
<!--// }-->
<!--},-->
<!--methods: {},-->
<!--created() {-->
<!--},-->
<!--mounted() {-->
<!--}-->
<!--}-->
<!--</script>-->
<!--<style lang="scss" scoped>-->
<!--/*@import "../../styles/themes.scss";*/-->
<!--.bar-font{-->
<!--font-size: large;-->
<!--}-->
<!--.mint-tab-item{-->
<!--font-size: large;-->
<!--}-->
<!--</style>-->
