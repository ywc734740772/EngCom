<template>
  <div class="myRelease">
    <ul class="m-list">
      <li>
        <div>
          <span>课程名称：</span>
          <span>英语写作</span>
        </div>
        <div>
          <span>发布时间：</span>
          <span>9月6号</span>
        </div>
        <div>
          <span>状态：</span>
          <span class="colRed">审核中</span>
        </div>
        <div class="m-title"></div>
      </li>
      <li>
        <div>
          <span>课程名称：</span>
          <span>英语写作</span>
        </div>
        <div>
          <span>发布时间：</span>
          <span>9月6号</span>
        </div>
        <div>
          <span>状态：</span>
          <span class="colRed">已通过</span>
        </div>
        <div class="m-title">
          请保持电话畅通，我们将会与你沟通上课时间和安排
        </div>
      </li>
      <li>
        <div>
          <span>课程名称：</span>
          <span>英语写作</span>
        </div>
        <div>
          <span>发布时间：</span>
          <span>9月6号</span>
        </div>
        <div>
          <span>状态：</span>
          <span class="colRed active">已完成</span>
        </div>
        <div class="m-title">
          太棒了，您的发布的课程已完成，请在我的收益中查看相关收益
        </div>
      </li>
      <li>
        <div>
          <span>课程名称：</span>
          <span>英语写作</span>
        </div>
        <div>
          <span>发布时间：</span>
          <span>9月6号</span>
        </div>
        <div>
          <span>状态：</span>
          <span class="colRed">未通过</span>
        </div>
        <div class="m-title">
          很遗憾，你发布的课程未能通过审核，我们的工作人员将会协助你完成，课程发布请保存电话畅通，
          如有问题，您也可添加我们的工作人员微信（jenny_ireland）,咨询相关信息。谢谢！
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.$store.commit('isMenu', false);
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .myRelease
    padding 5px 10px
    li
      border solid 1px #e3e2e1
      border-radius 5px
      padding 5px 5px
      margin 8px 0
      div
        padding 5px 0
        font-size 12px
        .colRed
          color #ff2a0a
        .active
          color #32ff05
      .m-title
        color #ff2a0a
        line-height 1.4
        padding 5px 2px
        word-break break-all
</style>
