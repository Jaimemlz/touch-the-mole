import { Router } from "@vaadin/router";

const outlet = document.querySelector("touch-the-mole");

const router = new Router(outlet);

router.setRoutes([
  {
    path: "/touch-the-mole/home",
    component: "div",
  },
  {
    path: "/touch-the-mole/game",
    component: "div",
  },
  {
    path: "(.*)",
    action: (context, commands) => {
      return commands.redirect("/touch-the-mole/");
    },
  },
]);
