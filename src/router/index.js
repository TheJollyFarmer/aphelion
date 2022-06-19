import routes from "@/router/routes";
import scrollBehavior from "@/router/scroll";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior
});

export default router;
