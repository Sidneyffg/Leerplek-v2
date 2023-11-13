import { existsSync, readFileSync } from "fs";
import { join } from "path";

let env = {
  PROD: "true"
}

let loaded = false;

export function load() {
  if (loaded == true) return env;
  if (existsSync(join(process.cwd(), ".env"), "utf-8")) {
    const src = readFileSync(join(process.cwd(), ".env"), "utf-8");
    if (!src) {
      process.env.PROD = env.PROD = "true";
      return env;
    }

    const obj = parse(src);
    for (const prop in obj) env[prop] = obj[prop];
  }
  if (process.env.npm_lifecycle_event == "prod" || process.env.PROD == "true" || process.env.VERCEL_ENV) env.PROD = "true";
  loaded = true;
  return env;
}

/** @param {string} env */
function parse(env) {
  let res = {}
  const props = env.split("\n");
  props.forEach(e => {
    const [prop, value] = env.split("=");
    res[prop.trim()] = value.toString().trim().replaceAll('"', "");
  });
  return res;
}

export default () => load();