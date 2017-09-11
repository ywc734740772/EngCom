<template>
  <div class="enrollment">
    <ul>
      <li>
        <img src="../../images/tx2.png" alt="">
        <div>张三</div>
      </li>
      <li>
        <img src="../../images/tx2.png" alt="">
        <div>张三</div>
      </li>
      <li>
        <img src="../../images/tx2.png" alt="">
        <div>张三</div>
      </li>
      <li>
        <img src="../../images/tx2.png" alt="">
        <div>张三</div>
      </li>
      <li>
        <img src="../../images/tx2.png" alt="">
        <div>张三qwewqewqewqe</div>
      </li>
      <li>
        <img src="../../images/tx2.png" alt="">
        <div>张三</div>
      </li>
      <li>
        <img src="../../images/tx2.png" alt="">
        <div>张三</div>
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
    .enrollment
      padding 15px 5px 50px 5px
      ul
        display flex
        flex-wrap wrap
        li
          padding 5px 0
          text-align center
          order 1
          width 20%
          font-size 12px
          img
            width 50px
            height 50px
          div
            padding 5px 0
            width: 100%;
            display block
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
</style>
