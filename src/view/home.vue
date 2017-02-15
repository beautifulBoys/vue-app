<template>
  <div class='home-main'>
    <div class="banner">
      <img src="../images/banner.png"/>
    </div>
    <div class="home-body">
      <div class="row">
        <div class="a"></div>
        <div class="a"></div>
        <div class="a"></div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'home',
    data () {
      return {};
    },
    methods: {}
  };
</script>

<style lang="less" scoped>
  .home-main {
    width: 100%;
    height: 100%;
    background: #fff;
    font-size: 0;
    .banner {
      img {
        width: 100%;
      }
    }
    .home-body {
      width: 100%;
      height: 400px;
      background: red;
      font-size: 20px;
      color: #fff;
      padding: 10px;
      box-sizing: border-box;
      .row {
        height: 100px;
        width: 100%;
        .a {
          width: 30%;
          box-sizing: border-box;
          display: inline-block;
          height: 100%;
          margin-right: 2%;
          background: green;
        }
      }
    }
  }
</style>

