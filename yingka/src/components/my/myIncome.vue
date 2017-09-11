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

    <div class="subIncome" v-if="!totalMoney">
      <input type="button" :value="`总收益：${totalMoney}元`" class="">
      <input type="button" value="提取收益">
    </div>
    <div class="subIncome subrelease" v-if="totalMoney">
      <span>您还没有收益，快去发布课程，并赚取收益吧！</span>
      <input type="button" value="发布课程" @click="subrelease()">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import WeVue from 'we-vue';
  export default {
    data() {
      return {
        totalMoney: 630
      };
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.$store.commit('isMenu', false);
      });
    },
    methods: {
      subrelease() {
        WeVue.Dialog({
          title: '提示',
          message: '发布失败，您还不是老师！',
          skin: 'ios'
        });
      }
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
    .subIncome
      height 55px
      width 100%
      position fixed
      bottom 0
      left 0
      z-index 1200
      background #fff
      border-top solid 1px #ebebeb
      display flex
      justify-content space-around
      align-items center
      input
        width 40%
        outline none
        background: #fff
        border solid 1px #cc1438
        color #cc1438
        border-radius 5px
        font-size: 14px
        padding 8px 8px
      .buyActive
        background: #cc1438;
        color: #ebebeb;
    .subrelease
      width auto
      padding 0 15px
      span
        font-size 12px
        line-height 1.4
        padding-right 10px
      input
        width 30%
        padding 5px
</style>
