"use client";

import React from "react";
import { Clock, CheckSquare, Edit3, Trash2, Bell, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";


const PRIMARY_COLOR = "text-orange-400 dark:text-indigo-400";
const ACCENT_BG = "bg-indigo-600 dark:bg-indigo-500";
const ACCENT_HOVER_BG = "hover:bg-indigo-700 dark:hover:bg-indigo-600";

// Define Task-related benefits
const benefits = [
  {
    title: "Quick Task Creation",
    desc: "Easily add tasks with title, description, and status in just a few clicks. Keep your work organized and stay productive.",
    icon: <Clock className="w-5 h-5 text-white" />,
  },
  {
    title: "Edit & Update Tasks",
    desc: "Modify task details whenever needed. Change titles, descriptions, or status instantly without hassle.",
    icon: <Edit3 className="w-5 h-5 text-white" />,
  },
  {
    title: "Track Task Status",
    desc: "Filter tasks by status: Pending, In Progress, or Completed. Stay on top of your workflow and deadlines.",
    icon: <CheckSquare className="w-5 h-5 text-white" />,
  },
  {
    title: "Delete with Confirmation",
    desc: "Remove tasks safely with a confirmation prompt to prevent accidental deletions.",
    icon: <Trash2 className="w-5 h-5 text-white" />,
  },
  // Note: Since 'Notifications & Reminders' is a bonus feature, let's keep it.
  {
    title: "Persist Data (Local Storage)",
    desc: "Your tasks are saved locally in your browser, so they're safe even after refreshing or closing the tab.",
    icon: <Zap className="w-5 h-5 text-white" />,
  },
];

export default function WhyChooseUsSection() {
  return (
   
    <section className="py-16 md:py-24 max-w-[1680px] mx-auto">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 📌 Responsive Grid Layout: 1 column on mobile, 2 columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Content (Sticky on Large Screens) */}
          <div className="lg:sticky lg:top-24 lg:pt-0">
            <p className={`${PRIMARY_COLOR} font-semibold text-base mb-3 flex items-center gap-2 uppercase tracking-widest`}>
              <span className={`w-2 h-2 rounded-full ${ACCENT_BG}`}></span>
              TaskFlow Features
            </p>

            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-8 text-gray-900 dark:text-white">
              Stay Organized, Track Tasks, and <span className={PRIMARY_COLOR}>Boost Productivity</span> Effortlessly
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              TaskFlow helps you manage your daily tasks efficiently with **no backend required**. Add new tasks, update statuses, and track progress all in one place. Focus on what matters and achieve your goals faster.
            </p>

            {/* 📌 shadcn/ui Button Style */}
            <Button asChild className={`h-12 text-lg px-8 rounded-lg ${ACCENT_BG} ${ACCENT_HOVER_BG} transition-all duration-300 transform hover:scale-[1.02] shadow-xl`}>
              <a href="/tasks">
                Get Started
              </a>
            </Button>
          </div>

          {/* Right Benefits (Timeline Style using Flex/Border) */}
          <div className="pt-8 relative">
            
            {/* 📌 Vertical Separator Line (Simulating Timeline) */}
            <div className={`absolute left-5 top-0 bottom-0 w-1 ${ACCENT_BG} opacity-20 hidden sm:block`}></div>

            <div className="space-y-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex relative pl-10">
                  
                  {/* 📌 Icon Circle (Timeline Dot) */}
                  <div className={`absolute left-0 top-0 w-10 h-10 ${ACCENT_BG} rounded-full flex items-center justify-center shadow-2xl z-10 border-4 border-white dark:border-gray-900`}>
                    {benefit.icon}
                  </div>
                  
                  {/* Content Card */}
                  <Card className="flex-1 ml-6 p-6 shadow-2xl transition duration-300 border-2 border-transparent hover:border-indigo-400 dark:bg-gray-800 dark:border-gray-700">
                    <CardContent className="p-0">
                        <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                            {benefit.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 text-base">{benefit.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}