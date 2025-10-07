"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTaskStore } from "@/store/taskStore";
import { v4 as uuidv4 } from "uuid";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // Added Card component

// Zod Schema
const schema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  status: z.enum(["Pending", "In Progress", "Completed"]),
});

export default function AddTaskForm() {
  const { addTask } = useTaskStore();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    // Added 'as const' to ensure correct type for status default
    defaultValues: { title: "", description: "", status: "Pending" as const }, 
  });

  const onSubmit = (values: z.infer<typeof schema>) => {
    addTask({
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      ...values,
      // Status field is correctly typed and included
    });
    form.reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 sm:p-6 lg:p-8 ">
      <Card className="w-full max-w-xl shadow-2xl transition-shadow duration-300 hover:shadow-primary/50 dark:hover:shadow-primary/30">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary">
            Add New Task
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            {/* Added Card and styling for Professional Look */}
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* 1. Title Field */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task Title</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Write Task title hear..." 
                        {...field} 
                        className="transition-colors duration-200 focus-visible:ring-primary/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* 2. Description Field */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe the task and its requirements..." 
                        {...field} 
                        rows={4} 
                        className="resize-none transition-colors duration-200 focus-visible:ring-primary/50"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* 3. Status Dropdown */}
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger className="transition-colors duration-200 focus:ring-primary/50">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Pending" className="text-red-400">
                             Pending
                          </SelectItem>
                          <SelectItem value="In Progress" className="text-yellow-400">
                            In Progress
                          </SelectItem>
                          <SelectItem value="Completed" className="text-green-400">
                            Completed
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* 4. Submit Button */}
              <Button 
                type="submit" 
                className="w-full h-10 text-lg tracking-wide bg-primary hover:bg-primary/90 transition-all duration-300 ease-in-out transform hover:scale-[1.01]"
              >
                Create Task
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}