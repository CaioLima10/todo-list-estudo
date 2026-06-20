import { Badge } from "../components/badge/badge";
import { Text } from "../components/text/text";

export function TaskSummary() {
  return(
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Text variant={"body-sm-semibold"} className="text-gray-300">Tarefas criadas</Text>
        <Badge variant={"primary"}>5</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant={"body-sm-semibold"} className="text-gray-300">Concluidas</Text>
        <Badge variant={"secondary"}>2 de 5</Badge>
      </div>
    </div>
  )
}