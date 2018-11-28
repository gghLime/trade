<template>
    <div class="pageall">
        <div>
            <div class="handle">
                <mt-button type="primary" @click="addbutn">{{ $t("staffliat.increasestafff") }}</mt-button>
            </div>
            <div class="handle">
                <mt-button type="primary" @click="editbutn">{{ $t("staffliat.editorialstaff") }}</mt-button>
            </div>
            <div class="Management">
                <div v-for= "(infor, index) in infors" :key="index" @click="showsta(index, infor)">
                    <div class="staffliatbody">
                        <div class="staffliatbody_box1" v-bind:class="{ active: index == stind}">
                            <span>{{infor.staff_num}}</span>
                        </div>
                    </div>
                    <div class="staffliatbody">
                        <div class="staffliatbody_box1" v-bind:class="{ active: index == stind}">
                            <span>{{infor.staff_name}}</span>
                        </div>
                    </div>
                    <div class="staffliatbody">
                        <div class="staffliatbody_box1" v-bind:class="{ active: index == stind}">
                            <span>{{infor.staff_tele}}</span>
                         </div>
                     </div>
                     <div class="staffliatbody">
                            <div class="staffliatbody_box2" v-bind:class="{ active: index == stind}">
                                <mt-button class="mybody1_box2_mt-button" type="default" @click="deletesta(index)">{{ $t("staffliat.deleteL") }}</mt-button>
                            </div>
                    </div>
                </div>
            </div>
            <div class="Managementbut">
                <mt-button class="clientListreturn" type="primary" @click="returnme">{{ $t("staffliat.thereturn") }}</mt-button>   
            </div>
        </div>
        <mt-popup v-model="addasideView" position="relative" popup-transition="popup-fade">
            <div class="AddAndEdit">
                <div class="AddAndEditHead">
                    <h1>{{ $t("staffliat.increasestafff") }}</h1>
                </div>
                <div>
                    <mt-field label="员工工号" placeholder="请输入员工工号" v-model="username"></mt-field>
                    <mt-field label="员工姓名" placeholder="请输入员工姓名" v-model="username"></mt-field>
                    <mt-field label="员工电话" placeholder="请输入员工电话" v-model="username"></mt-field>
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
                    <h1>{{ $t("staffliat.editorialstaff") }}</h1>
                </div>
                <div>
                    <mt-field label="员工工号" v-model="stafid"></mt-field>
                    <mt-field label="员工姓名" v-model="stafname"></mt-field>
                    <mt-field label="员工电话" v-model="staftele"></mt-field>
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
                stind: -1,
                staid: '',
                staname: '',
                statele: '',
                infors:[{
                    staff_num: '372423001',
                    staff_name: 'Vittorio',
                    staff_tele: '39******',
                },{
                    staff_num: '372423002',
                    staff_name: 'Vittorio',
                    staff_tele: '39******',
                },{
                    staff_num: '372423003',
                    staff_name: 'Vittorio',
                    staff_tele: '39******',
                },{
                    staff_num: '372423004',
                    staff_name: 'Vittorio',
                    staff_tele: '39******',
                },{
                    staff_num: '372423005',
                    staff_name: 'Vittorio',
                    staff_tele: '39******',
                },{
                    staff_num: '372423006',
                    staff_name: 'Vittorio',
                    staff_tele: '39******',
                },{
                    staff_num: '372423007',
                    staff_name: 'Vittorio',
                    staff_tele: '39******',
                },{
                    staff_num: '372423008',
                    staff_name: 'Vittorio',
                    staff_tele: '39******',
                },{
                    staff_num: '372423001',
                    staff_name: 'Vittorio',
                    staff_tele: '39******',
                },{
                    staff_num: '372423001',
                    staff_name: 'Vittorio',
                    staff_tele: '39******',
                },{
                    staff_num: '372423001',
                    staff_name: 'Vittorio',
                    staff_tele: '39******',
                },{
                    staff_num: '372423001',
                    staff_name: 'Vittorio',
                    staff_tele: '39******',
                },{
                    staff_num: '372423001',
                    staff_name: 'Vittorio',
                    staff_tele: '39******',
                },{
                    staff_num: '372423001',
                    staff_name: 'Vittorio',
                    staff_tele: '39******',
                },{
                    staff_num: '372423001',
                    staff_name: 'Vittorio',
                    staff_tele: '39******',
                },]
            }
        },
        methods: {
            addbutn: function(){
                this.addasideView = true;
            },
            editbutn: function(){
                if(this.stind == -1){
                    alert("请选择要编辑的员工");
                }else{
                    this.editasideView = true;
                    this.stafid = this.staid;
                    this.stafname = this.staname;
                    this.staftele = this.statele;
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
            showsta: function(index, infor){
                this.stind = index;
                this.staid = infor.customer_name;
                this.staname = infor.company_name;
                this.statele = infor.customer_tele;
            },
            deletesta: function(index){
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
