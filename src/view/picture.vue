<template>
  <div class="picture-box">
    <transition name="fade">
      <div class="picture-screen" @click="closeImgShowEvent" v-if="showImgState">
        <div class="img-box"><img :src="showImg"/></div>
      </div>
    </transition>
    <headerPart @leftBtn='leftBtnEvent' @rightBtn='rightBtnEvent' :config='configData' :loading='loading'>
      <div slot='title' class='head_title'>图片</div>
    </headerPart>
    <div class="menu">
      <span v-for="(item, index) in menuList" @click="checkMenuEvent(index)" :class="{color: menuIndex === index}">{{ item.text }}</span>
    </div>
    <div class="Scroll_box" ref="scroll" v-show="menuIndex === 0">
      <ul>
        <li v-for="(img, index) in fengjingList" @click="productEvent(img)" :class="{left: index % 2 === 0, right: index % 2 === 1}">
          <div class="img">
            <img v-lazy="img.src"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="Scroll_box" ref="scroll1" v-show="menuIndex === 1">
      <ul>
        <li v-for="(img, index) in xiaohuaList" @click="productEvent(img)" :class="{left: index % 2 === 0, right: index % 2 === 1}">
          <div class="img">
            <img v-lazy="img.src"/>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll';
  import headerPart from '../components/header_part.vue';
  import data from '../../picture.json';
  export default {
    components: {
      headerPart
    },
    data () {
      return {
        configData: {
          left: 'sidebar',
          right: false
        },
        loading: false,
        fengjingList: [],
        xiaohuaList: [],
        menuList: [{id: 0, text: '风景'}, {id: 1, text: '美女'}],
        menuIndex: 0,
        index: 1,
        showImg: '',
        showImgState: false
      };
    },
    created () {
      this.fengjingList = data.fengjing;
      this.xiaohuaList = data.xiaohua;
    },
    mounted () {
      /* eslint-disable no-new */
      new BScroll(this.$refs.scroll, {
        click: true
      });
    },
    methods: {
      productEvent (img) {
        this.showImg = img.src;
        this.showImgState = true;
      },
      leftBtnEvent () {
        this.$emit('sidebarMenu');
      },
      rightBtnEvent () {
      },
      closeImgShowEvent () {
        this.showImgState = false;
      },
      checkMenuEvent (index) {
        if (this.menuIndex !== index) {
          this.menuIndex = index;
          /* eslint-disable no-new */
          if (index === 1) {
            this.$nextTick(function () {
              new BScroll(this.$refs.scroll1, {
                click: true
              });
            });
          } else if (index === 0) {
            this.$nextTick(function () {
              new BScroll(this.$refs.scroll, {
                click: true
              });
            });
          }
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .wh100 {
    width: 100%;
    height: 100%;
  }

  .picture-box {
    .wh100;
    .picture-screen {
      &.fade-enter-active, &.fade-leave-active {
        transition: opacity .5s
      }
      &.fade-enter, &.fade-leave-to {
        opacity: 0
      }
      .wh100;
      position: fixed;
      z-index: 2000;
      background: rgba(0, 0, 0, 0.7);
      .img-box {
        .wh100;
        position: relative;
        img {
          position: absolute;
          margin: auto;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          width: 100%;
        }
      }
    }
    .head_title {
      text-align: center;
      line-height: 55px;
      font-size: 18px;
    }
    .menu {
      width: 100%;
      height: 40px;
      background: #fff;
      border-bottom: 1px solid #eee;
      position: fixed;
      top: 55px;
      z-index: 100;
      span {
        line-height: 40px;
        font-size: 14px;
        color: #888;
        padding: 0 15px;
        &.color {
          color: #0aaff4;

        }
      }
    }
    .Scroll_box {
      width: 100%;
      margin-top: 95px;
      box-sizing: border-box;
      ul {
        margin: 0;
        padding: 0;
        width: 100%;
        font-size: 0;
        li {
          width: 50%;
          display: inline-block;
          overflow: hidden;
          border: 1px solid #fff;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          &.left {
            border-left: none;
          }
          &.right {
            border-right: none;
          }
          .img {
            width: 100%;
            height: 140px;
            position: relative;
            img {
              width: 140%;
              position: absolute;
              margin: auto 0 auto -70%;
              left: 50%;
              top: 0;
              bottom: 0;
            }
          }
        }
      }
    }
  }


</style>

<style scoped>
  .Scroll_box {
    height: calc(100% - 95px);
  }
</style>
