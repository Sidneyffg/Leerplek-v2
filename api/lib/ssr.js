import { renderPage } from "vike/server";
import { existsSync, readFileSync, lstatSync } from "fs";
import { join } from "path";
import env from "./env.js";

/**
 * @param {import("express").Application} app 
 */
export async function setupSSR(app) {
  const isProduction = env().PROD;

  if (isProduction == "true") {
    // Serve static assets middleware
    app.use((req, res, next) => {
      const asset = getAsset(req, join(process.cwd(), "/dist/client"));
      if (asset == null) return next();
      res.setHeader("Content-Type", asset.type);
      res.end(asset.src);
    });
  } else {
    const vite = await import("vite");
    const viteDev = await vite.createServer({
      server: {
        middlewareMode: true
      },
      configFile: join(process.cwd(), "vite.config.js")
    });
    app.use(viteDev.middlewares);
  }
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export async function handleSSRRequest(req, res, next) {
  const pageCtxInit = {
    urlOriginal: req.originalUrl,
    user: {
      name: "Codefoxdev"
    }
  }
  const pageCtx = await renderPage(pageCtxInit);
  const { httpResponse } = pageCtx;
  if (!httpResponse) return next();

  const { body, statusCode, headers, earlyHints } = httpResponse;
  if (res.writeEarlyHints) res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });
  headers.forEach(([name, value]) => res.header(name, value));
  res.status(statusCode);
  res.send(body);
}

/**
 * @param {import("express").Request} req
 * @returns {{ src: string, type: string } | null}
 */
function getAsset(req, base) {
  const path = join(base, req.url);
  if (!existsSync(path) || lstatSync(path).isDirectory() == true) return null;

  const src = readFileSync(path);
  return resolve(req, src);
}

const extDat = [
  { ext: "css", type: "text/css", text: true },
  { ext: "js", type: "application/javascript", text: true },
  { ext: "html", type: "text/html", text: true },
  { ext: "svg", type: "text/svg", text: true },
]

/**
 * @param {import("express").Request} req
 * @returns {{ src: string, type: string, found: boolean }}
 */
function resolve(req, src) {
  const s = req.url.split(".");
  let data = extDat.find(e => e.ext == s[s.length - 1]);
  if (!data) data = extDat.find(e => e.ext == getAccept(req));

  return { src, type: data.type, found: true }
}

/**
 * @param {import("express").Request} req
 */
function getAccept(req) {
  const h = req.header("accept");
  if (!h) return;
  return h.split(",")[0];
}