<template>
  <div class="sidBox">
    <div class="head">
      <div class="row" @click="toMyself">
        <div class="img">
          <img src="../images/user.png" :class="{gray: !onlineStatus}"/>
          <span :class="{online: onlineStatus, outline: !onlineStatus}"></span>
        </div>
        <span class="username">{{ mySelfInfo.name }}</span>
        <span class="where">{{ mySelfInfo.groupName }}</span>
      </div>
    </div>
    <ul class="menuList">
      <li v-for="(listItem, index) in menuList">
        <div :class="[{active: index == menuIndex}, {noActive: index != menuIndex}, listItem.css ? listItem.css : '']"
             @click="activeThis(index, listItem.link)">
          {{listItem.text}}
          <b class="sign float-right">{{listItem.msg}}</b>
        </div>
      </li>
    </ul>
    <div class="exit" @click="exitBtnClick">退出</div>
  </div>
</template>


<script>
  export default {
    name: 'sidbar',
    props: ['sidebarNum'],
    data () {
      return {
        menuList: [
          {id: 0, text: '首页', link: '/home', css: 'icon0', msg: '4'},
          {id: 1, text: '美图', link: '/picture', css: 'icon1', msg: '8'},
          {id: 2, text: '笑话', link: '/joke', css: 'icon2', msg: ''},
          {id: 3, text: '聊天', link: '/', css: 'icon3', msg: ''},
          {id: 4, text: '购物', link: '/shoping', css: 'icon4', msg: ''}
        ],
        menuIndex: 0,
        info: {},
        onlineStatus: true,
        mySelfInfo: {
          name: '哆啦A梦',
          groupName: '日本动漫产业园'
        }
      };
    },
    watch: {
      'sidebarNum' () {
        this.changeSidebarNum();
      }
    },
    methods: {
      activeThis (num, link) {
        this.$emit('sidebarMenu');
        this.menuIndex = num;
        this.$router.replace({path: link});
      },
      toMyself () {
        this.$emit('sidebarMenu');
        this.menuIndex = -1;
        this.$router.replace({path: '/'});
      },
      exitBtnClick () {

      },
      changeSidebarNum () {
        this.menuList[0].msg = this.sidebarNum.dclcount;
        this.menuList[2].msg = this.sidebarNum.yshcount;
        this.menuList[4].msg = this.sidebarNum.cgdcount;
        this.menuList[5].msg = this.sidebarNum.fhcount;
      },
      myRouteEvent (path) {
        var me = this;
        for (var i = 0; i < me.menuList.length; i++) {
          if (path === me.menuList[i].link) {
            me.menuIndex = me.menuList[i].id;
            break;
          }
        }
      }
    }
  };
</script>


<style lang="less" scoped>
  @import "../css/compatible";
  @import "../css/simple";

  .sidebar-icon (@src, @size) {
    background: url(@src) no-repeat 10% center;
    background-size: @size;
  }

  .icon0 {
    .sidebar-icon ('../images/svg/sidebar_home.svg', 22px);
  }

  .icon1 {
    .sidebar-icon ('../images/svg/sidebar_picture.svg', 20px);
  }

  .icon2 {
    .sidebar-icon ('../images/svg/sidebar_joke.svg', 22px);
  }

  .icon3 {
    .sidebar-icon ('../images/svg/sidebar_talk.svg', 18px);
  }

  .icon4 {
    .sidebar-icon ('../images/svg/sidebar_shoping.svg', 20px);
  }

  .icon5 {
    .sidebar-icon ('../images/svg/sidebar_home.svg', 20px);
  }

  .icon6 {
    .sidebar-icon ('../images/svg/sidebar_home.svg', 20px);
  }

  .icon7 {
    .sidebar-icon ('../images/svg/sidebar_home.svg', 20px);
  }

  .sidBox {
    width: 100%;
    height: 100%;
    background: #fff;
    .head {
      width: 100%;
      height: 150px;
      position: relative;
      .row {
        width: 100%;
        background: url(../images/in.png) no-repeat right center;
        position: absolute;
        bottom: 20px;
        background-size: 40px;
        &:active {
          background: #efefef url(../images/in.png) no-repeat right center;
          background-size: 40px;
        }
        .img {
          margin: 10px;
          position: relative;
          width: 55px;
          height: 55px;
          .gray {
            .filter-gray (100%);
          }
          img {
            width: 50px;
            height: 50px;
            border-radius: 40%;
            border: 2px solid @baseColor;
            box-shadow: 0 0 7px @baseColor;
          }
          .unline {
            border: 2px solid #777;
            box-shadow: 0 0 7px #666;
          }
          .online {
            background: url(../images/online.png) no-repeat center center;
            background-size: 20px;
            width: 18px;
            height: 18px;
            position: absolute;
            bottom: 1px;
            right: 1px;
          }
          .outline {
            background: url(../images/outline.png) no-repeat center center;
            background-size: 20px;
            width: 18px;
            height: 18px;
            position: absolute;
            bottom: 1px;
            right: 1px;
          }
        }
        .username {
          position: absolute;
          top: 15px;
          left: 75px;
          font-size: 15px;
        }
        .where {
          position: absolute;
          font-size: 13px;
          top: 40px;
          left: 75px;
          color: #888;
        }
      }
    }
    .sign {
      background: red;
      font-size: 12px;
      display: block;
      line-height: 17px;
      width: 17px;
      color: #fff;
      padding: 0;
      text-indent: 0;
      text-align: center;
      margin: 17px 20px 0 0;
      border-radius: 50%;
    }
    .menuList {
      width: 100%;
      padding: 0;
      margin: 0;
      li {
        list-style-type: none;
        text-decoration: none;
        width: 100%;
        height: 50px;
        margin: 0;
        font-size: 15px;
        div {
          line-height: 50px;
          width: 100%;
          color: #333;
          display: block;
          text-indent: 55px;
          border-bottom: 1px solid #e2f1f7;
        }
      }
      .active {
        color: @baseColor;
      }
      .noActive {
        opacity: 0.7;
      }
    }
    .exit {
      width: 100%;
      height: 50px;
      background: url(../images/svg/sidebar_exit.svg) no-repeat 33% center;
      background-size: 20px;
      position: absolute;
      bottom: 0;
      line-height: 50px;
      text-align: center;
      border-top: 1px solid #e6f3f4;
      &:active {
        background: #efefef url(../images/svg/sidebar_exit.svg) no-repeat 33% center;
        background-size: 20px;
      }
    }
  }

</style>
