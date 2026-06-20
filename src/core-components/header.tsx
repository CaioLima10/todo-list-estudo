import { Container } from "../components/container/container";
<<<<<<< HEAD
import Logo from '../assets/image/logo-todo-list.svg'

export function Header() {
  return(
    <Container className="mt-8 md:mt-4">
      <img src={Logo} alt="Logo" className="h-9 md:h-12"/>
=======
import Logo from "../assets/image/logo-todo-list.svg?react"
import { Icon } from "../components/icon/icon";

export function Header() {
  return(
    <Container as="header" className="mt-3 md:mt-20">
      <Icon svg={Logo} />
>>>>>>> e091c2bce80ddc24a097da463c0b11f90e655907
    </Container>
  )
}