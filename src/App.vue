<template>
  <div class="viewBox">
    <div class="body" :class="{bodyStart: sideOpen, bodyEnd: !sideOpen}">
      <transition :name="body">
        <keep-alive>
          <router-view class="position"
                       @sidebarMenu="sidebarOpenEvent"
                       :onlineStatus="onlineStatus"
                       @switchCheckStatus="switchStatusEvent"
                       keep-alive>
          </router-view>
        </keep-alive>
      </transition>
    </div><!--主体部分-->
    <transition name="screen">
      <div class="screen"
           @click="open"
           v-show="sideOpen">
      </div><!--遮罩-->
    </transition>
    <div class="sidebar" :class="{ sidebarOpen: sideOpen, sidebarClose: !sideOpen }">
      <sidebar ref="sidebar"
               @sidebarMenu="sidebarOpenEvent"
               :onlineStatus="onlineStatus"
               :sidebarNum="sidebar">
      </sidebar>
    </div><!--侧边栏-->
  </div>
</template>
<script>
  import sidebar from './components/sidebar.vue';
  export default {
    name: 'app',
    components: {sidebar},
    data () {
      return {
        sideOpen: false,
        onlineStatus: false,
        body: '122',
        sidebar: {},
        myInfo: {}
      };
    },
    methods: {
      open: function () {
        this.sideOpen = !this.sideOpen;
      },
      sidebarOpenEvent: function () {
        this.sideOpen = !this.sideOpen;
        this.onlineStatus = false;
      },
      switchStatusEvent: function (boolean) {
        console.log('switchStatusEvent' + boolean);
        this.onlineStatus = boolean;
      }
    }
  };
</script>

<style lang="less" scoped>
  .viewBox {
    height: 100%;
    width: 100%;
    .position {
      position: absolute;
      transition: all 0.3s ease;
      width: 100%;
      height: 100%;
    }
  }
  @import "./css/animate.css";
  @import "./css/base.css";
</style>
