import { NavLink, Outlet } from "react-router";
import { Container } from "./components/container/container";


export function LayoutMain(){
    return(
      <Container>
          <Outlet />
          <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/components"}>Components</NavLink>
          </nav>
      </Container>
    )
}