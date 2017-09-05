<template>
  <div class="my">
    <router-link to="/registerTeacher">
      <div class="m-head">
        <img src="../../images/tx2.png" alt="">
        <div class="m-info">
          <div class="m-name">Jenny</div>
          <div class="m-title">倡导英语学习输入与输出相结合，打造英语学习闭环！</div>
        </div>
      </div>
    </router-link>
    <ul class="m-menu">
      <router-link to="/alreadyBought" tag="li">
        <span>已购课程</span>
        <img src="../../images/right2.png" alt="">
      </router-link>
      <router-link to="/release" tag="li">
        <span>发布课程</span>
        <img src="../../images/right2.png" alt="">
      </router-link>
      <router-link to="/myIncome" tag="li">
        <span>我的收益</span>
        <img src="../../images/right2.png" alt="">
      </router-link>
      <router-link to="/about" tag="li">
        <span>关于我们</span>
        <img src="../../images/right2.png" alt="">
      </router-link>
      <router-link to="/commonProblems" tag="li">
        <span>常见问题</span>
        <img src="../../images/right2.png" alt="">
      </router-link>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {};
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .my
    padding 15px 15px
    .m-head
      height 70px
      border-radius 4px
      padding 2px 0
      display flex
      align-items center
      justify-content space-around
      img
        height 70px
        width 70px
      .m-info
        flex-grow 1
        margin-left 20px
      .m-name
        color #cc1138
        font-size 14px
        padding 5px 0
      .m-title
        color #858585
        font-size 12px
        padding 5px 0 5px 0
        line-height 1.4
    .m-menu
      display flex
      flex-direction column
      align-items center
      margin 20px 0
      li
        width 100%
        display flex
        justify-content space-between
        padding 15px
        border-bottom solid 1px #ebebeb
        img
          height 13px
          width 9px
</style>
