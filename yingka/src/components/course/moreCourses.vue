<template>
    <div class="moreCourses">
      <div class="detailBox">
        <div class="t-content">
          <div class="t-title">
            <span>他的课程</span>
          </div>
          <ul class="t-course">
            <li v-for="(teacherCourseItem, index) in teacherCourse" :key="index" v-if="teacherCourse.length">
              <a :href="teacherCourseItem.url">
                <img v-lazy="CourseImg" alt="">
                <span v-text="teacherCourseItem.title"></span>
              </a>
            </li>
            <li v-if="!teacherCourse.length" style="width: 100%;text-align: center; font-size: 13px">当前老师还未开课！</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      data() {
        return {
          teacherDetail: {},
          teacherCourse: [],
          CourseImg: 'https://cdn.pixabay.com/photo/2015/03/18/09/31/prairie-679014__340.jpg'
        };
      },
      created() {
        this.$http.get('/api/web/teacher/detail?id=' + this.$route.query.id).then((res) => {
          res = res.data;
          if (res.state === 0) {
            this.teacherDetail = res.data;
            this.teacherCourse = res.list;
          }
        });
      }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .moreCourses
    padding 10px 0 60px 0
    .detailBox
      padding 0 15px
      .detail
        height 70px
        border-radius 4px
        padding 2px 0
        display flex
        align-items center
        justify-content space-around
        img
          height 40px
          width 40px
        .t-info
          width 79%
        .t-name
          color #cc1138
          font-size 14px
          padding 3px 0
        .t-title
          color #858585
          font-size 12px
          padding 3px 0 3px 0
          width 100%
          display block
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
      .t-content
        padding 15px 0 15px 0
        .t-title
          font-size 14px
          color #cc1138
          display flex
          justify-content space-between
          padding-bottom 5px
          a
            color #333
        .t-Introduction
          font-size 12px;
          line-height 1.5
          color #333
        .t-course
          margin 10px 0
          display flex
          justify-content space-between
          li
            width 48%;
            text-align center
            a
              height 100%
              width 100%
              display flex
              flex-direction column
              justify-content space-between
              align-items center
            img
              height 100px
            span
              font-size 12px
              color #000
              display inline-block
              padding 7px 0 0 0
</style>
