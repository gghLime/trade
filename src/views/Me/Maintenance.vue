<template>
    <div>
        <div>
            <h1>个人信息维护</h1>
        </div>
        <div>
            <mt-field label="姓名" v-model="username"></mt-field>
            <mt-field label="微信" v-model="weixin"></mt-field>
            <mt-field label="公司" v-model="company"></mt-field>
            <mt-field label="电话" v-model="phone"></mt-field>
        </div>
        <div>
            <mt-button type="default" @click="thetrue">确认</mt-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data() {
            return {
                business_owner_name: '李寻欢',
                business_owner_wechat: '123',
                company_name: 'weq',
                business_owner_tele: '23*****',
            }
        },
        methods: {
            thetrue: function(){
                this.$router.push('/Me');
            }
        },
        created() {
            this.username = this.business_owner_name;
            this.weixin = this.business_owner_wechat;
            this.company = this.company_name;
            this.phone = this.business_owner_tele;
        },
        mounted() {

        }
    }
</script>
<style>

</style>
