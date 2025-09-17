import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/view/HomeView.vue";
import ProductView from "@/view/ProductView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/rest",
      component: ProductView,
    },
  ],
});

export default router;
