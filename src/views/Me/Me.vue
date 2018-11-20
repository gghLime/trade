<template>
  <div style="overscoll: auto">
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
      <ul id="mana">
        <li v-for='(manage, index) in manages' v-bind:class="{ active: index == ind}" :key="index" @click="toggle(index)">
          <span v-if='manage.show'>{{manage.content}}</span>
        </li>
      </ul>
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
          ind: -1,
          manages:[{
            content: '客户管理',
            show:true
          },{
            content: '员工管理',
            show:true
          },{
            content: '数据备份',
            show:true
          },{
            content: '信息维护',
            show:true
          },{
            content: '软件管理',
            show:true
          }]
        }
      },
      methods:{
        toggle:function(index){
          // manage.show = !manage.show;
          this.ind = index;
        }
      }
    }
</script>

<style scoped>
  .mine{
    margin:0 auto;
    width: 98%;
    height: 260px;
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
    width: 98%;
    height: 250px;
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
    height: 150px;
    width: 150px;
    border-radius: 50%;
  }
  .information{
    top: 70px;
    width: 70%;
    height: 13%;
    left:15%;
    position: relative;
  }
  .information p{
    font-size: 15px;
    font-weight: bold;
  }
  .management ul{
    margin:0px;
    padding:0px;
    width: calc(100% - 40px);
    text-align: left;
  }
  .management li{
    position: relative;
    height: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px;
  }
  .management span{
    font-size: 20px;
  }
  .active {
    background: #87CEEB !important;
  }
</style>
