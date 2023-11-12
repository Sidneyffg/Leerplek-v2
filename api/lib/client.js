import { existsSync, readFileSync, lstatSync } from "fs";
import { join } from "path";
import proxy from "http-proxy";

import env from "./env.js";
const PROD = env().PROD;

let _entry = null;

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export function handleFrontendRequest(req, res) {
  let asset = getAsset(req, res);
  if (asset.found == true) {
    res.setHeader("Content-Type", asset.type);
    res.end(asset.src);
    return;
  }

  res.type("html");
  res.end(getEntryFile(req));
}


/**
 * @param {import("express").Request} req
 * @returns {{ src: string, type: string, found: boolean }}
 */
function getAsset(req, res) {
  if (PROD == "true") return getAssetProd(req);
  return { found: false }
}

function getAssetProd(req) {
  const path = join(process.cwd(), "dist", req.url);
  if (!existsSync(path) || lstatSync(path).isDirectory() == true) return { found: false }

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

/**
 * @param {import("express").Request} req
 */
function getEntryFile(req) {
  if (_entry && PROD == "true") return _entry;

  const relloc = PROD == "false" ? "src/index.html" : "dist/index.html";
  const src = readFileSync(join(process.cwd(), relloc), "utf-8");
  const res = parseHTML(src, PROD, req);

  _entry = res;
  return res;
}

function parseHTML(src, prod, req) {
  if (prod == "false") {
    return parseUrls(src, req).replace(/\<\/body>/i, `
        <!-- development script -->
        <script type="module" src="http://localhost:5173/@vite/client"></script>
      </body>
    `);
  } else {
    return src;
  }
}

/**
 * @param {import("express").Request} req
 */
function parseUrls(src, req) {
  const regex = /(href|src)="([^\"]{1,})"/gi;
  const url = req.url.endsWith("/") ? req.url.slice(0, -1) : req.url;
  let m;
  let res = [];

  while ((m = regex.exec(src)) !== null) {
    if (m.index === regex.lastIndex) regex.lastIndex++;
    const u = m[2];

    res.push([m[0], m[2]]);
  }

  for (const i of res) {
    if (src.indexOf(i[0]) == -1 || i[1].startsWith("http")) continue;
    if (i[1].startsWith("/")) src = src.replace(i[1], `http://localhost:5173${i[1]}`);
    else if (i[1].startsWith("./")) src = src.replace(i[1], `http://localhost:5173${url}/${i[1].slice(2)}`);
  }

  return src;
}