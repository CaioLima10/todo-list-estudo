import { Text } from "./components/text/text";
import LogoTodoList from "./assets/image/logo-todo-list.svg?react"
import IconSpinner from "./assets/image/spinner.svg?react"
import IconPlus from "./assets/image/plus.svg?react"
import { Icon } from "./components/icon/icon";
import { Badge } from "./components/badge/badge";
import { Button } from "./components/button/button";

export function App() {
  return (
    <>
      <Text as="h1" children="hello world" variant={"body-md-regular"}/>
      <Text  children="hello world" variant={"bold-md"}/>
      <Text as="h1" children="hello world" variant={"body-sm-semibold"}/>
      <Icon svg={LogoTodoList}/>
      <Icon svg={IconSpinner}/>
      <Badge variant="primary" size="sm">5</Badge>
      <Badge variant="secondary" size="sm">2 de 5</Badge>
      <Button disabled icon={IconPlus}>Criar</Button>
      <Button>Criar</Button>
    </>
  )
}

