import { Container } from "../components/container/container";
import Logo from "../assets/image/logo-todo-list.svg?react"
import { Icon } from "../components/icon/icon";

export function Header() {
  return(
    <Container as="header">
      <Icon svg={Logo} />
    </Container>
  )
}