<template>
    <div class="pageall">
        <div>
            <div class="handle">
                <mt-button type="default" @click="addbutn">增加客户</mt-button>
            </div>
            <div class="handle">
                <mt-button type="default" @click="editbutn">编辑客户</mt-button>
            </div>
            <div class="Management">
                <div v-for= "(infor, index) in infors" :key="index">
                    <div class="mybody1">
                        <div class="mybody1_box1">
                            {{infor.customer_name}}
                        </div>
                    </div>
                    <div class="mybody1">
                        <div class="mybody1_box1">
                            {{infor.company_name}}
                        </div>
                    </div>
                    <div class="mybody1">
                        <div class="mybody1_box1">
                            {{infor.customer_tele}}
                         </div>
                     </div>
                     <div class="mybody1">
                            <div class="mybody1_box2">
                                <mt-button class="mybody1_box2_mt-button" type="default">删除</mt-button>
                            </div>
                    </div>
                </div>
            </div>
            <div class="Managementbut">
                <mt-button type="default" @click="myreturn">返回</mt-button>    
            </div>
        </div>
        <mt-popup v-model="addasideView" position="relative" popup-transition="popup-fade">
            <div class="AddAndEdit">
                <div class="AddAndEditHead">
                    <h1>增加客户</h1>
                </div>
                <div>
                    <mt-field label="客户姓名" placeholder="请输入客户姓名" v-model="username"></mt-field>
                    <mt-field label="公司名字" placeholder="请输入公司名字" v-model="username"></mt-field>
                    <mt-field label="客户电话" placeholder="请输入客户电话" v-model="username"></mt-field>
                </div>
                <div class="AddAndEditButton">
                    <div class="handle">
                        <mt-button type="default" @click="confirm">确认</mt-button>
                    </div>
                    <div class="handle">
                        <mt-button type="default" @click="cancle">取消</mt-button>
                    </div>
                </div>
            </div>
        </mt-popup>
        <mt-popup v-model="editasideView" position="relative" popup-transition="popup-fade">
            <div class="AddAndEdit">
                <div class="AddAndEditHead">
                    <h1>编辑客户</h1>
                </div>
                <div>
                    <mt-field label="客户姓名" placeholder="请输入客户姓名" v-model="username"></mt-field>
                    <mt-field label="公司名字" placeholder="请输入公司名字" v-model="username"></mt-field>
                    <mt-field label="客户电话" placeholder="请输入客户电话" v-model="username"></mt-field>
                </div>
                <div class="AddAndEditButton">
                    <div class="handle">
                        <mt-button type="default" @click="confirm">确认</mt-button>
                    </div>
                    <div class="handle">
                        <mt-button type="default" @click="cancle">取消</mt-button>
                    </div>
                </div>
            </div>
        </mt-popup>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data() {
            return {
                addasideView: false,
                editasideView: false,
                infors:[{
                    customer_name: 'Vittorio',
                    company_name: 'Vittorio',
                    customer_tele: '39******',
                },{
                    customer_name: 'Vittorio',
                    company_name: 'Vittorio',
                    customer_tele: '39******',
                },{
                    customer_name: 'Vittorio',
                    company_name: 'Vittorio',
                    customer_tele: '39******',
                },{
                    customer_name: 'Vittorio',
                    company_name: 'Vittorio',
                    customer_tele: '39******',
                },{
                    customer_name: 'Vittorio',
                    company_name: 'Vittorio',
                    customer_tele: '39******',
                },{
                    customer_name: 'Vittorio',
                    company_name: 'Vittorio',
                    customer_tele: '39******',
                },{
                    customer_name: 'Vittorio',
                    company_name: 'Vittorio',
                    customer_tele: '39******',
                },{
                    customer_name: 'Vittorio',
                    company_name: 'Vittorio',
                    customer_tele: '39******',
                },{
                    customer_name: 'Vittorio',
                    company_name: 'Vittorio',
                    customer_tele: '39******',
                },{
                    customer_name: 'Vittorio',
                    company_name: 'Vittorio',
                    customer_tele: '39******',
                },{
                    customer_name: 'Vittorio',
                    company_name: 'Vittorio',
                    customer_tele: '39******',
                },{
                    customer_name: 'Vittorio',
                    company_name: 'Vittorio',
                    customer_tele: '39******',
                },]
            }
        },
        methods: {
            addbutn: function(){
                this.addasideView = true;
            },
            editbutn: function(){
                this.editasideView = true;
            },
            confirm: function(){
                this.addasideView = false;
                this.editasideView = false;
            },
            cancle: function(){
                this.addasideView = false;
                this.editasideView = false;
            },
            myreturn: function(){
                this.$router.push('/Me');
            }
        },
        created() {

        },
        mounted() {

        }
    }
</script>
<style>
.pageall{
    margin: 0 auto;
    overflow: scroll;
    height: 700px;
}
.handle{
    width: 50%;
    float: left;
    padding: 10px 0px 10px 0px;
}
.AddAndEdit{
    height: 280px; 
    width: 390px;
}
.AddAndEditHead{
    height: 50px;
}
.AddAndEditHead h1{
    top:10px;
    position: relative; 
    font-size: 20px;
}
.AddAndEditButton{
    padding-top: 15px;
}
.Management{
    overflow: scroll;
    height: 410px;
    width: calc(100% - 7px);
    border: 1px solid black;
}
.myhead{
    width: 100%;
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
    padding-top: 6px;
}
.mybody1_box2_mt-button{
    height: 25px;
}
.Managementbut{
    padding-top: 10px;
}
</style>
