<template>
    <div class="pageall">
        <div>
            <div class="handle">
                <mt-button type="primary" @click="addbutn">{{ $t("clientList.increasecustomer") }}</mt-button>
            </div>
            <div class="handle">
                <mt-button type="primary" @click="editbutn">{{ $t("clientList.editclient") }}</mt-button>
            </div>
            <div class="Management">
                <div v-for= "(infor, index) in infors" :key="index" @click="showcli(index, infor)">
                    <div class="staffliatbody">
                        <div class="staffliatbody_box1" v-bind:class="{ active: index == clind}">
                            <span>{{infor.customer_name}}</span>
                        </div>
                    </div>
                    <div class="staffliatbody">
                        <div class="staffliatbody_box1" v-bind:class="{ active: index == clind}">
                            <span>{{infor.company_name}}</span>
                        </div>
                    </div>
                    <div class="staffliatbody">
                        <div class="staffliatbody_box1" v-bind:class="{ active: index == clind}">
                            <span>{{infor.customer_tele}}</span>
                         </div>
                     </div>
                     <div class="staffliatbody">
                        <div class="staffliatbody_box2" v-bind:class="{ active: index == clind}">
                            <mt-button class="mybody1_box2_mt-button" type="default" @click="deletecli(index)">{{ $t("clientList.deleteL") }}</mt-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Managementbut">
                <mt-button class="clientListreturn" type="primary" @click="returnme">{{ $t("clientList.thereturn") }}</mt-button>    
            </div>
        </div>
        <mt-popup v-model="addasideView" position="relative" popup-transition="popup-fade">
            <div class="AddAndEdit">
                <div class="AddAndEditHead">
                    <h1>{{ $t("clientList.increasecustomer") }}</h1>
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
                    <h1>{{ $t("clientList.editclient") }}</h1>
                </div>
                <div>
                    <mt-field label="客户姓名" v-model="custname"></mt-field>
                    <mt-field label="公司名字" v-model="compname"></mt-field>
                    <mt-field label="客户电话" v-model="custtele"></mt-field>
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
                clind: -1,
                cusname: '',
                comname: '',
                custele: '',
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
                if(this.clind == -1){
                    alert("请选择要编辑的客户");
                }else{
                    this.editasideView = true;
                    this.custname = this.cusname;
                    this.compname = this.comname;
                    this.custtele = this.custele;
                }
            },
            confirm: function(){
                this.addasideView = false;
                this.editasideView = false;
            },
            cancle: function(){
                this.addasideView = false;
                this.editasideView = false;
            },
            returnme: function(){
                this.$router.push('/Me');
            },
            showcli: function(index, infor){
                this.clind = index;
                this.cusname = infor.customer_name;
                this.comname = infor.company_name;
                this.custele = infor.customer_tele;
            },
            deletecli: function(index){
                this.infors.splice(index,1);
            },
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
.staffliatbody{
    float: left; 
    width:25%; 
    border-bottom: 1px solid black; 
    height: 35px;
}
.staffliatbody_box1{
    border-right: 1px solid black; 
    height: 100%; 
}
.staffliatbody_box1 span{
    top: 10px;
    position: relative;
}
.staffliatbody_box2{
    padding-top: 6px;
    height: 29px;
}
.mybody1_box2_mt-button{
    height: 25px;
}
.Managementbut{
    padding-top: 10px;
}
.clientListreturn{
    width: 300px;
    border-radius: 3em;
}
.active {
    background: #87CEEB !important;
}
</style>
