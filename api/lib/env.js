/**
 * @typedef {{
 *  PROD: boolean,
 *  DEV_SERVER_ADDRESS: string,
 *  DEV_SERVER_PUBLIC: boolean | undefined,
 *  DEV_SERVER_ADDRESS_LOCAL: string | undefined,
 *  DEV_SERVER_ADDRESS_PUBLIC: string | undefined,
 * }} ENV
 */
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
  // Load extra env variables
  env.DEV_SERVER_ADDRESS = getDevAddress();

  return env;
}

/** @param {string} env */
function parse(env) {
  let res = {}
  const props = env.split("\n");
  props.forEach(e => {
    const [prop, value] = e.split("=");
    if (value.includes("#")) res[prop.trim()] = value.toString().split("#")[0].trim().replaceAll('"', "");
    else res[prop.trim()] = value.toString().trim().replaceAll('"', "");
  });
  return res;
}

/**
 * @returns {ENV}
 */
let _load = () => load();
/**
 * @returns {ENV}
*/
_load.reload = () => {
  loaded = false;
  console.log("Reloaded environment variables from .env");
  return load();
}

function getDevAddress() {
  let res = "http://localhost:5173";
  if (env.DEV_SERVER_PUBLIC == "true") {
    if (env.DEV_SERVER_ADDRESS_PUBLIC) res = env.DEV_SERVER_ADDRESS_PUBLIC;
    else {
      console.error("Dev server set to public, but no DEV_SERVER_ADDRESS_PUBLIC entry provided in .env file");
      res = env.DEV_SERVER_ADDRESS_LOCAL ?? "http://localhost:5173";
    }
  } else res = env.DEV_SERVER_ADDRESS_LOCAL ?? "http://localhost:5173";
  return res;
}

export default _load;