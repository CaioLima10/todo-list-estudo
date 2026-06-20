import { ButtonIcon } from "../components/buttonIcon/button-icon";
import { Card } from "../components/card/card";
import { InputCheckbox } from "../components/inputCheckbox/input-checkbox";
import { Text } from "../components/text/text";

import TrashIcon from "../assets/image/trash.svg?react";
import PencilIcon from "../assets/image/pencil.svg?react";
import PlusIcon from "../assets/image/plus-simple.svg?react";
import XIcon from "../assets/image/x.svg?react";

import { useState } from "react";
import { InputText } from "../components/input/input-text";

export function TaskItem() {

  const [ isEditing, setIsEditing ] = useState(false)

  function handleEditTask() {
    setIsEditing(true)
  }

  function handleExitEditTask() {
    setIsEditing(false)
  }

  return(
    <Card cardSize={"md"}>
      { !isEditing ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <InputCheckbox type="checkbox"  />
            <Text>Levar o dog pra passear</Text>
          </div>
          <div>
            <ButtonIcon variant={"tertiary"}  icon={TrashIcon}/>
            <ButtonIcon variant={"tertiary"}  icon={PencilIcon} onClick={handleEditTask}/>
          </div>
        </div>
      ): (
        <div className="flex items-center justify-between gap-4">
          <div className="flex w-full">
            <InputText className="flex flex-1"/>
          </div>
          <div className="flex gap-1">
            <ButtonIcon variant={"secondary"}  icon={XIcon} onClick={handleExitEditTask}/>
            <ButtonIcon variant={"primary"}  icon={PlusIcon} />
          </div>
        </div>

      ) }
    </Card>
  )
}