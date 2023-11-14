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
  }
}

export { render }

/**
 * @param {Function} component 
 */
function renderToDom(root, component) {
  const contents = component();
  root.innerHTML = "";

  if (Array.isArray(contents)) {
    contents.flat(Infinity).forEach(child => {
      root.appendChild(child);
    })
  } else {
    root.appendChild(contents);
  }
}