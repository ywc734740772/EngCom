<template>
  <div class="teacher">
    <ul>
      <router-link to="/teacherDetail" tag="li">
        <img src="../../images/tx.png" alt="">
        <div class="t-info">
          <div class="t-name">Jenny</div>
          <div class="t-title">哈尔滨工业大学本科，爱尔兰国立大学...asdsadsadsadasdsad</div>
        </div>
        <img class="right" src="../../images/right.png" alt="">
      </router-link>
      <router-link to="/teacherDetail" tag="li">
        <img src="../../images/tx.png" alt="">
        <div class="t-info">
          <div class="t-name">Nina</div>
          <div class="t-title">哈尔滨工业大学本科，爱尔兰国立大学...asdsadsadsadasdsad</div>
        </div>
        <img class="right" src="../../images/right.png" alt="">
      </router-link>
      <router-link to="/teacherDetail" tag="li">
        <img src="../../images/tx.png" alt="">
        <div class="t-info">
          <div class="t-name">Linda</div>
          <div class="t-title">哈尔滨工业大学本科，爱尔兰国立大学...asdsadsadsadasdsad</div>
        </div>
        <img class="right" src="../../images/right.png" alt="">
      </router-link>
      <router-link to="/teacherDetail" tag="li">
        <img src="../../images/tx.png" alt="">
        <div class="t-info">
          <div class="t-name">Philip</div>
          <div class="t-title">哈尔滨工业大学本科，爱尔兰国立大学...asdsadsadsadasdsad</div>
        </div>
        <img class="right" src="../../images/right.png" alt="">
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
  .teacher
    padding 15px 10px
    ul li
      height 70px
      background #ebebeb
      border-radius 4px
      padding 2px 8px
      margin 7px 0
      display flex
      align-items center
      justify-content space-around
      img
        height 40px
        width 40px
      .t-info
        width 79%
      .t-name
        color #cc1138
        font-size 14px
        padding 3px 15px
      .t-title
        color #858585
        font-size 12px
        padding 3px 0 3px 15px
        width 88%
        display block
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
      .right
        height 15px
        width 9.2px
        margin 0 10px 0 0
</style>
