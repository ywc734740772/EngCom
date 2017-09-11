<template>
  <div class="livesList">
    <ul>
      <li v-for="pastImg in imgItem">
        <router-link to="/courseDetail">
          <img v-lazy="pastImg">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
          imgItem: [
              'https://cdn.pixabay.com/photo/2015/03/18/09/31/prairie-679014__340.jpg',
              '/static/img/slide02.3aa475c.png',
            '/static/img/slide01.af35782.png',
            '/static/img/slide02.3aa475c.png'
          ]
      };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .livesList
    li
      height 200px !important
      margin 8px 0
      a
        height 100%
        width 100%
        display flex
        flex-direction column
        justify-content space-between
        align-items center
      img
        height 100%
</style>
