import { HoneyApp } from "@honeyjs/core";

import { Nav } from "./components/nav";

const App = HoneyApp({
  root: document.querySelector("#app")
});

App.render(() => (
  <>
    <Nav />
  </>
));