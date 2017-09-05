<template>
  <div>
    <div class="release">
      <div class="r-relBox">
        <div class="r-title">课程主题</div>
        <textarea class="r-topics" rows="4" maxlength="30" placeholder="商务英语"></textarea>
      </div>

      <div class="r-relBox">
        <div class="r-title">内容简介</div>
        <textarea class="r-topics" rows="8" maxlength="300" placeholder="主讲内容，可以学到什么。"></textarea>
      </div>

      <div class="liveWay">
        <div class="r-title">分享形式</div>
        <div class="live active">YY直播</div>
        <div class="live">语音直播</div>
      </div>

      <div class="courseTime">
        <div class="r-title">课程时长</div>
        <input type="text" placeholder="输入你理想的时间">
      </div>

      <div class="coursePrice">
        <div class="r-title">课程价格</div>
        <input type="text" placeholder="单行输入">
        <div class="t-right">
          <!--<div>产考价格</div>-->
          <router-link to="/earnings" tag="div">关于收益</router-link>
        </div>

      </div>

      <div class="r-agreement">
        <input type="checkbox">
        <span>我已阅读并同意《<router-link to="/agreement">英咖平台课程协议</router-link>》</span>
      </div>

      <div class="r-submit">
        <input type="button" value="提交">
      </div>
    </div>
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
  .release
    padding 15px 10px 100px 10px
    .r-title
      color #cc1138
      font-size 15px
      padding 15px 0
    .r-relBox
      display flex
      flex-direction column
      .r-topics
        color #000
        font-size 12px
        flex-grow 1
        padding 5px
        border solid 1px #e3e2e1
        border-radius 3px
        resize none
        outline none
        box-shadow none
    .liveWay
      display flex
      align-items center
      padding 20px 0 0 0
      .r-title
        margin-right 10px
      .live
        border solid 1px #cc1138
        border-radius 3px
        color #cc1138
        font-size 13px
        padding 5px 8px
        margin 0 5px
      .active
        background #cc1138
        color #f3f3f3
    .courseTime
      display flex
      justify-content space-between
      align-items center
      padding 10px 0
      .r-title
        margin-right 15px
      input
        flex-grow: 1;
        font-size 12px
        border solid 1px #e3e2e1
        height 16px
        line-height 16px
        border-radius 3px
        padding 5px 3px
    .coursePrice
      display flex
      justify-content flex-start
      align-items center
      padding 10px 0
      .r-title
        margin-right 15px
        font-size 15px
        white-space nowrap
      input
        font-size 12px
        /*width 25%*/
        flex-grow 1
        border solid 1px #e3e2e1
        border-radius 3px
        height 16px
        line-height 16px
        padding 5px 3px
        margin-right 10px
      .t-right
        font-size 14px
        display flex
        flex-grow 1
        flex-wrap nowrap
        justify-content space-around
        div
          white-space nowrap
    .r-agreement
      input
        vertical-align middle
        border solid 1px #c8c6c4
      span
        font-size 12px
        a
          color royalblue
    .r-submit
      padding 40px 0 0 0
      text-align center
      input
        background #cc1138
        border none
        outline none
        border-radius 3px
        font-size 14px
        color #ebebeb
        padding 5px 30px
</style>

