<template>
  <div class="joke">
    <headerPart @leftBtn='leftBtnEvent' @rightBtn='rightBtnEvent' :config='configData' :loading='loading'>
      <div slot='title' class='head_title'>笑话</div>
    </headerPart>

    <div class="Scroll_box" ref="scroll">
      <ul>
        <li v-for="(item, index) in jokeList">
          <div class="item">
            <h3>{{ index + 1 }} . {{ item.title.substring(0, 13) }}<span v-if="item.title.length > 13">...<span><img class="forward" src="../images/svg/forward.svg"/></h3>
            <p class="content">{{ item.summary }}</p>
            <p class="tag"><span v-for="i in item.keywords">{{ i }}</span></p>
            <div class="bottom">
              <div class="left">{{ item.source }}　{{ item.date }}</div>
              <div class="right">
                <img src="../images/svg/heart.svg"/>
                <span>{{ item.like }}</span>
                <img src="../images/svg/star.svg"/>
                <span>{{ item.up }}</span>
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
  import data from '../../joke.json';
  export default {
    components: {
      headerPart
    },
    created () {
      this.jokeList = data.result;
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
        jokeList: [],
        loading: false
      };
    },
    methods: {
      refresh () {

      },
      loadMore () {

      },
      leftBtnEvent () {
        this.$emit('sidebarMenu');
      },
      rightBtnEvent () {

      },
      productEvent () {

      }
    }
  };
</script>

<style lang="less" scoped>
  .joke {
    background: #f3f3f3;
    width: 100%;
    height: 100%;
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
          width: 100%;
          background: #fff;
          .item {
            width: 100%;
            box-sizing: border-box;
            padding: 10px;
            margin-bottom: 10px;
            h3 {
              line-height: 28px;
              height: 35px;
              font-size: 16px;
              .forward {
                width: 24px;
                float: right;
              }
            }
            p {
              &.content, &.tag {
                font-size: 14px;
                color: #444;
                text-indent: 30px;
                line-height: 25px;
              }
              &.tag {
                text-indent: 0;
                margin: 10px 0;
                span {
                  padding: 5px 8px 3px 8px;
                  border: 1px solid #888;
                  border-radius: 3px;
                  background: #fff;
                  margin-right: 10px;
                }
              }

            }
            .bottom {
              line-height: 20px;
              font-size: 14px;
              margin-top: 10px;
              height: 20px;
              .left {
                float: left;
                margin-right: 15px;
              }
              .right {
                float: right;
                img {
                  width: 20px;
                  height: 20px;
                  display: inline-block;
                  float: left;
                  margin-right: 1px;
                }
                span {
                  float: left;
                  font-size: 14px;
                  margin: 1px 6px 0 0;
                }
              }
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
