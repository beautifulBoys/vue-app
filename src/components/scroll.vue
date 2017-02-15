<template>
  <div ref="scroll">
    <slot name="content"></slot>
  </div>
</template>
<script>
  export default {
    data () {
      return {};
    },
    components: {},
    mounted () {
      this.meunScroll = new BScroll(this.$refs.scroll, {
        click: true
      });
    }
  };
</script>

<style lang="less" scoped>

</style>
