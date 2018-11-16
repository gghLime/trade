<template>
  <div class="login_page">
    <div class="login_pic">
      <img src="../assets/logo.png"/>
    </div>
    <div class="login_name">
      <input type="text" class="name" name="name" placeholder="用户名">
    </div>

    <div style="width: 100%; height: 30px"></div>
    <div class="login_name">
      <input type="password" class="name" name="pass" placeholder="密码">
    </div>

    <div style="width: 100%; height: 40px"></div>
    <div class="login_button">
      <mt-button size="large" class="TheLogin" @click="login">登录</mt-button>
    </div>
  </div>
</template>

<script>
  // eslint-disable-next-line
  // @ is an alias to /src
  /* eslint-disable */
  export default {
    name: '',
    components: {
    },
    data() {
      return {

      }
    },
    methods: {
    // 登录
            login() {
                this.$router.push('/Goods');
                //alert("rgvuyergfiyer");
                // this.$req.post('login')
                //     .then(res => {
                //         console.log(res);
                //         // if (res.error_code === 102) {
                //         //     let token = res.data.token;
                //         //     sessionStorage.setItem('x-token', token);
                //         //     this.showChoose = true;
                //         //     this.getList()
                //         // }
                //     })
            },
      editMaterial: function() {
        this.$router.push('/MaterialEdit');
      }
    },
    created() {
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/themes.scss";
  .login_pic{
    width: 100%;
    height: 230px;
  }
  .login_button {
    width: 250px;
    margin: 0 auto;
  }
  .TheLogin{
    background-color: #696969;
    border-radius: 50px;
    color: #DCE0E6;
  }
  .name {
    margin: 0 auto;
    height: 30px;
    width: 250px;
    border-radius: 5px;
  }
</style>
