import { TaskList } from "@/components/TaskList";

export default function HomePage() {
  return (
    <div>
  <TaskList tasks={["reading","writing","sleeping"]}/>
    </div>
  )
}
