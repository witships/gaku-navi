import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  // トップ
  {
    path: "/",
    name: "index",
    component: () => import("../views/IndexView.vue"),
  },
  // もくじ
  {
    path: "/:course",
    name: "ContentIndex",
    component: () => import("../views/ContentIndexView.vue"),
  },
  // レクチャーLectureView
  {
    path: "/:course/:id",
    name: "LectureView",
    component: () => import("../views/LectureView.vue"),
  },
  // ゲーム
  {
    path: "/game",
    name: "GameIndex",
    component: () => import("../views/game/GameIndexView.vue"),
  },
  {
    path: "/game/typing",
    name: "TouchTyping",
    component: () => import("../views/game/TouchTypingView.vue"),
  },
  // {
  //   path: "/game/MultiplicationPractice",
  //   name: "TouchTyping",
  //   component: () => import("../views/game/TouchTypingView.vue"),
  // },
  // {
  //   path: "/game/BoxCalculation",
  //   name: "TouchTyping",
  //   component: () => import("../views/game/TouchTypingView.vue"),
  // },

  // 以下不要
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
