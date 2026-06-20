import { Container } from "../components/container/container";
import TaskList  from "../core-components/task-list";
import { TaskSummary } from "../core-components/task-summary";

export function PageHome() {
  return(
    <Container as="article" className="space-y-3">
      <TaskSummary/>
      <TaskList/>
    </Container>
  )
}