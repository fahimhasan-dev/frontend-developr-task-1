"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // shadcn/ui Button component

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Each child element will animate with a delay
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative flex items-center justify-center min-h-[calc(100vh-180px)] bg-gray-50 dark:bg-gray-950 py-10 px-4 overflow-hidden">
      {/* Background Gradients/Shapes (Optional for a more dynamic look) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:from-primary/10" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-teal-300/20 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:from-teal-600/10" />
      </div>

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-50 leading-tight mb-4"
          variants={itemVariants}
        >
          Effortless task management,{" "}
          <span className="text-yellow-500 dark:text-yellow-400">anytime</span>
        </motion.h1>

        {/* Subheading/Description */}
        <motion.p 
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Manage tasks and projects easily with an all-in-one platform designed for seamless collaboration.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8"
          variants={itemVariants}
        >
          <Button 
            size="lg" 
          
          >
            Request a Demo
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary text-primary hover:bg-primary/10 dark:border-primary-foreground dark:text-primary-foreground dark:hover:bg-primary/20 font-semibold text-lg px-8 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            Contact Sales
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}