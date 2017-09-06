<template>
  <div class="activityDetail">
    <div class="ac-dBox">
      <img src="../../images/slide02.png">
    </div>
    <div class="ac-course">
      <div class="ac-content">
        <div class="ac-title">学习目标</div>
        <ul>
          <li>1. 巩固原有的语法、词汇知识，掌握基本的商务词汇与商务概念知识。</li>
          <li>2. 在各个商务话题中训练听、说、读、写四项英语</li>
          <li>3. 巩固原有的语法、词汇知识，掌握基本的商务词汇与商务概念知识。</li>
          <li>4. 在各个商务话题中训练听、说、读、写四项英语</li>
        </ul>
      </div>
      <div class="ac-content">
        <div class="ac-title">课程内容</div>
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
          <span>已有80人报名</span>
          <i class="iconfont ac-right">&#xe612;</i>
        </div>
      </div>
    </div>

    <div class="ac-submit">
      <input type="button" value="我要报名">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .activityDetail
    height 100%
    padding-bottom 70px
    .ac-title
      font-size 14px
      color #cc1138
      padding-bottom 10px
    .ac-dBox
      height 180px
      margin-bottom  8px
      img
        height 100%
    .ac-course
      padding 0 15px
      .ac-content
        padding 15px 0 15px 0
        ul li
          font-size 12px;
          line-height 2
          color #333
    .ac-registration
      background #ebebeb
      padding 10px 5px 10px 15px
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
    .ac-submit
      padding 15px 15px
      input
        width 100%
        background #cc1438
        border none
        outline none
        border-radius 3px
        font-size 18px
        color #ebebeb
        padding 12px 0
</style>
