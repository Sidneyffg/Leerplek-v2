import { renderToHTML, renderToTree } from "@honeyjs/dom";
import { dangerouslySkipEscape, escapeInject } from "vike/server";

/** 
 * @param {import("vike/types").PageContext} pageContext 
 */
async function render(pageContext) {
  const { Page, pageProps, exports } = pageContext;
  let pageHTML = "";
  // cache results?
  if (Page) pageHTML = renderToHTML(Page);
  /* if (exports.Options) {
    if (!(exports.Options.accessLevel >= 1 && pageContext.user && pageContext.user.accessLevel == exports.Options.accessLevel)) return escapeInject`{"msg": "nee"}`;
  } */

  return escapeInject`
  <!DOCTYPE html>
  <html lang="en" dir="ltr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Leerplek</title>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0" />

      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#8C69C6" />
    </head>
    <body>
      <div id="app">${dangerouslySkipEscape(pageHTML)}</div>
    </body>
  </html>
  `
}

export { render }

// Properties on pagecontext to pass to the client pages
export const passToClient = [
  "user",
  "config"
]