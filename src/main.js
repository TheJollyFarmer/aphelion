import "@/assets/sass/main.sass";
import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";

["push", "replace"].forEach(action => {
  const method = router[action];

  router[action] = location => {
    router.action = action;

    return method.call(method, location);
  };
});

createApp(App)
  .use(router)
  .mount("#app");
