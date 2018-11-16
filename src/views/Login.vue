<template>
    
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    /* eslint-disable */
    export default {
        name: 'home',
        components: {},
        data: function () {
            return {
                account: '',
                password: '',
                showChoose: false,
                list: []
            }
        },
        methods: {
            // 登录
            // login() {
            //     this.$req.post('', {
            //         account: this.account,
            //         password: this.password
            //     })
            //         .then(res => {
            //             // console.log(res);
            //             if (res.error_code === 102) {
            //                 let token = res.data.token;
            //                 sessionStorage.setItem('x-token', token);
            //                 this.showChoose = true;
            //                 this.getList()
            //             }
            //         })
            // },
        },
        created() {
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/styles/themes.scss";
    
</style>