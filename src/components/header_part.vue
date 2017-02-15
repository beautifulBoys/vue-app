<template>
  <div class="header">
    <div class="left" @click="leftHandleEvent" v-show="config.left">
      <img src="../images/user.png" v-show="config.left === 'sidebar'"/>
      <img src="../images/goback.png" v-show="config.left === 'goback'"/>
    </div>
    <div class="center">
      <slot name="title"></slot>
    </div>
    <div class="right" @click="rightHandleEvent" v-show="config.right">{{config.right}}</div>
    <div class="wait" v-show="loading">
      <div class="loading">
        <div class="main2"></div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'headerPart',
    props: ['title', 'config', 'loading'],
    data () {
      return {};
    },
    methods: {
      leftHandleEvent: function () {
        this.$emit('leftBtn');
      },
      rightHandleEvent: function () {
        this.$emit('rightBtn');
      }
    }
  };
</script>

<style lang="less" scoped>
  @import '../css/simple';

  .header {
    width: 100%;
    height: 55px;
    background: @baseColor;
    color: #fff;
    position: fixed;
    z-index: 1000;
  }

  .header .left {
    width: 15%;
    height: 55px;
    float: left;
    text-align: center;
    line-height: 55px;
    position: relative;
  }

  .header .left img {
    width: 60%;
    height: 60%;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  .header .center {
    width: 70%;
    height: 55px;
    float: left;
  }

  .header .right {
    width: 15%;
    height: 55px;
    float: left;
    text-align: center;
    line-height: 55px;
  }

  .header .wait {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }

  .header .loading {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .header .loading .main {
    width: 40px;
    height: 40px;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: inline-block;
    padding: 0px;
    border-radius: 100%;
    border: 5px solid;
    border-top-color: @baseColor;
    border-bottom-color: #fff;
    border-left-color: #fff;
    border-right-color: @baseColor;
    -webkit-animation: loader4 1s ease-in-out infinite;
    animation: waitAn 1s ease-in-out infinite;
  }

  @keyframes waitAn {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .header .loading .main2 {
    position: absolute;
    overflow: hidden;
    display: inline-block;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    padding: 0px;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    font-size: 35px;
    text-indent: -9999em;
    -webkit-animation: load 1.7s infinite ease;
    animation: load 1.7s infinite ease;
    z-index: 9999;
  }

  @keyframes load {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      box-shadow: -0.11em -0.83em 0 -0.4em @baseColor, -0.11em -0.83em 0 -0.42em @baseColor, -0.11em -0.83em 0 -0.44em @baseColor, -0.11em -0.83em 0 -0.46em @baseColor, -0.11em -0.83em 0 -0.477em @baseColor;
    }
    5%,
    95% {
      box-shadow: -0.11em -0.83em 0 -0.4em @baseColor, -0.11em -0.83em 0 -0.42em @baseColor, -0.11em -0.83em 0 -0.44em @baseColor, -0.11em -0.83em 0 -0.46em @baseColor, -0.11em -0.83em 0 -0.477em @baseColor;
    }
    30% {
      box-shadow: -0.11em -0.83em 0 -0.4em @baseColor, -0.51em -0.66em 0 -0.42em @baseColor, -0.75em -0.36em 0 -0.44em @baseColor, -0.83em -0.03em 0 -0.46em @baseColor, -0.81em 0.21em 0 -0.477em @baseColor;
    }
    55% {
      box-shadow: -0.11em -0.83em 0 -0.4em @baseColor, -0.29em -0.78em 0 -0.42em @baseColor, -0.43em -0.72em 0 -0.44em @baseColor, -0.52em -0.65em 0 -0.46em @baseColor, -0.57em -0.61em 0 -0.477em @baseColor;
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
      box-shadow: -0.11em -0.83em 0 -0.4em @baseColor, -0.11em -0.83em 0 -0.42em @baseColor, -0.11em -0.83em 0 -0.44em @baseColor, -0.11em -0.83em 0 -0.46em @baseColor, -0.11em -0.83em 0 -0.477em @baseColor;
    }
  }
</style>
