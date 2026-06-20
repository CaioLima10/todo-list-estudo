import { NavLink } from "react-router";

export function Footer() {
  return(
    <footer className="mt-8">
        <nav className="flex items-center justify-center gap-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/componentes">Componentes</NavLink>
        </nav>
    </footer>
  )
}