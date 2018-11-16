<template>
    <div>
        <!--<div class="public_choose">-->
            <!--<el-select v-model="value" placeholder="请选择">-->
                <!--<el-option-->
                    <!--v-for="item in options"-->
                    <!--:key="item.value"-->
                    <!--:label="item.label"-->
                    <!--:value="item.value">-->
                <!--</el-option>-->
            <!--</el-select>-->
        <!--</div>-->
        <div @click="logOut" class="logout">退出</div>
    </div>
</template>

<script>
    // @ is an alias to /src
    /* eslint-disable */
    export default {
        name: '',
        components: {},
        data() {
        return {
          options: [{
            value: '1',
            label: '小资生活公众号'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            value: ''
          }
        },
        methods: {
            logOut() {
                sessionStorage.removeItem('x-token');
                this.$router.push('/')
            }
        },
        created() {
        },
        mounted() {
        }
    }
</script>

<style>
.public_choose {
    float: right;
    margin-right: 216px;
}
    .logout{
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
        border: 1px solid #313769;
        color: #313769;
        cursor: pointer;
        border-radius: 4px;
        float: right;
        margin-top: 15px;
    }
</style>