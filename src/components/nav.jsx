import "./nav.css";
import { Icon } from "./icons";
import { createID } from "@/js/utils";

/**
 * @type {React.CSSProperties}
 */
const flexRow = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center"
}

export function Nav() {
  return (
    <>
      <nav className="side"></nav>
      <nav className="top">
        <div className="filler"></div>
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
      width: "20rem",
      background: "var(--surface)",
      borderRadius: "1.5rem",
      padding: ".5rem 1rem",
      ...flexRow
    }}>
      <Icon icon="search" />
      <input type="text" id={id} placeholder="Search..." />
    </label>
  )
}

export function Account(props) {
  return (
    <div style={{
      height: "3rem",
      width: "3rem",
      borderRadius: "1.5rem",
      background: "var(--surface)"
    }}>

    </div>
  )
}