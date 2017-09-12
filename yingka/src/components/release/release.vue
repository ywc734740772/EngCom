<template>
  <div>
    <div class="release">
      <div class="r-relBox">
        <div class="r-title">课程主题</div>
        <wv-group>
          <wv-textarea placeholder="商务英语" :rows="2" :max-length="30" v-model.trim="courseValue"></wv-textarea>
        </wv-group>
      </div>

      <div class="r-relBox">
        <div class="r-title">内容简介</div>
        <!--<textarea class="r-topics" rows="8" maxlength="300" placeholder="主讲内容，可以学到什么。"></textarea>-->
        <wv-group>
          <wv-textarea placeholder="主讲内容，可以学到什么。" :rows="8" :max-length="300" v-model.trim="contentValue"></wv-textarea>
        </wv-group>
      </div>

      <div class="liveWay">
        <div class="r-title">分享形式</div>
        <div class="live" :class="{'active':sharePlatform=== 1 }" @click="sharePlatform=1">YY直播</div>
        <div class="live" :class="{'active':sharePlatform=== 2 }" @click="sharePlatform=2">语音直播</div>
      </div>

      <div class="courseTime">
        <div class="r-title">课程时长</div>
        <wv-button @click="ticketPickerShow = true" v-text="courseTime"></wv-button>
        <wv-picker v-model="ticketPickerShow" :slots="ticketSlots" @change="onChange"></wv-picker>
        <i class="iconfont">&#xe612;</i>
      </div>

      <div class="coursePrice">
        <div class="r-title">课程价格</div>
        <wv-group>
          <wv-input placeholder="请输入价格" type="number" v-model="priceNumber"></wv-input>
        </wv-group>
        <div class="t-right">
          <router-link to="/earnings" tag="div">关于收益</router-link>
        </div>

      </div>

      <div class="r-agreement">
        <input type="checkbox" :checked="isChecked" v-model="isChecked">
        <span @click="isChecked=true">我已阅读并同意《<router-link to="/agreement">英咖平台课程协议</router-link>》</span>
      </div>

      <div class="r-submit">
        <input type="button" value="提交" @click="submitRelease">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import WeVue from 'we-vue';
  export default {
    data() {
      return {
        isChecked: true,
        courseValue: this.value,
        contentValue: this.value,
        priceNumber: this.value,
        sharePlatform: 1,
        courseTime: '30分钟',
        ticketPickerShow: false,
        ticketSlots: [
          {
            values: [
              '15分钟',
              '30分钟',
              '60分钟',
              '90分钟'
            ]
          }
        ]
      };
    },
    methods: {
      onChange (picker, value) {
        this.$nextTick(() => {
          this.courseTime = value.join('.');
        });
      },
      tips (msg) {
        WeVue.TopTips({
          message: msg,
          duration: 1500
        });
      },
      submitRelease() {
        if (!this.courseValue) {
          this.tips('请输入课程主题！');
          return false;
        } else if (!this.contentValue) {
          this.tips('请输入内容简介！');
          return false;
        } else if (!/^\d+(\.\d{1,2})?$/.test(this.priceNumber)) {
          this.tips('请输入课程价格,且只能为整数或小数！');
          return false;
        } else if (!this.isChecked) {
          this.tips('请勾选并阅读课程协议！');
          return false;
        } else {
          WeVue.Dialog.confirm(WeVue.Dialog.setDefaults({
            title: '发布课程',
            message: '填写完成，发布成功后，课程信息将不可修改，请确认无误后发布，发布成功后请在我的发布，了解相关进度。',
            confirmText: '确认发布',
            cancelText: '我再看看',
            showCancelBtn: true
          })).then(action => {
            console.log(action);
            this.save();
            // this.$router.push('./releaseSuccess');
          });
        }
      },
      save() {
          console.log({title: this.courseValue});
        this.$http.post('/api/manage/goods/save', {
          data: {title: this.courseValue, content: this.contentValue, price: this.priceNumber, type: this.sharePlatform},
          id: 0
        }, {
          emulateJSON: true
        }).then(function(res) {
          console.log(res.data);
        }, function(res) {
          alert(res.status);
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .release
    padding 15px 10px 100px 10px
    .r-title
      color #cc1138
      font-size 15px
      padding 15px 0
    .r-relBox
      display flex
      flex-direction column
      .weui-cells
        margin 0
        font-size 12px
        border solid 1px #e3e2e1
        border-radius 3px
        .weui-cell
          padding 5px
      .r-topics
        color #000
        font-size 12px
        flex-grow 1
        padding 5px
        border solid 1px #e3e2e1
        border-radius 3px
        resize none
        outline none
        box-shadow none
    .liveWay
      display flex
      align-items center
      padding 20px 0 0 0
      .r-title
        margin-right 10px
      .live
        border solid 1px #cc1138
        border-radius 3px
        color #cc1138
        font-size 13px
        padding 5px 8px
        margin 0 5px
      .active
        background #cc1138
        color #f3f3f3
    .courseTime
      display flex
      justify-content space-between
      align-items center
      padding 10px 0
      button.weui-btn
        flex-grow 1
        width auto
        background none
        font-size 14px
        margin-right 0
        text-align right
        padding-right 10px
      button.weui-btn:hover
        background none
      .weui-btn:after
        content none
      i
        margin-top -2px
      .r-title
        margin-right 15px
      input
        flex-grow: 1;
        font-size 12px
        border solid 1px #e3e2e1
        height 16px
        line-height 16px
        border-radius 3px
        padding 5px 3px
    .coursePrice
      display flex
      justify-content flex-start
      align-items center
      padding 10px 0
      .weui-cells
        margin 0
        flex-grow 1
        margin-right 10px
        border solid 1px #e3e2e1
        font-size 12px
        border-radius 3px
        .weui-cell
          padding 0
      .r-title
        margin-right 15px
        font-size 15px
        white-space nowrap
      input
        font-size 12px
        width 100%
        border none
        border-radius 3px
        height 16px
        line-height 16px
        padding 5px 3px
      .t-right
        font-size 14px
        display flex
        flex-grow 1
        flex-wrap nowrap
        justify-content space-around
        div
          white-space nowrap
    .r-agreement
      input
        vertical-align middle
        border solid 1px #c8c6c4
      span
        font-size 12px
        a
          color royalblue
    .r-submit
      padding 40px 0 0 0
      text-align center
      input
        background #cc1138
        border none
        outline none
        border-radius 3px
        font-size 14px
        color #ebebeb
        padding 5px 30px
</style>

