"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-30 rounded-3xl text-white py-20 px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-6"
        >
          <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
            Your <span className="text-orange-500">&quot;Personal&quot;</span>{" "}
            Task Management Hub
          </h1>

          <p className="mt-5 max-w-xl text-base sm:text-lg text-zinc-300">
            Organize, track, and complete your daily tasks — all in one place.
            <br />
            Add new tasks, update progress, and stay focused with smart filters
            and a clean, minimal interface.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-white/95 px-6 py-3 text-sm sm:text-base font-semibold text-gray-900 shadow hover:bg-white"
            >
              Browse Task
            </Link>
            <Link
              href="/providers"
              className="text-sm font-semibold text-orange-400 hover:text-orange-300"
            >
              Become a Provider
            </Link>
          </div>

          <div className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-300">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-orange-500 ring-4 ring-orange-500/20" />
            18k+ bookings completed with 4.9 average rating
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-none"
        >
          <div className="relative w-full max-w-md aspect-square sm:aspect-[4/3] lg:max-w-lg">
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image
                src="https://i.ibb.co.com/SwBwfW1s/i-Stock-1309046331111.webp"
                alt="Community Services Illustration"
                fill
                priority
                className="object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
