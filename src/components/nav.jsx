import "./nav.css";
import { Icon, IconLink, IconLinkAccentHover } from "./icons";
import * as fonts from "#src/styles/fonts";
import * as layout from "#src/styles/layout";

import { createID } from "#src/js/utils";
import { createEffect, createSignal, createRef } from "@honeyjs/dom";

export function Nav() {
  return (
    <>
      <nav className="side">
        <div className="branding"></div>
        <div className="links">
          <IconLink href="/" icon="home">Start</IconLink>
          <IconLink href="#" icon="calendar_month">Agenda</IconLink>
          <IconLink href="#" icon="bar_chart">Cijfers</IconLink>
          <IconLink href="#" icon="check_circle">Afwezigheid</IconLink>
          <IconLink href="#" icon="school">Vakken</IconLink>
          <IconLink href="#" icon="article">Materiaal</IconLink>
          <IconLink href="#" icon="groups">Groepen</IconLink>
        </div>
        <div className="links-bottom">
          <IconLink href="#" icon="notifications">Berichten</IconLink>
        </div>
        <Account />
      </nav>
      <nav className="top">
        <Search />
      </nav>
    </>
  )
}

export function Search(props) {
  const id = createID();
  const inputRef = createRef();

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
      }}
        ref={inputRef}
        onKeyUp={() => console.log(inputRef().value)} />
    </label>
  )
}

export function Account(props) {
  return (
    <a href="#" className="account" id="account__nav__btn" style={{
      ...layout.flexRow,
      gap: ".5rem",
      flexShrink: 0,
      cursor: "pointer",
      position: "relative"
    }}>
      <div className="profile" style={{
        height: "3rem",
        width: "3rem",
        borderRadius: "1.5rem",
        flexShrink: 0,
        background: "var(--surface)"
      }}>

      </div>
      <div className="name" style={{
        ...layout.flexColumn,
        width: "100%",
        height: "3rem"
      }}>
        <h6 style={{
          marginBottom: "-0.4rem"
        }}>Robin de Vos</h6>
        <span>4VE</span>
      </div>
    </a>
  )
}