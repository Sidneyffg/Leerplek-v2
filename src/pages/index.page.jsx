import "#src/styles/global.css";
import { Nav } from "#src/components/nav";
import { Body } from "#src/components/body";
import { createEffect, createSignal } from "@honeyjs/dom";

export function Page(props) {
  const [text, setText] = createSignal("Hello world!");
  return (
    <>
      <Nav>
        <h1>{text}</h1>
        <p>Test</p>
      </Nav>
    </>
  )
}

/* export const Options = {
  accessLevel: 1
} */