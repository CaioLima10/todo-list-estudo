import { Text } from "./components/text/text";
import LogoTodoList from "./assets/image/logo-todo-list.svg?react"
import IconSpinner from "./assets/image/spinner.svg?react"
import { Icon } from "./components/icon/icon";

export function App() {
  return (
    <>
      <Text as="h1" children="hello world" variant={"body-md-regular"}/>
      <Text  children="hello world" variant={"bold-md"}/>
      <Text as="h1" children="hello world" variant={"body-sm-semibold"}/>
      <Icon svg={LogoTodoList}/>
      <Icon svg={IconSpinner}/>
    </>
  )
}

