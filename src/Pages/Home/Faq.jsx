import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FaqContent } from "../../Constant";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

export default function Faq(className) {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className={`py-[30px] md:px-[80px] px-[20px] 2xl:px-[12%] ${className}`}>
      <div>
        <h1 className='text-[24px] font-bold text-center text-white'>FAQ</h1>
      </div>
      <motion.div
        initial={{
          y: -200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
        }}
        className="py-[40px] md:mt-[40px] mt-[10px]"
      >
        {FaqContent.map((data, i) => (
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Initial state for each accordion item
            whileInView={{ opacity: 1, y: 0 }} // Animation when in view
            transition={{ duration: 0.5, delay: i * 0.1 }} // Delay each item slightly
            key={data.id} // Use data.id instead of index for unique key
          >
            <Accordion open={open === data.id}>
              <div className='flex justify-between items-center text-white py-[10px]' onClick={() => handleOpen(data.id)}>
                <AccordionHeader className="md:text-[1.3rem] text-[1rem]">
                  {data.question}
                </AccordionHeader>
                <ChevronDownIcon aria-hidden="true" className="h-8 w-8 text-white float cursor-pointer" />
              </div>
              <AccordionBody className='md:text-[1.2rem] text-[1rem] mb-4 text-gray-300'>
                {data.answer}
              </AccordionBody>
            </Accordion>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
