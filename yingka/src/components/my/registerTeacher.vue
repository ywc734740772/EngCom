<template>
  <div class="registerTeacher">
    <ul>
      <li>
        <label>姓名</label>
        <input type="text">
      </li>
      <li>
        <label>籍贯</label>
        <input type="text">
      </li>
      <li>
        <label>性别</label>
        <select>
          <option>男</option>
          <option>女</option>
        </select>
      </li>
      <li>
        <label>年龄</label>
        <input type="text">
      </li>
      <li>
        <label>可工作时间</label>
        <input type="text">
      </li>
      <li>
        <label>联系方式</label>
        <input type="text">
      </li>
      <li>
        <label>个人简介</label>
        <input type="text">
      </li>
      <li class="reg-sub">
        <input type="button" value="上传个人生活照片">
      </li>
      <li class="reg-sub">
        <input type="button" value="上传个人介绍视频，必须英文介绍">
      </li>

      <li class="reg-submit">
        <input type="button" value="完成">
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .registerTeacher
    padding 10px 10px
    ul li
      height 100%
      border solid 1px #ebebeb
      color #000
      display flex
      margin 10px 0
      border-radius 5px
      label
        display inline-block
        width 70px
        padding 10px 5px
        line-height 1.3
        text-align center
        font-size 14px
        border-right solid 1px #ebebeb
      select
        flex-grow 1
        padding 10px 10px
        outline none
        border none
        background #fff
      input
        flex-grow 1
        padding 10px 10px
        outline none
        border none
        background #fff
    .reg-sub
      margin 20px 0
      input
        font-size 16px
    .reg-submit
      input
        width 100%
        background #cc1438
        border none
        outline none
        border-radius 3px
        font-size 18px
        color #ebebeb
        padding 12px 0
</style>
