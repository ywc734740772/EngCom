<template>
  <div class="livesList">
    <ul>
      <li>
        <router-link to="/courseDetail">
          <img src="../../images/slide01.png">
        </router-link>
      </li>
      <li>
        <router-link to="/courseDetail">
          <img src="../../images/slide02.png">
        </router-link>
      </li>
      <li>
        <router-link to="/courseDetail">
          <img src="../../images/slide01.png">
        </router-link>
      </li>
      <li>
        <router-link to="/courseDetail">
          <img src="../../images/slide02.png">
        </router-link>
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
  .livesList
    li
      height 200px
      margin 8px 0
    img
      height 100%
</style>
