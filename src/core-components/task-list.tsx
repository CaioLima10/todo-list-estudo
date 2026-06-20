import { TaskItem } from "./task-item";
import PlusIcon  from "../assets/image/plus.svg?react"
import { Button } from "../components/button/button";
import { useTasks } from "../hooks/use-tasks";

export default function TaskList () {
  const { tasks } = useTasks()

  console.log(tasks)

  return (
    <section className="flex flex-col space-y-3">
      <div >
        <Button className="w-full" variant={"primary"} icon={PlusIcon}>
          Nova Tarefa
        </Button>
      </div>
      <TaskItem/>
      <TaskItem/>
      <TaskItem/>
      <TaskItem/>
    </section>
  )
}