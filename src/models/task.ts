type TaskState = "creating" | "created"

export interface Task {
  id: string
  title: string
  concluided?: boolean
  state?: TaskState

}