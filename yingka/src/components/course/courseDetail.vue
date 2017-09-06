<template>
  <div class="detail">
    <div class="head">
      <img src="../../images/slide02.png">
    </div>
    <div class="d-course">
      <div class="d-content">
        <div class="d-title">学习目标</div>
        <ul>
          <li>1. 巩固原有的语法、词汇知识，掌握基本的商务词汇与商务概念知识。</li>
          <li>2. 在各个商务话题中训练听、说、读、写四项英语</li>
          <li>3. 巩固原有的语法、词汇知识，掌握基本的商务词汇与商务概念知识。</li>
          <li>4. 在各个商务话题中训练听、说、读、写四项英语</li>
        </ul>
      </div>
      <div class="d-content">
        <div class="d-title">课程内容</div>
        <ul>
          <li>1. Effective Communication </li>
          <li>2. Verbal Communication </li>
          <li>3. Basic listening skills </li>
          <li>4. Elements of Communication </li>
          <li>5. Tips for Communication with strangers </li>
          <li>6. Effective Business writing </li>
          <li>7. Interpersonal Communication & Presentation </li>
          <li>8. Negative news </li>
          <li>9. Group Communication, team work, leadership</li>
          <li>10. networking, technology in communication</li>
        </ul>
        <ul>
          <li>1. Effective Communication </li>
          <li>2. Verbal Communication </li>
          <li>3. Basic listening skills </li>
          <li>4. Elements of Communication </li>
          <li>5. Tips for Communication with strangers </li>
          <li>6. Effective Business writing </li>
          <li>7. Interpersonal Communication & Presentation </li>
          <li>8. Negative news </li>
          <li>9. Group Communication, team work, leadership</li>
          <li>10. networking, technology in communication</li>
        </ul>
      </div>

    </div>

    <ul class="title">
      <li>
        <div class="t-name">老师简介</div>
        <div class="t-info">
          <div><img src="../../images/tx.png" alt=""></div>
          <div class="t-title">哈尔滨工业大学本科，爱尔兰国立大学..哈尔滨工业大学本科，爱尔兰国立大学...</div>
        </div>
      </li>

      <li>
        <div class="t-name">助教简介</div>
        <div class="t-info">
          <div><img src="../../images/tx.png" alt=""></div>
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
          <i class="iconfont ac-right">&#xe612;</i>
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
  .detail
    height 100%
    padding-bottom 70px
    .head
      height 180px
      margin-bottom  8px
      img
        height 100%
    .d-course
      padding 0 20px
      .d-content
        padding 15px 0 15px 0
        .d-title
          font-size 14px
          color #cc1138
          padding-bottom 10px
        ul li
          font-size 12px;
          line-height 2
          color #333
    ul.title li
      background #ebebeb
      border-radius 4px
      padding 15px 15px
      margin 15px 0
      img
        height 50px
        width 50px
        flex-grow: 1;
      .t-info
        display flex
        justify-content flex-start
        align-items center
        .t-title
          color #858585
          font-size 12px
          display inline-block
          padding 3px 0 3px 10px
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
      padding 10px 5px 10px 15px
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
          .ac-right
            color #cc1438
            font-weight 600
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
        font-size: 16px;
        padding: 10px;
      .buyActive
        background: #cc1438;
        color: #ebebeb;
</style>
