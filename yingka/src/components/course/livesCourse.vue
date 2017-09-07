<template>
  <div class="livesList">
    <ul>
      <router-link :to="{path:'/courseDetail', query:{id:courseItem.id}}" tag="li" v-for="(courseItem, index) in courseList" :key="index">
        <img :src="courseItem.cover">
      </router-link>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
          courseList: []
      };
    },
    computed: {},
    created() {
      this.$http.get('/api/web/goods?p=1').then((res) => {
        res = res.data;
        if (res.state === 0) {
          this.courseList = res.list;
        }
      });
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
