"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../../Components/ui/lamp";
import { Aboutus } from "../../Constant";

export function About() {
  return (
    <LampContainer>
      <div className="flex flex-col items-center justify-center sm:pt-[15%] pt-[55%] w-full h-full p-6 sm:px-8 md:px-10 lg:px-12"> {/* Centering content */}
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 sm:bg-gradient-to-br from-slate-300 to-slate-500 bg-white py-4 bg-clip-text text-center text-3xl sm:font-medium font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl" // Responsive text size
        >
          About Us
        </motion.h1>
        <div className="text-white text-justify indent-10 my-4">
          {Aboutus.map((data, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + i * 0.1, // Staggered animations for paragraphs
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="my-2" // Added margin for spacing
            >
              {data.text}
            </motion.p>
          ))}
        </div>
      </div>
      <div className="bg-slate-950">
  <motion.div
    initial={{ opacity: 0, y: 50 }} // Start off-screen and transparent
    whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5,}} // Animation duration and easing
    viewport={{ once: true }} // Animation will happen once when it comes into view
    className="text-center py-4"
  >
    <p className="text-white text-xl sm:text-2xl md:text-3xl"> {/* Responsive text size */}
      Why Choose Us
    </p>
  </motion.div>
</div>

    </LampContainer>
  );
}
