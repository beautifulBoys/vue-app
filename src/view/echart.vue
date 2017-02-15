<template>
  <div class='main'>
    <headerPart @leftBtn='leftBtnEvent' @rightBtn='rightBtnEvent' :config='configData' :loading='loading'>
      <div slot='title' class='header-title'>趣味</div>
    </headerPart>
    <charts class="chart-box" :chartData="chartData"></charts>
    <charts class="chart-box" :chartData="chartData1"></charts>
    <button @click="changeEvent">change</button>
  </div>
</template>


<script>
  import headerPart from '../components/header_part.vue';
  import charts from '../components/echart.vue';
  export default {
    name: 'home',
    components: {headerPart, charts},
    data () {
      return {
        isAskPrice: true,
        isSort: false,
        loading: false,
        scroll_height: '',
        scrollTop: '90',
        configData: {
          left: 'sidebar',
          right: false
        },
        chartData: {},
        chartData1: {}
      };
    },
    mounted () {
      var me = this;
      setTimeout(function () {
        me.changeEvent();
        me.chartData = {
          backgroundColor: 'rgba(0,0,0,0)',
          grid: {
            left: '4%',
            right: '6%',
            bottom: '6%',
            top: '20%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六'],
            axisLine: {lineStyle: {color: '#000'}}
          },
          yAxis: {
            type: 'value',
            splitLine: {
              show: false
            },
            axisLine: {lineStyle: {color: '#000'}}
          },
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: [1500, 3832, 1201, 2134, 5390, 3300],
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: '#000',
                    width: 1
                  },
                  color: '#000',
                  label: {show: true}
                }
              }
            }
          ]
        };
      }, 3000);
    },
    methods: {
      leftBtnEvent: function () {
        this.$emit('sidebarMenu');
      },
      rightBtnEvent: function () {
      },
      AskPriceEvent: function (Boolean) {
        if (Boolean) {
          this.isAskPrice = true;
        } else {
          this.isAskPrice = false;
        }
      },
      sortEvent: function () {
        this.isSort = !this.isSort;
      },
      changeEvent () {
        this.chartData1 = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            x: 'left'
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              selectedMode: 'single',
              radius: [0, '30%'],

              label: {
                normal: {
                  position: 'inner'
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 335, name: '直达'},
                {value: 679, name: '营销广告'},
                {value: 1548, name: '搜索引擎'}
              ]
            },
            {
              name: '访问来源',
              type: 'pie',
              radius: ['40%', '55%'],

              data: [
                {value: 335, name: '直达'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1048, name: '百度'},
                {value: 251, name: '谷歌'},
                {value: 147, name: '必应'},
                {value: 102, name: '其他'}
              ]
            }
          ]
        };
//        this.chartData = {
//          backgroundColor: 'red',
//          grid: {
//            left: '4%',
//            right: '6%',
//            bottom: '6%',
//            top: '20%',
//            containLabel: true
//          },
//          xAxis: {
//            type: 'category',
//            boundaryGap: false,
//            data: ['周一', '周二', '周三', '周四', '周五', '周六'],
//            axisLine: {lineStyle: {color: '#fff'}}
//          },
//          yAxis: {
//            type: 'value',
//            splitLine: {
//              show: false
//            },
//            axisLine: {lineStyle: {color: '#fff'}}
//          },
//          series: [
//            {
//              name: '邮件营销',
//              type: 'line',
//              stack: '总量',
//              data: [4500, 2832, 1201, 4134, 2390, 1300],
//              itemStyle: {
//                normal: {
//                  lineStyle: {
//                    color: '#fff',
//                    width: 1
//                  },
//                  color: '#fff',
//                  label: {show: true}
//                }
//              }
//            }
//          ]
//        };
      }
    }
  };
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .main {
    width: 100%;
    height: 100%;
    .chart-box {
      height: 200px;
      width: 100%;
      color: #fff;
      margin: 100px auto 0 auto;
    }
    .title {
      height: 100%;
      text-align: center;
      font-size: 16px;
      .box {
        width: 140px;
        height: 100%;
        margin: 0 auto;
        overflow: hidden;
        .button {
          height: 100%;
          width: 70px;
          line-height: 55px;
          padding: 0;
          margin: 0;
          outline: none;
          border: none;
          font-family: "Microsoft YaHei";
          color: #d6d6d6;
          font-size: 16px;
          font-weight: normal;
        }
        .btn-right {
          float: right;
        }
        .btn-left {
          float: left;
        }
        .active {
          color: #fff;
          text-shadow: 0 0 3px #fff;
        }
      }
    }
  }

  .header-title {
    line-height: 55px;
    font-size: 18px;
    text-align: center;
  }

  @import '../css/base.css';
</style>

