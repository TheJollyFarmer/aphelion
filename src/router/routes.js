import App from "@/App";

const sections = [
  "about",
  "portfolio",
  "testimonials",
  "team",
  "contact",
  "location"
];

const routes = [
  {
    path: "/",
    name: "home",
    component: App,
    meta: { sections }
  }
];

export default routes;
