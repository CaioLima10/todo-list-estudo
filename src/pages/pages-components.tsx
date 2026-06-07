import { Badge } from "../components/badge/badge";
import { Button } from "../components/button/button";
import { ButtonIcon } from "../components/buttonIcon/button-icon";
import { Card } from "../components/card/card";
import { Container } from "../components/container/container";
import { Icon } from "../components/icon/icon";
import { InputText } from "../components/input/input-text";
import { InputCheckbox } from "../components/inputCheckbox/input-checkbox";
import { Skeleton } from "../components/skeleton/skeleton";
import { Text } from "../components/text/text";

import LogoTodoList from "../assets/image/logo-todo-list.svg?react"
import IconSpinner from "../assets/image/spinner.svg?react"
import IconTrash from "../assets/image/trash.svg?react"
import IconPlus from "../assets/image/plus.svg?react"

export function PagesComponents() {
  return (
     <Container>
          <div>
            <Text as="h1" children="hello world" variant={"body-md-regular"}/>
            <Text  children="hello world" variant={"bold-md"}/>
            <Text as="h1" children="hello world" variant={"body-sm-semibold"}/>
            <Icon svg={LogoTodoList}/>
            <Icon svg={IconSpinner}/>
            <Badge variant="primary" size="sm">5</Badge>
            <Skeleton rounded={'full'} className="w-6 h-6"/>
            <Badge variant="secondary" size="sm">2 de 5</Badge>
            <Button disabled icon={IconPlus}>Nova tarefa</Button>
            <Button icon={IconPlus}>Nova tarefa</Button>
    
            <ButtonIcon icon={IconTrash}/> 
            <ButtonIcon disabled icon={IconTrash}/> 
            <ButtonIcon  icon={IconTrash} variant="secondary"/> 
            <ButtonIcon  icon={IconTrash} variant="tertiary"/> 
            <Card className="w-143 h-24" >
              <InputText placeholder="Digite seu nome" />
              <InputCheckbox type="checkbox"/>
            </Card>
          </div>
          <div className={'flex flex-col gap-2'}>
            <Skeleton rounded={'full'} className={'w-5 h-5'}/>
            <Skeleton className={'w-5 h-5'}/>
            <Skeleton className={'w-5 h-5'}/>
          </div>
        </Container>
  )
}