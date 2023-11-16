export function Body(props) {
  return (
    <div style={{
      paddingLeft: "var(--side-width)",
      paddingTop: "var(--top-height)",
    }}>
      {props.children}
    </div>
  )
}