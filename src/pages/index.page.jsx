import "#src/styles/global.css";
import { Nav } from "#src/components/nav";
import { Body } from "#src/components/body";
import { createEffect, createSignal } from "@honeyjs/dom";

export function Page(props) {
  const [text, setText] = createSignal("Hello world!");
  return (
    <>
      <Nav />
      <Body>
        <h1>{text}</h1>
        <p>Test</p>
      </Body>
    </>
  )
}