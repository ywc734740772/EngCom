<template>
  <div class="myIncome">
    <ul>
      <li>
        <div class="in-info">
          <div class="in-name">基础商务英语系列课程</div>
          <div class="in-time">2017.08.08</div>
        </div>
        <div class="in-price">100元</div>
      </li>
      <li>
        <div class="in-info">
          <div class="in-name">基础商务英语系列课程</div>
          <div class="in-time">2017.05.01</div>
        </div>
        <div class="in-price">200元</div>
      </li>
      <li>
        <div class="in-info">
          <div class="in-name">基础商务英语系列课程</div>
          <div class="in-time">2017.04.28</div>
        </div>
        <div class="in-price">150元</div>
      </li>
      <li>
        <div class="in-info">
          <div class="in-name">基础商务英语系列课程</div>
          <div class="in-time">2017.03.22</div>
        </div>
        <div class="in-price">180元</div>
      </li>
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
  .myIncome
    padding 15px 10px
    ul li
      height 70px
      background #ebebeb
      border-radius 4px
      padding 0 8px
      margin 7px 0
      display flex
      align-items center
      justify-content space-around
      img
        height 40px
        width 40px
      .in-info
        width 79%
        .in-name
          color #333
          font-size 14px
          padding 3px 0
        .in-time
          color #858585
          font-size 12px
          padding 3px 0
      .in-price
        color #cc1138
        font-size 16px
</style>
