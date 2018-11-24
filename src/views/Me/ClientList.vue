<template>
    <div>
        <div>
            <div class="handle">
                <mt-button type="default" @click="addbutn">增加客户</mt-button>
            </div>
            <div class="handle">
                <mt-button type="default" @click="editbutn">编辑客户</mt-button>
            </div>
            <div class="Management">
                <table border="1" cellspacing="0">
                    <tr>
                        <th>客户姓名</th>
                        <th>公司名字</th>
                        <th>客户电话</th>
                        <th></th>
                    </tr>
                    <tr v-for= "(infor, index) in infors" :key="index">
                        <td>{{infor.customer_name}}</td>
                        <td>{{infor.company_name}}</td>
                        <td>{{infor.customer_tele}}</td>
                        <td><mt-button type="default">删除</mt-button></td>
                    </tr>
                </table>
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
.handle{
    width: 50%;
    float: left;
    background-color: white;
    padding: 10px 0px 10px 0px;
}
.Management{
    overflow: scroll;
    height: 410px;
    width: calc(100% - 7px);
    padding-top: 15px;
}
.Management table{
    width: 100%;
    font-size: 20px;
}
.Management td{
    height: 35px;
}
.Managementbut{
    padding-top: 10px;
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
</style>
