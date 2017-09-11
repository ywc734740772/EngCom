<template>
  <div class="releaseSuccess">
    <div class="r-tips">
      <div class="s-title">提示</div>
      <div class="s-centent">发布成功，等待审核...</div>
      <div v-text="`${time}秒后回到首页`"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        time: 3
      };
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.$store.commit('isMenu', false);
      });
    },
    mounted() {
      let time = setInterval(() => {
        this.time--;
        if (this.time === 0) {
          clearInterval(time);
          this.$router.replace('./course/livesCourse');
        }
      }, 1000);
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .releaseSuccess
    text-align center
    .r-tips
      margin 50px auto
      font-size 15px
      .s-title
        padding 20px
        font-size 16px
        font-weight bold
      .s-centent
        padding 10px
</style>
