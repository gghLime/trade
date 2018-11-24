<template>
    <div>
        <div>
            <div class="handle">
                <mt-button type="default" @click="addbutn">增加员工</mt-button>
            </div>
            <div class="handle">
                <mt-button type="default" @click="editbutn">编辑员工</mt-button>
            </div>
            <div class="Management">
                <table border="1" cellspacing="0">
                    <tr>
                        <th>员工工号</th>
                        <th>员工姓名</th>
                        <th>员工电话</th>
                        <th></th>
                    </tr>
                    <tr v-for= "(infor, index) in infors" :key="index">
                        <td>{{infor.staff_num}}</td>
                        <td>{{infor.staff_name}}</td>
                        <td>{{infor.staff_tele}}</td>
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
                    <h1>增加员工</h1>
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
                    <h1>编辑员工</h1>
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
