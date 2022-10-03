/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import Vue from "vue";
declare module "vue-feather";
// declare module "vue-masonry";
// declare module "@egjs/vue-flicking";

import firebase from "firebase/compat/app";
import firebaseAuth from "firebase/auth";
import firebaseAnalytics from "firebase/analytics";

import dayjs from "dayjs";
import VueKatex from "vue-katex";
declare module "vue/types/vue" {
  interface Vue {
    $firebase: typeof firebase;
    $firebaseAuth: typeof firebaseAuth;
    $firebaseAnalytics: typeof firebaseAnalytics;
    $dayjs: typeof dayjs;
  }
}
