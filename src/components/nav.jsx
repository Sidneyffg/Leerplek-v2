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
        <CreateBtn />
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

export function CreateBtn(props) {
  const [popupActive, setPopupActive] = createSignal(false);

  return (
    <div className="create-btn" style={{
      position: "relative",
      width: "12rem"
    }}>
      <div style={{
        ...layout.flexRow,
        justifyContent: "center",
        height: "3rem",
        width: "12rem",
        gap: "0.5rem",
        background: "var(--accent)",
        borderRadius: "1.5rem",
        paddingInline: "1.5rem",
        cursor: "pointer",
      }} onClick={() => setPopupActive(e => !e)}>
        <h6>Create</h6>
        <Icon icon="expand_more" />
      </div>
      <div className="create-popup" style={{
        ...layout.flexColumn,
        gap: "0.5rem",
        position: "fixed",
        top: "5rem",
        right: "1rem",
        width: "12rem",
        height: () => popupActive() ? "calc(3 * 2.5rem)" : "0",
        background: "var(--surface)",
        borderRadius: "1.5rem",
        padding: () => popupActive() ? "1rem" : "0 1rem",
        overflow: "hidden",
        transition: "height .3s ease, padding .3s ease"
      }}>
        <IconLink href="#" icon="article">Set</IconLink>
        <IconLink href="#" icon="groups">Groep</IconLink>
      </div>
    </div>
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