import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import WeVue from 'we-vue';
import 'we-vue/lib/style.css';
import App from './App';
import Axios from 'axios';
Vue.prototype.$http = Axios;

import course from './components/course/course.vue';
import livesCourse from './components/course/livesCourse.vue';
import pastCourse from './components/course/pastCourse.vue';
import courseDetail from './components/course/courseDetail.vue';

import teacher from './components/teacher/teacher.vue';
import teacherDetail from './components/teacher/teacherDetail.vue';

import release from './components/release/release.vue';
import agreement from './components/release/agreement.vue';
import earnings from './components/release/earnings.vue';
import releaseSuccess from './components/release/releaseSuccess.vue';

import activity from './components/activity/activity.vue';
import activityDetail from './components/activity/activityDetail.vue';

import my from './components/my/my.vue';
import myIncome from './components/my/myIncome.vue';
import about from './components/my/about.vue';
import commonProblems from './components/my/commonProblems.vue';
import alreadyBought from './components/my/alreadyBought.vue';
import registerTeacher from './components/my/registerTeacher.vue';
import myRelease from './components/my/myRelease.vue';

Vue.use(VueRouter);
Vue.use(WeVue);
Vue.config.productionTip = false;

const routes = [
  {
    path: '*',
    redirect: '/course/livesCourse'
  },
  {
    path: '/course',
    component: course,
    children: [
      {
        path: 'livesCourse',
        component: livesCourse
      }, {
        path: 'pastCourse',
        component: pastCourse
      }
    ]
  }, {
    path: '/courseDetail',
    component: courseDetail
  }, {
    path: '/teacher',
    component: teacher
  }, {
    path: '/teacherDetail',
    component: teacherDetail
  }, {
    path: '/release',
    component: release
  }, {
    path: '/agreement',
    component: agreement
  }, {
    path: '/earnings',
    component: earnings
  }, {
    path: '/releaseSuccess',
    component: releaseSuccess
  }, {
    path: '/activity',
    component: activity
  }, {
    path: '/activityDetail',
    component: activityDetail
  }, {
    path: '/my',
    component: my
  }, {
    path: '/myIncome',
    component: myIncome
  }, {
    path: '/about',
    component: about
  }, {
    path: '/commonProblems',
    component: commonProblems
  }, {
    path: '/alreadyBought',
    component: alreadyBought
  }, {
    path: '/registerTeacher',
    component: registerTeacher
  }, {
    path: '/myRelease',
    component: myRelease
  }];

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes
});

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

router.beforeEach((to, form, next) => {
  vm.$store.commit('isMenu', true);
  next();
});
vm.a = null;
