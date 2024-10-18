"use client";
import React from "react";
import { motion } from "framer-motion";

// Transition configuration for animations
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// MenuItem Component
export const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:opacity-[0.9]"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-darkblue-default backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2]shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

// Menu Component
export const Menu = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full bg-darkblue-default border  shadow-input flex items-center  h-[60px]"
    >
      {children}
    </nav>
  );
};

// ProductItem Component
export const ProductItem = ({ title, description, href, src }) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
        width={140} // Add width directly for the image
        height={70} // Add height directly for the image
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-white">
          {title}
        </h4>
        <p className="text-gray-300 text-sm max-w-[10rem]">
          {description}
        </p>
      </div>
    </a>
  );
};

// HoveredLink Component
export const HoveredLink = ({ children, ...rest }) => {
  return (
    <a
      {...rest}
      className="text-gray-400 hover:text-white"
    >
      {children}
    </a>
  );
};
