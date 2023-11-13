/**
 * @param {object} props
 * @param {string} props.icon
 * @returns 
 */
export function Icon(props) {
  return (
    <span class="material-symbols-rounded">
      {props.icon}
    </span>
  )
}