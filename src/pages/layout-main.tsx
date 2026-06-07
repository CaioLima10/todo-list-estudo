import { NavLink, Outlet } from "react-router";
import { Container } from "../components/container/container";

export function LayoutMain() {
  return (
    <>
      <Container>
          <Outlet/>
        <footer>
          <nav className="flex items-center justify-center gap-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/componentes">Componentes</NavLink>
          </nav>
        </footer>
      </Container>
    </>
  )
}