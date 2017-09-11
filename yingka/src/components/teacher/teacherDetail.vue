<template>
  <div class="teacherDetail">
    <div class="detailBox">
      <div class="detail">
        <img :src="teacherDetail.uavatar" alt="">
        <div class="t-info">
          <div class="t-name" v-text="teacherDetail.unick"></div>
          <div class="t-title" v-text="teacherDetail.motto"></div>
        </div>
      </div>

      <div class="t-content">
        <div class="t-title">个人介绍</div>
        <div class="t-Introduction"> 巩固原有的语法、词汇知识，掌握基本的商务词汇与商务概念知识。巩固原有的语法、词汇知识，掌握基本的商务词汇与商务概念知识。</div>
      </div>
    </div>

    <div class="detailBox">
      <div class="t-content">
        <div class="t-title">
          <span>他的课程</span>
          <a href="javascript:" v-if="teacherCourse.length">更多</a>
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

    <div class="detailBox">
      <div class="t-content">
        <div class="t-title">
          <span>个人秀</span>
          <a href="javascript:">更多</a>
        </div>
        <ul class="t-course">
          <li>
            <img src="../../images/slide01.png" alt="">
          </li>
          <li>
            <img src="../../images/slide02.png" alt="">
          </li>
        </ul>
      </div>
    </div>

    <div class="detailBox" style="border: none">
      <div class="t-content">
        <div class="t-title">视频</div>
        <ul class="t-course">
          <li>
            <img src="../../images/slide01.png" alt="">
          </li>
          <li>
            <img src="../../images/slide02.png" alt="">
          </li>
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
  .teacherDetail
    padding 10px 0 60px 0
    .detailBox
      padding 0 15px
      border-bottom solid 4px rgba(235, 235, 235, .9)
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
