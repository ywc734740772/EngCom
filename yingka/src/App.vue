<template>
  <div id="app">
    <div class="home">
      <div class="homeNav">
        <div class="h-menu">
          <router-link to="/course/livesCourse">
            <i class="iconfont">&#xe605;</i>
            <span class="tabbar-label">课程</span>
          </router-link>
          <router-link to="/teacher">
            <i class="iconfont">&#xe607;</i>
            <span class="tabbar-label">秀外教</span>
          </router-link>
          <router-link to="/release">
            <i class="iconfont" style="font-size: 28px;margin-top: -5px">&#xe603;</i>
            <span class="tabbar-label">发布</span>
          </router-link>
          <router-link to="/activity">
            <i class="iconfont">&#xe606;</i>
            <span class="tabbar-label">活动</span>
          </router-link>
          <router-link to="/my">
            <i class="iconfont">&#xe604;</i>
            <span class="tabbar-label">我的</span>
          </router-link>
        </div>
      </div>
    </div>
    <!--<keep-alive>-->
      <router-view></router-view>
    <!--</keep-alive>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import course from './components/course/course.vue';

  export default {
    data() {
      return {};
    },
    components: {
      course
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../static/css/reset.css";

  #app
    background #fff
    position relative
    .homeNav
      height 60px
      width 100%
      background #fff
      position fixed
      bottom 0
      left 0
      z-index 1000
      .h-menu
        height 100%
        border-top solid 1px rgba(200, 198, 196, .8)
        display flex
        justify-content space-around
        align-self center
        a
          width 25%
          /*border-right solid 1px #e3e2e1*/
          display inline-flex
          font-size 12px
          flex-direction column
          justify-content space-around
          padding 8px 0
          align-items center
          color #333
          .iconfont
            font-size 20px
          img
            height 20px
            width auto
        .active
          color #cc1138
</style>
