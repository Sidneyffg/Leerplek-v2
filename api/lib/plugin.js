const fileRegex = /\.(page)\.(jsx|js)$/;

/**
 * @type {import("vite").Plugin}
 */
export default function plugin(options) {
  return {
    name: "file-hmr-transform",
    enforce: "pre",

    transform(src, id) {
      if (fileRegex.test(id)) {
        return {
          code: addHMR(src, id),
          map: null
        }
      }
    }
  }
}

//TODO: change render to not overwrite state
function addHMR(src, id) {
  return `
import { hydrateDom as __hydrate_dom, renderToDom as __render_dom } from "@honeyjs/dom";
${src}
// HMR module accept
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    if (!newModule.Page) return;
    const newCode = newModule.Page();
    __render_dom(document.querySelector("#app"), newCode);
  });
}
  `
}