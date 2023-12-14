import "#src/styles/global.css";
import { Nav } from "#src/components/nav";
import { Body } from "#src/components/body";

export function Page(props) {
  return (
    <>
      <Nav collapsed="true">
        <h1>Agenda</h1>
      </Nav>
    </>
  )
}