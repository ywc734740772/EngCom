<template>
  <div class="course">
    <div class="swiper-container swiper-container-s">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="javascript:">
            <img src="../../images/slide01.png" class="lazyload-image">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:">
            <img src="../../images/slide02.png" class="lazyload-image">
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <div class="course-menu">
      <router-link to="/course/livesCourse" replace>直播课堂</router-link>
      <router-link to="/course/pastCourse" replace>往期课程</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  /* eslint-disable no-new */
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';

  export default {
    data() {
      return {};
    },
    created() {
      this.$http.get('/api/web/goods?p=1').then((res) => {
        res = res.data;
        if (res.state === 0) {
//          this.teacherList = res.list;
          console.log(res);
        }
      });
    },
    mounted () {
      new Swiper('.swiper-container-s', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .course
    padding-bottom 60px
    .swiper-container-s
      max-height 230px
      margin-bottom 8px
      img
        width 100%
        height 100%
    .course-menu
      height 40px
      font-size 16px
      background #ebebeb
      display flex
      justify-content space-around
      align-items center
      a
        color #403f42
      .active
        color #cc1138
</style>
