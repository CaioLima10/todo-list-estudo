import type { Task } from "../models/task";
import { useEffect, useState } from "react";

export function useTasks() {
  const [tasks] = useState<Task[]>(() => {
    const stoged = localStorage.getItem('tasks')
  
    if(!stoged) {
      return []
    }

    return JSON.parse(stoged)
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  })


  return {
    tasks,
    tasksCount: tasks.length,
    concluidedTasksCount: tasks.filter((task) => task.concluided).length
  }
}