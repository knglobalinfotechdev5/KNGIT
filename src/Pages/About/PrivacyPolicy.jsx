import React from 'react'
import { motion } from "framer-motion";
import { LampContainer } from '../../Components/ui/lamp'
import { Privacy } from '../../Constant';

const PrivacyPolicy = () => {
  return (
    <>
    <LampContainer>
      <section>
      <div className="flex flex-col items-center justify-center sm:pt-[15%] pt-[55%] w-full h-full p-6 sm:px-8 md:px-10 lg:px-12">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-2 sm:bg-gradient-to-br from-slate-300 to-slate-500 bg-white py-4 bg-clip-text text-center text-3xl sm:font-medium font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Privacy Policy
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 sm:bg-gradient-to-br from-slate-300 to-slate-500 bg-white py-4 bg-clip-text tracking-tight"
        >
        {Privacy.map((data,i) => {
        return(
            <>
            <div>
                <img src={data.img} alt="" />
            </div>
            <div className='text-white'>
                <div>
                    <h1>{data.title}</h1>
                    <br />
                </div>
                <div>
                    <p>{data.content}</p>
                    <br /><br />
                </div>
            </div>
            </>
        )
    })}</motion.h1>
      </div>
      </section>
      
    </LampContainer>
    
    </>
  )
}

export default PrivacyPolicy