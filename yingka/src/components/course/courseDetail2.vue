<template>
  <div class="courseDetail2">
    <ul class="title">
      <li>
        <div class="t-name">老师简介</div>
        <div class="t-info">
          <img src="../../images/tx.png" alt="">
          <div class="t-title">哈尔滨工业大学本科，爱尔兰国立大学..哈尔滨工业大学本科，爱尔兰国立大学...</div>
        </div>
      </li>

      <li>
        <div class="t-name">助教简介</div>
        <div class="t-info">
          <img src="../../images/tx.png" alt="">
          <div class="t-title">哈尔滨工业大学本科，爱尔兰国立大学..哈尔滨工业大学本科，爱尔兰国立大学...</div>
        </div>
      </li>
    </ul>

    <div class="c-course">
      <div class="c-content">
        <div class="c-title">适宜人群</div>
        <ul>
          <li>1. 巩固原有的语法、词汇知识，掌握基本的商务词汇</li>
          <li>2. 在各个商务话题中训练听、说、读、写四项英语</li>
          <li>3. 巩固原有的语法、词汇知识，掌握基本的商务词汇</li>
          <li>4. 在各个商务话题中训练听、说、读、写四项英语</li>
        </ul>
      </div>
    </div>

    <div class="ac-registration">
      <div class="ac-title">报名信息</div>
      <div class="ac-uesr">
        <ul>
          <li>
            <img src="../../images/tx.png" alt="">
            <div>Linda</div>
          </li>
          <li>
            <img src="../../images/tx.png" alt="">
            <div>Lily</div>
          </li>
          <li>
            <img src="../../images/tx.png" alt="">
            <div>Benny</div>
          </li>
          <li>
            <img src="../../images/tx.png" alt="">
            <div>Elina</div>
          </li>
        </ul>
        <div class="ac-text">
          <span>已有80人预订</span>
          <img class="ac-right" src="../../images/right.png" alt="">
        </div>
      </div>
    </div>

    <div class="buySub">
      <input type="button" class="buyActive" value="单人购买599元">
      <input type="button" value="分享学习499元">
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
  .courseDetail2
    padding 5px 0 100px 0
    ul.title li
      background #ebebeb
      border-radius 4px
      padding 15px 15px
      margin 15px 0
      img
        height 60px
        width 60px
        flex-grow: 1;
      .t-info
        display flex
        justify-content flex-start
        align-items center
        .t-title
          color #858585
          font-size 12px
          padding 3px 0 3px 15px
          line-height 1.5
      .t-name
        color #cc1138
        font-size 14px
        padding 0 0 15px 0
      .right
        height 15px
        width 9.2px
        margin 0 10px 0 0
    .c-course
      padding 0 15px
      .c-content
        padding 15px 0 15px 0
        .c-title
          font-size 14px
          color #cc1138
          padding-bottom 10px
        ul li
          font-size 12px;
          line-height 2
          color #333
    .ac-registration
      background #ebebeb
      padding 10px 15px
      margin 5px 0
      .ac-title
        font-size 14px
        color #cc1138
        padding-bottom 10px
      .ac-uesr
        display flex
        justify-content space-between
        align-items flex-start
        ul
          display flex
          align-items center
          flex-grow 1
          li
            width 25%
            text-align center
            img
              width 43px
            div
              font-size 12px
              padding 5px 0
        .ac-text
          font-size 12px
          margin 15px 0 0 10px
          span
            vertical-align: middle;
            display inline-block
            margin-right 5px
          .ac-right
            height 15px
            width 9.2px
            vertical-align: middle;
    .buySub
      width 100%
      height 80px
      position fixed
      bottom 0
      left 0
      z-index 1200
      background #fff
      display flex
      justify-content space-around
      align-items center
      input
        outline: none;
        background: #fff;
        border solid 1px #cc1438
        color #cc1438
        border-radius: 5px;
        font-size: 18px;
        padding: 10px;
      .buyActive
        background: #cc1438;
        color: #ebebeb;
</style>
