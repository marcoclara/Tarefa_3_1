import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Admin.vue")
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/views/Admin.vue")
  },
  {
    path: "/admin/sponsors",
    name: "listSponsors",
    component: () => import("@/views/sponsors/ListSponsors.vue")
  },
  {
    path: "/admin/sponsors/add",
    name: "addSponsor",
    component: () => import("@/views/sponsors/AddSponsor.vue")
  },
  {
    path: "/admin/sponsors/edit",
    name: "editSponsor",
    component: () => import("@/views/sponsors/EditSponsor.vue")
  },
  {
    path: "/admin/experts",
    name: "listExperts",
    component: () => import("@/views/experts/ListExperts.vue")
  },
  {
    path: "/admin/experts/add",
    name: "addExpert",
    component: () => import("@/views/experts/AddExpert.vue")
  },
  {
    path: "/admin/experts/:expertId",
    name: "editExpert",
    component: () => import("@/views/experts/EditExpert.vue")
  },
  // Redirect to 404 page, if no match found
  {
    path: "*",
    component: () => import("@/views/Error404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
