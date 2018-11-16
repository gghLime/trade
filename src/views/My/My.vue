<template>
  <div>
    <div class="theblock"></div>
    <div class="mine">
      <div class="headimg">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542088441937&di=0a66a9e06da6e9501f4c92f6154e986f&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201410%2F08%2F20141008161842_taMnu.thumb.700_0.jpeg"/>
      </div>
      <div class="information">
        <p id = "Name">{{TheName}}    {{TheJob}}    {{TheCompany}}</p>
      </div>
    </div>
    <div class="theblock"></div>
    <div class="management">
      <div class="TheList" id="customer" @click="DivIsClick($event)">
        <span>123</span>
      </div>
      <div class="TheList">
        <span>123</span>
      </div>
      <div class="TheList">
        <span>123</span>
      </div>
      <div class="TheList">
        <span>123</span>
      </div>
      <div class="TheList">
        <span>123</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Me",
      data(){
        return{
          TheName: '李寻欢',
          TheJob: '企业主',
          TheCompany: '逍遥派有限公司',
        }
      },
      methods:{
        DivIsClick(e){
          e.target.style.backgroundColor =  "red";
        }
      },

    }
</script>

<style scoped>
  .mine{
    margin:0 auto;
    width: 100%;
    height: 230px;
    border: 1px solid black;
    background-color: white;
    text-align: center;
  }
  .theblock{
    margin:0 auto;
    width: 100%;
    height: 10px;
  }
  .management{
    margin:0 auto;
    width: 100%;
    height: 220px;
    border: 1px solid black;
    text-align: center;
    background-color: white;
  }
  .headimg{
    top: 15%;
    width: 70%;
    height: 50%;
    left:15%;
    position: relative;
    border-radius: 50%;
  }
  .headimg img{
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
  .information{
    top: 18%;
    width: 70%;
    height: 13%;
    left:15%;
    position: relative;
  }
  .information p{
    font-size: 15px;
    font-weight: bold;
  }
  .TheList{
    width: 100%;
    height: 20%;
    position: relative;
  }
  .TheList span{
    top: 10px;
    position: relative;
  }
</style>
