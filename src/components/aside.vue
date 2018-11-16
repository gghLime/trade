<template>
    <div>
        <img :src="avatar"  class="logo"/>

        <div class="item" @click="choose(1)" @mouseenter="enter(1)" @mouseleave="leave(1)" :class="{over: isOver==1 ,choose: isChoose==1}">
            <img :src="home_page"  class="home_page_icon"/>
            <span class="home_page_font">首页</span>
        </div>

        <div class="item" @click="choose(2)" @mouseenter="enter(2)" @mouseleave="leave(2)" :class="{over: isOver==2 ,choose: isChoose==2}">
            <img :src="fans_team"  class="home_page_icon"/>
            <span class="other_font">粉丝分组</span>
        </div>

        <div class="item" @click="choose(3)" @mouseenter="enter(3)" @mouseleave="leave(3)" :class="{over: isOver==3 ,choose: isChoose==3}">
            <img :src="distribute"  class="home_page_icon"/>
            <span class="other_font">超级分发</span>
        </div>
        <div class="item" @click="choose(4)" @mouseenter="enter(4)" @mouseleave="leave(4)" :class="{over: isOver==4 ,choose: isChoose==4}">
            <img :src="tag"  class="home_page_icon"/>
            <span class="other_font">智能标签</span>
        </div>
        <div class="item" @click="choose(5)" @mouseenter="enter(5)" @mouseleave="leave(5)" :class="{over: isOver==5 ,choose: isChoose==5}">
            <img :src="material"  class="home_page_icon"/>
            <span class="other_font">素材仓库</span>
        </div>
        <div class="item" v-if="false" @click="choose(6)" @mouseenter="enter(6)" @mouseleave="leave(6)" :class="{over: isOver==6 ,choose: isChoose==6}">
            <img :src="other"  class="home_page_icon"/>
            <span class="other_font">其他功能</span>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    /* eslint-disable */
    import avatar from '@/assets/logo.jpg'
    import home_page from '@/assets/home_page.png'
    import fans_team from '@/assets/fans_team.png'
    import distribute from '@/assets/distribute.png'
    import material from '@/assets/material.png'
    import other from '@/assets/other.png'
    import tag from '@/assets/tag.png'

    
    export default {
        name: '',
        components: {},
        data: function () {
            return {
                avatar: avatar,
                home_page: home_page,
                fans_team: fans_team,
                distribute: distribute,
                material: material,
                other: other,
                tag: tag,

                isChoose: 1,
                isOver: -1
            }
        },
        methods: {
            enter: function(index){
                if(this.isChoose != index) {
                    this.isOver = index;
                }
            },
            leave: function(index){
                if(this.isChoose != index) {
                    this.isOver = -1;
                }
            },
            choose: function(index) {
                this.isOver = -1;
                this.isChoose = index;
                if(index == 1) {
                    this.$router.push('/Index');
                }else if(index == 2) {
                    this.$router.push('/Fans');
                }else if(index == 3) {
                    this.$router.push('/Distribute');
                }else if(index == 4) {
                    this.$router.push('/Tag');
                }else if(index == 5) {
                    this.$router.push('/Material');
                }else if(index == 6) {
                    this.$router.push('/Other');
                }
            }
        },
        created() {
            let rou = this.$route.path;
            if(rou == '/Index'){
                this.isChoose = 1;
            }else if(rou == '/Fans') {
                this.isChoose = 2;
            }else if(rou == '/Distribute') {
                this.isChoose = 3;
            }else if(rou == '/Tag') {
                this.isChoose = 4;
            }else if(rou == '/Material') {
                this.isChoose = 5;
            }else if(rou == '/Other') {
                this.isChoose = 6;
            }
        },
        mounted() {
        }
    }
</script>
}
<style lang="scss" scoped>
    @import '@/styles/themes.scss';

    .logo {
        position: relative;
        height: 50px;
        width: 144px;
        margin: 15px 28px 17px 28px;
    }
    .item {
        position: relative;
        width: 160px;
        height: 40px;
        margin: 13px 20px 0 20px;
        text-align: center;
        line-height: 40px;
        font-size: 14px;
        color: #FFF;
        cursor: pointer;
    }
    .choose {
        background-color: $themes-Choose;
        border-radius: 100px;
    }
    .over {
        background:rgba(37,205,218,0.08);
        border-radius: 100px;
    }
    .home_page_icon {
        position: absolute;
        width: 20px;
        height: 20px;
        margin: 9px 114px 11px 26px;
    }
    .home_page_font {
        font-size: 14px;
        width: 30px;
        height: 19px;
        margin: 11px 68px 10px 62px;
    }
    .other_font {
        font-size: 14px;
        width: 59px;
        height: 19px;
        margin: 10px 39px 11px 62px;
    }
</style>