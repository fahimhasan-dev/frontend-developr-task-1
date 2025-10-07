"use client";

import { useState } from "react";
// Assuming useTaskStore and Task are defined in the store
import { useTaskStore } from "@/store/taskStore"; 
// Using Lucide icons for consistency with shadcn/ui
import { Edit, Trash2, Filter } from "lucide-react"; 
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// Import shadcn/ui components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
// Import the modal component you created
import EditTaskModal from "./EditTaskModal"; 

// 📌 Assume Task type is imported or defined
interface Task {
    id: string;
    title: string;
    description?: string;
    status: "Pending" | "In Progress" | "Completed";
    createdAt: string;
}

const MySwal = withReactContent(Swal);
// Ensure type safety for status filtering
const statuses: (Task["status"] | "All")[] = ["All", "Pending", "In Progress", "Completed"]; 

// Helper function to get status badge styling
const getStatusBadge = (status: Task["status"]) => {
  switch (status) {
    case "Pending":
      return { className: "bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-900/40 dark:text-amber-300", text: " Pending" };
    case "In Progress":
      return { className: "bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300", text: "In Progress" };
    case "Completed":
      return { className: "bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/40 dark:text-green-300", text: " Completed" };
    default:
      return { className: "bg-gray-100 text-gray-700 dark:bg-gray-700/50 dark:text-gray-300", text: status };
  }
};

export default function TaskList() {
  const { tasks, deleteTask } = useTaskStore();
  const [filter, setFilter] = useState<Task["status"] | "All">("All");

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((t) => t.status === filter);

  // Updated handleDelete to pass the task title for better UX
  const handleDelete = (id: string, title: string) => {
    MySwal.fire({
      title: "Confirm Deletion",
      html: <p>Are you sure you want to delete the task: <strong>{title}</strong>?</p>,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444", // Red 500
      cancelButtonColor: "#6B7280", // Gray 500
      confirmButtonText: "Yes, delete it!",
      customClass: {
        popup: 'dark:bg-gray-800 dark:text-white',
        title: 'dark:text-white',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask(id);
        toast.success("Task deleted successfully!", {
            style: {
                backgroundColor: '#16A34A', 
                color: 'white',
            }
        });
      }
    });
  };

  return (
    <Card className="w-full max-w-7xl mx-auto my-10 shadow-xl dark:bg-gray-800 transition-colors duration-300">
      <Toaster />
      
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <CardTitle className="text-3xl font-extrabold text-primary dark:text-teal-400">
            Task List
          </CardTitle>
          
          {/* Filter Dropdown (using shadcn/ui Select) */}
          <div className="flex items-center gap-3">
            <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <Select
              value={filter}
              onValueChange={(value) => setFilter(value as Task["status"] | "All")}
            >
              <SelectTrigger className="w-[150px] dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <SelectValue placeholder="Filter Status" />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-700 dark:text-white">
                {statuses.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {filteredTasks.length === 0 ? (
          <p className="text-gray-400 text-center py-12 text-lg italic">
            No tasks found under '{filter}' status.
          </p>
        ) : (
          <div className="overflow-x-auto border rounded-lg dark:border-gray-700">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider w-[25%]">Title</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider w-[40%] hidden md:table-cell">Description</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider w-[15%]">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider w-[10%] hidden lg:table-cell">Created</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider w-[10%]">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {filteredTasks.map((task) => {
                    const badge = getStatusBadge(task.status);
                    return (
                        <tr
                            key={task.id}
                            className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition duration-150"
                        >
                            <td className="py-3 px-4 font-medium text-gray-900 dark:text-gray-100 truncate max-w-xs">{task.title}</td>
                            <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400 hidden md:table-cell line-clamp-1 max-w-xs">{task.description || "N/A"}</td>
                            <td className="py-3 px-4">
                                <Badge className={badge.className}>
                                    {badge.text}
                                </Badge>
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400 hidden lg:table-cell">
                                {new Date(task.createdAt).toLocaleDateString()}
                            </td>
                            <td className="py-3 px-4 flex justify-center gap-2">
                                
                             
                                <EditTaskModal task={task} />
                                
                         
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                                    onClick={() => handleDelete(task.id, task.title)}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </td>
                        </tr>
                    );
                })}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}