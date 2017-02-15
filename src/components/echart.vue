<template>
  <div ref="chart"></div>
</template>
<script>
  var charts = require('echarts');
  export default {
    props: ['chartData'],
    components: {},
    data () {
      return {
        chart: {},
        chartDataObj: {}
      };
    },
    mounted () {
      this.chart = charts.init(this.$refs.chart);
      this.startLoading();
    },
    watch: {
      chartData () {
        console.log('值变化了');
        this.closeLoading();
        this.chartDataObj = this.chartData;
        this.chart.setOption(this.chartDataObj);
      }
    },
    methods: {
      startLoading () {
        this.chart.showLoading({
          text: '',
          color: '#000',
          maskColor: 'rgba(0,0,0,0)'
        });
      },
      closeLoading () {
        this.chart.hideLoading();
      }
    }
  };
</script>

<style lang="less" scoped>

</style>
