import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main.vue";
import Calculator from "@/views/Calculator.vue";
import TicTacToe from "@/views/TicTacToe.vue";
import Playground from "@/views/Playground.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Main,
    children: [
      {
        path: "/calculator",
        name: "calculator",
        component: Calculator
      },
      {
        path: "/tictactoe",
        name: "tictactoe",
        component: TicTacToe
      },
      {
        path: "/playground",
        name: "playground",
        component: Playground
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
