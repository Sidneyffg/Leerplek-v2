import env from "./lib/env.js";
import { setupSSR, handleSSRRequest } from "./lib/ssr.js";
import express from "express";

const PORT = env().PORT || 8080;
const app = express();

app.use(express.static("public"));
await setupSSR(app);

app.get("/api/*", (_req, res) => {
  res.json({ message: "Hello, world!" });
});

app.get("*", handleSSRRequest);

app.listen(PORT, () => {
  console.log(`App loaded in ${env().PROD == "true" ? "production" : "development"} mode, listening on port: ${env().PORT}`);
});