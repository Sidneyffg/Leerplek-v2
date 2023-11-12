import env from "./lib/env.js";
import { handleFrontendRequest } from "./lib/client.js";
import express from "express";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("public"));

app.use((req, res, next) => {
  res.removeHeader("x-powered-by");
  next();
});

app.get("/api/*", (_req, res) => {
  res.json({ message: "Hello, world!" });
});

app.get("*", handleFrontendRequest);

app.listen(PORT, () => {
  console.log(`App loaded in ${env().PROD == "true" ? "production" : "development"} mode, listening at port: ${PORT}`);
});

// /(href|src)="([^\"]*)"/gi