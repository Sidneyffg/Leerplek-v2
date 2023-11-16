import "./nav.css";
import { Icon } from "./icons";
import * as fonts from "#src/styles/fonts";
import * as layout from "#src/styles/layout";

import { createID } from "#src/js/utils";
import { createSignal } from "@honeyjs/dom";

export function Nav() {
  return (
    <>
      <nav className="side"></nav>
      <nav className="top">
        <Search />
        <Account />
      </nav>
    </>
  )
}

export function Search(props) {
  const id = createID();
  return (
    <label for={id} style={{
      height: "3rem",
      width: "min(calc(100% - 4rem), 30rem)",
      background: "var(--surface)",
      borderRadius: "1.5rem",
      padding: ".5rem 1rem",
      ...layout.flexRow
    }}>
      <Icon icon="search" />
      <input type="text" id={id} placeholder="Search" style={{
        background: "transparent",
        border: "none",
        outline: "none",
        width: "calc(100% - 2rem)",
        display: "block",
        height: "100%",
        paddingLeft: ".5rem",
        ...fonts.body
      }} />
    </label>
  )
}

export function Account(props) {
  const [active, setActive] = createSignal(false);
  return (
    <div style={{
      height: "3rem",
      width: "3rem",
      borderRadius: "1.5rem",
      background: () => active() == true ? "var(--accent)" : "var(--surface)"
    }} onClick={() => setActive(!active())}>
      {() => "H"}
    </div>
  )
}