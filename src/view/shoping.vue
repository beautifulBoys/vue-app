<template>
  <div>
    <headerPart @leftBtn='leftBtnEvent' @rightBtn='rightBtnEvent' :config='configData' :loading='loading'>
      <div slot='title' class='head_title'>趣味</div>
    </headerPart>

    <div class="Scroll_box" ref="scroll">
      <ul>
        <li v-for="(good, index) in newHomeGoodsList">
          <div class="item" :class="{item1: index % 2 === 0, item2: index % 2 !== 0}">
            <div>
              <div class="top">
                <img v-lazy="good.imgSrc"/>
              </div>
              <div class="bottom">
                <span class="title">{{ good.title }}</span>
                <span class="desc">{{ good.desc }}</span>
                <span class="price">￥{{ good.price }}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import headerPart from '../components/header_part.vue';
  import BScroll from 'better-scroll';
  import data from '../../data.json';
  export default {
    components: {
      headerPart
    },
    created () {
      this.newHomeGoodsList = data.newHomeGoods.newHomeGoodsList;
    },
    mounted () {
      /* eslint-disable no-new */
      new BScroll(this.$refs.scroll, {
        click: true
      });
    },
    data () {
      return {
        configData: {
          left: 'sidebar',
          right: false
        },
        loading: false
      };
    },
    methods: {
      refresh () {},
      loadMore () {},
      leftBtnEvent () {
        this.$emit('sidebarMenu');
      },
      rightBtnEvent () {},
      productEvent () {}
    }
  };
</script>

<style lang="less" scoped>
  .head_title {
    text-align: center;
    line-height: 55px;
    font-size: 18px;
  }

  .Scroll_box {
    width: 100%;
    margin-top: 55px;
    box-sizing: border-box;
    ul {
      li {
        width: 50%;
        height: auto;
        display: inline-block;
        .item {
          &.item1 {
            border-right: 1px solid #fff;
          }
          &.item2 {
            border-left: 1px solid #fff;
          }
          .top {
            position: relative;
            width: 100%;
            height: 0;
            padding-top: 100%;
            img {
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
            }
          }
          .bottom {
            padding: 5px 10px;
            box-sizing: border-box;
            background: #fff;
            .title {
              width: 100%;
              display: block;
              color: #333;
              line-height: 25px;
            }
            .desc {
              width: 100%;
              display: block;
              color: #666;
              font-size: 12px;
            }
            .price {
              width: 100%;
              display: block;
              font-size: 14px;
              color: #ff601e;
              line-height: 20px;
            }
          }
        }
      }
    }

  }


</style>
<style scoped>
  .Scroll_box {
    height: calc(100% - 55px);
  }
</style>
