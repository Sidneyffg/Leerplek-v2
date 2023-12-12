import { flexRow } from "#src/styles/layout"

/**
 * @param {object} props
 * @param {string} props.icon
 * @param {React.CSSProperties} props.style
 * @returns 
 */
export function Icon(props) {
  return (
    <span class="material-symbols-rounded" style={props.style}>
      {props.icon}
    </span>
  )
}

/**
 * @param {object} props
 * @param {string} props.icon
 * @param {string} props.href
 * @param {string} props.target
 * @returns 
 */
export function IconLink(props) {
  return (
    <a href={props.href} target={props.target ?? "_parent"} style={{
      ...flexRow,
      gap: "0.5rem",
      height: "2.5rem",
      width: "100%",
      paddingInline: ".75rem",
      fontWeight: "700",
      fontSize: "20px",
      transition: "background .3s ease",
      borderRadius: ".6rem"
    }} className="IconLink">
      <Icon icon={props.icon} style={{
        fontSize: "1.5rem"
      }} />
      {props.children}
    </a>
  )
}

/**
 * @param {object} props
 * @param {string} props.icon
 * @param {string} props.href
 * @param {string} props.target
 * @returns 
 */
export function IconLinkAccent(props) {
  return (
    <a href={props.href} target={props.target ?? "_parent"} style={{
      ...flexRow,
      gap: "0.5rem",
      height: "2.5rem",
      width: "100%",
      paddingInline: ".75rem",
      fontWeight: "700",
      fontSize: "20px",
      transition: "color .3s ease",
      borderRadius: ".6rem"
    }} className="IconLinkAccent">
      <Icon icon={props.icon} style={{
        fontSize: "1.5rem"
      }} />
      {props.children}
    </a>
  )
}