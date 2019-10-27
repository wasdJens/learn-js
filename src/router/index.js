import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main.vue";
import Calculator from "@/views/Calculator.vue";
import TicTacToe from "@/views/TicTacToe.vue";

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
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
