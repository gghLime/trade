<template>
  <div>Good</div>
</template>

<script>
  // eslint-disable-next-line
  // @ is an alias to /src
  /* eslint-disable */
    export default {
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
</style>
