import "./nav.css";
import { Icon, IconLink, IconLinkAccent } from "./icons";
import * as fonts from "#src/styles/fonts";
import * as layout from "#src/styles/layout";

import { Document } from "#src/main";
import { createID } from "#src/js/utils";
import { createEffect, createSignal, createRef } from "@honeyjs/dom";

export function Nav() {
  return (
    <nav>
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
        <Account />
      </nav>
      <nav className="top">
        <div className="center">
          <Search />
        </div>
        <CreateBtn />
      </nav>
    </nav>
  )
}

export function Search(props) {
  const id = createID();
  const inputRef = createRef();

  return (
    <label for={id} style={{
      height: "3rem",
      width: "min(calc(100%), 30rem)",
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
  Document.addEventListener("click", (e) => {
    const t = e.target;
    if (t.closest(".create-container") == null) setPopupActive(false);
  });

  return (
    <div className="create-container" style={{
      position: "relative",
      width: "12rem"
    }}>
      <div className="create-btn" style={{
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
        width: "16rem",
        height: () => popupActive() ? "calc(4 * 2.5rem)" : "0",
        background: "var(--surface)",
        borderRadius: "1.5rem",
        padding: () => popupActive() ? "1rem" : "0 1rem",
        overflow: "hidden",
        transition: "height .3s ease, padding .3s ease"
      }}>
        <IconLink href="/new/set" icon="article">Set</IconLink>
        <IconLink href="/new/group" icon="groups">Groep</IconLink>
        <IconLink href="/new/note" icon="description">Aantekening</IconLink>
      </div>
    </div>
  )
}

export function Account(props) {
  const [popupActive, setPopupActive] = createSignal(false);
  Document.addEventListener("click", (e) => {
    const t = e.target;
    if (t.closest(".account-container") == null) setPopupActive(false);
  });

  return (
    <div className="account-container" style={{
      position: "relative"
    }}>
      <div href="#" className="account-btn" id="account__nav__btn" style={{
        ...layout.flexRow,
        gap: ".5rem",
        flexShrink: 0,
        cursor: "pointer",
        position: "relative"
      }} onClick={() => setPopupActive(e => !e)}>
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
      </div>
      <AccountPopup active={popupActive} />
    </div>
  )
}

function AccountPopup(props) {
  return (
    <div className="account-popup" style={{
      ...layout.flexColumn,
      justifyContent: "flex-start",
      gap: "0.5rem",
      position: "fixed",
      bottom: "5rem",
      left: "1rem",
      height: () => props.active() ? "15rem" : "0",
      padding: () => props.active() ? "1rem" : "0 1rem",
      width: () => props.active() ? "20rem" : "14rem",
      background: "var(--surface)",
      borderRadius: "0.6rem",
      transition: "height .3s ease, padding .3s ease, width .3s ease",
      overflow: "hidden"
    }}>
      <a href="#" className="account-popup-profile" style={{
        ...layout.flexRow,
        gap: "0.5rem",
        marginBottom: "1rem",
        cursor: "pointer"
      }}>
        <div className="profile" style={{
          height: "3rem",
          width: "3rem",
          borderRadius: "1.5rem",
          flexShrink: 0,
          background: "var(--accent)",
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
      <IconLinkAccent href="#" icon="notifications">Berichten</IconLinkAccent>
      <IconLinkAccent href="#" icon="settings">Instellingen</IconLinkAccent>
      <IconLinkAccent href="/logout" icon="logout">Uitloggen</IconLinkAccent>
    </div>
  )
}