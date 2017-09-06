<template>
  <div class="livesList">
    <ul>
      <router-link to="/courseDetail" tag="li">
        <img src="../../images/slide02.png">
      </router-link>
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

  .livesList
    li
      height auto
      margin 8px 0
      a
        display inline-block
        width 100%
        height 100%
        img
          height 100%
</style>
