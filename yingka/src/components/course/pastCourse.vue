<template>
  <div class="livesList">
    <ul>
<<<<<<< HEAD
      <li v-for="pastImg in imgItem">
        <router-link to="/courseDetail">
          <img v-lazy="pastImg">
        </router-link>
      </li>
=======
      <router-link :to="{path:'/courseDetail', query:{id:courseItem.id}}" tag="li" v-for="(courseItem, index) in courseList" :key="index">
        <li>
            <img :src="courseItem.cover">
        </li>
      </router-link>
>>>>>>> 9c2895105443419f0e4bcbd86a27c11d8d59eab5
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
<<<<<<< HEAD
          imgItem: [
              'https://cdn.pixabay.com/photo/2015/03/18/09/31/prairie-679014__340.jpg',
              '/static/img/slide02.3aa475c.png',
            '/static/img/slide01.af35782.png',
            '/static/img/slide02.3aa475c.png'
          ]
      };
=======
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
>>>>>>> 9c2895105443419f0e4bcbd86a27c11d8d59eab5
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
