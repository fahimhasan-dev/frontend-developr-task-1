import TaskList from "@/components/TaskList";
import AddTaskForm from "./addTasks/page";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <section>
      <search>
        <HeroSection></HeroSection>
      </search>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <AddTaskForm></AddTaskForm>
        </div>

        <div className="col-span-8">
          <TaskList></TaskList>
        </div>
      </div>
    </section>
  );
}
