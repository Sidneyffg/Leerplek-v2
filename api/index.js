import env from "./lib/env.js";
import { setupSSR, handleSSRRequest } from "./lib/ssr.js";
import { authMiddleware } from "./lib/auth.js";
import express from "express";

const PORT = env().PORT || 8080;
const app = express();

app.use(express.static("public"));
app.use(authMiddleware());
await setupSSR(app);

app.get("/api/*", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.get("*", handleSSRRequest);

app.listen(PORT, () => {
  console.log(`App loaded in ${env().PROD == "true" ? "production" : "development"} mode, listening on port: ${env().PORT}`);
});