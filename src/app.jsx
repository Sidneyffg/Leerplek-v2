import { HoneyApp } from "@honeyjs/core";

const App = HoneyApp({
  root: document.querySelector("#app")
});

App.render(() => (
  <>
    <h1>Hello, world</h1>
  </>
));