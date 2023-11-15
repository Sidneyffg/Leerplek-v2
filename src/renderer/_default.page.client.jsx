import { renderToDom, hydrateDom } from "@honeyjs/dom";

/** 
 * @param {import("vike/types").PageContext} pageContext 
 */
async function render(pageContext) {
  const { Page } = pageContext;
  const root = document.querySelector("#app") ?? document.querySelector("#root");

  if (root.innerHTML === '' || !pageContext.isHydration) {
    // SPA (Render page)
    renderToDom(root, Page);
  } else {
    // SSR (Hydrate page)
    hydrateDom(root, Page);
  }
}

export { render }