import TaskList from "@/components/TaskList";
import AddTaskForm from "./addTasks/page"; // Assuming this path is correct
import HeroSection from "@/components/HeroSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import { Card } from "@/components/ui/card"; // Import Card for clean layout

export default function Home() {
  return (
    <section className="mx-auto p-4 sm:p-6 lg:p-8">
      {/* 1. Hero Section */}
      <search>
        <HeroSection />
      </search>

      <div className="grid grid-cols-12 gap-6 mt-8 md:mt-12">
        <div className="col-span-12 lg:col-span-4">
          <Card className="p-4 shadow-xl">
            <AddTaskForm />
          </Card>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <TaskList />
        </div>
      </div>

      <section className="mt-12">
        <WhyChooseUsSection />
      </section>
    </section>
  );
}
