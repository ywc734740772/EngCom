<template>
  <div class="teacher">
    <ul>
      <router-link :to="{path:'/teacherDetail', query:{id:teacherListItem.id}}" tag="li" v-for="(teacherListItem, index) in teacherList" :key="index">
        <img :src="teacherListItem.uavatar" alt="">
        <div class="t-info">
          <div class="t-name" v-text="teacherListItem.unick"></div>
          <div class="t-title" v-text="teacherListItem.motto"></div>
        </div>
        <i class="iconfont">&#xe679;</i>
      </router-link>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        teacherList: []
      };
    },
    computed: {},
    created() {
        this.$http.get('/api/web/teacher?p=1').then((res) => {
            res = res.data;
            if (res.state === 0) {
              this.teacherList = res.list;
            }
        });
    },
    mounted() {},
    activated() {},
    methods: {
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .teacher
    padding 15px 10px
    ul li
      height 70px
      background #ebebeb
      border-radius 4px
      padding 2px 8px
      margin 7px 0
      display flex
      align-items center
      justify-content space-around
      .iconfont
        color #cc1438
        padding-right 5px
      img
        height 40px
        width 40px
      .t-info
        width 79%
      .t-name
        color #cc1138
        font-size 14px
        padding 3px 15px
      .t-title
        color #858585
        font-size 12px
        padding 3px 0 3px 15px
        width 88%
        display block
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
      .right
        height 15px
        width 9.2px
        margin 0 10px 0 0
</style>
