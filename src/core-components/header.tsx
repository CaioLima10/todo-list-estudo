import { Container } from "../components/container/container";
import Logo from '../assets/image/logo-todo-list.svg'

export function Header() {
  return(
    <Container className="mt-8 md:mt-4">
      <img src={Logo} alt="Logo" className="h-9 md:h-12"/>
    </Container>
  )
}