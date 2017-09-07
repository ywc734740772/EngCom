<template>
  <div class="livesList">
    <ul>
      <router-link :to="{path:'/courseDetail', query:{id:courseItem.id}}" tag="li" v-for="(courseItem, index) in courseList" :key="index">
        <li>
            <img :src="courseItem.cover">
        </li>
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
      this.$http.get('/api/web/goods/pass?p=1').then((res) => {
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
      height 200px
      margin 8px 0
    img
      height 100%
</style>
