<template>
  <div class="teacherDetail">
    <div class="detailBox">
      <div class="detail">
        <img src="../../images/tx2.png" alt="">
        <div class="t-info">
          <div class="t-name">Jenny</div>
          <div class="t-title">语言学博士</div>
        </div>
      </div>

      <div class="t-content">
        <div class="t-title">个人介绍</div>
        <div class="t-Introduction"> 巩固原有的语法、词汇知识，掌握基本的商务词汇与商务概念知识。巩固原有的语法、词汇知识，掌握基本的商务词汇与商务概念知识。</div>
      </div>
    </div>

    <div class="detailBox">
      <div class="t-content">
        <div class="t-title">他的课程</div>
        <ul class="t-course">
          <li>
            <img src="../../images/slide01.png" alt="">
            <span>基础商务英语系列课程</span>
          </li>
          <li>
            <img src="../../images/slide02.png" alt="">
            <span>基础商务英语系列课程</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="detailBox">
      <div class="t-content">
        <div class="t-title">个人秀</div>
        <ul class="t-course">
          <li>
            <img src="../../images/slide01.png" alt="">
          </li>
          <li>
            <img src="../../images/slide02.png" alt="">
          </li>
        </ul>
      </div>
    </div>

    <div class="detailBox" style="border: none">
      <div class="t-content">
        <div class="t-title">视频</div>
        <ul class="t-course">
          <li>
            <img src="../../images/slide01.png" alt="">
          </li>
          <li>
            <img src="../../images/slide02.png" alt="">
          </li>
        </ul>
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
  .teacherDetail
    padding 10px 0 60px 0
    .detailBox
      padding 0 15px
      border-bottom solid 4px rgba(235, 235, 235, .9)
      .detail
        height 70px
        border-radius 4px
        padding 2px 0
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
          padding 3px 0
        .t-title
          color #858585
          font-size 12px
          padding 3px 0 3px 0
          width 100%
          display block
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
      .t-content
        padding 15px 0 15px 0
        .t-title
          font-size 14px
          color #cc1138
          padding-bottom 5px
        .t-Introduction
          font-size 12px;
          line-height 1.5
          color #333
        .t-course
          margin 10px 0
          display flex
          justify-content space-between
          li
            width 48%;
            img
              height 100px
            span
              font-size 12px
              color #000
              display inline-block
              padding 7px 0 0 0
</style>
