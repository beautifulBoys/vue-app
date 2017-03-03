<template>
  <div class="baidu-main">
    <li-header @leftBtn='leftBtnEvent' @rightBtn='rightBtnEvent' :config='configData'>
      <div slot='title' class='head_title'>百度地图</div>
    </li-header>
    <div id="container"></div>
  </div>
</template>
<script>
  import headerPart from '../components/header_part.vue';
  export default {
    components: {
      'li-header': headerPart
    },
    data () {
      return {
        configData: {
          left: 'sidebar',
          right: false
        }
      };
    },
    methods: {
      leftBtnEvent () {
        this.$emit('sidebarMenu');
      },
      rightBtnEvent () {
      }
    },
    mounted () {
      var map = new BMap.Map('container');
      var point = new BMap.Point(123.493659, 41.814352);
      map.centerAndZoom(point, 15);
      var stCtrl = new BMap.PanoramaControl();
      stCtrl.setOffset(new BMap.Size(20, 20));
      map.addControl(stCtrl);
      var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL});
      map.addControl(top_right_navigation);// 缩放以及比例尺控件
      map.enableScrollWheelZoom(true);// 缩放
      map.enableDragging();   // 拖拽
      map.enableInertialDragging();   // 惯性拖拽

      var mapType2 = new BMap.MapTypeControl({anchor: BMAP_ANCHOR_TOP_LEFT});
      map.addControl(mapType2);          // 左上角，默认地图控件(地图显示类型)
      map.setCurrentCity("北京");        // 由于有3D图，需设置城市

    }
  };
</script>

<style lang="less" scoped>
  .baidu-main {
    width: 100%;
    height: 100%;
    .head_title {
      line-height: 55px;
      text-align: center;
      font-size: 16px;
    }
  }
</style>
<style>
  #container {
    width: 100%;
    height: calc(100% - 55px);
    top: 55px;
  }
</style>
