<template>
  <div class='home-main'>
    <v-header @leftBtn='leftBtnEvent' @rightBtn='rightBtnEvent' :config='configData'>
      <div slot='title' class='head_title'>图片</div>
    </v-header>
    <div class="home-body">
      <div class="row">
        <div class="item" v-for="(item, index) in menuList">
          <img :src="item.src" @click="clickEvent(index)"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import headerPart from '../components/header_part';
  import data from '../../data';
  export default {
    name: 'home',
    components: {
      'v-header': headerPart
    },
    created () {
      this.menuList = data.home;
    },
    data () {
      return {
        configData: {
          left: 'menu',
          right: false
        },
        menuList: []
      };
    },
    methods: {
      rightBtnEvent () {
      },
      leftBtnEvent () {
        this.$emit('sidebarMenu');
      },
      clickEvent (num) {
        if (num === 0) {
          this.$router.push({path: '/baidu'});
        } else if (num === 1) {
          this.$router.push({path: '/travel'});
        } else if (num === 2) {
          this.$router.push({path: '/joke'});
        } else if (num === 3) {
          this.$router.push({path: '/picture'});
        } else if (num === 4) {
          this.$router.push({path: '/shoping'});
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .home-main {
    width: 100%;
    height: 100%;
    background: #fff;
    font-size: 0;
    .home-body {
      width: 100%;
      font-size: 20px;
      margin: 55px 0 0 0;
      color: #fff;
      padding: 10px 5px;
      box-sizing: border-box;
      .row {
        height: 100px;
        width: 100%;
        font-size: 0;
        .item {
          width: 47%;
          box-sizing: border-box;
          margin: 5px 1.5%;
          display: inline-block;
          border-radius: 5px;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
      }
    }
    .head_title {
      line-height: 55px;
      text-align: center;
      color: #fff;
      font-size: 16px;
    }
  }
</style>

