export function Body(props) {
  return (
    <div style={{
      paddingLeft: "calc(var(--side-width) + 1rem)",
      paddingTop: "var(--top-height)",
    }}>
      {props.children}
    </div>
  )
}