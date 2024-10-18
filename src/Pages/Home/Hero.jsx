import React from 'react';
import { HeroContent } from '../../Constant';
import { Button } from "../../Components/ui/moving-border";
import { Heroimg } from '../../Assets/data';
import Whoweare from './Whoweare';
import { QuoteBtn } from './Quoteform';
import { Ourproduct } from './Ourproducts';
import Faq from './Faq';
import Contact from './Contact';

const Hero = () => {
    return (
        <>
            <section className="flex py-12 h-fit w-[100%] px-[5%] ">

                <div className="w-[70%] mx-auto flex flex-col items-center justify-center text-center">
                    <div className='w-[90%] z-10'>
                        {HeroContent.map((data, i) => (
                            <div key={i} className="mb-6">
                                <h1 className="text-[40px] font-bold bg-gradient-to-r from-[#0078ff] via-[#6569f1] to-[#ff00f9] bg-clip-text text-transparent transition-transform duration-300 hover:scale-105">
                                    {data.head}
                                </h1>
                                <p className="mt-2 text-gray-300  transition-opacity duration-300 hover:opacity-80">
                                    {data.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-5 mt-6">
                        <div>
                            <Button
                                borderRadius="1.75rem"
                                className="bg-white h-[37px] text-black border-neutral-200 "
                            >
                                Call Now
                            </Button>
                        </div>
                        <div className='z-10'>
                            <button className=' py-2 px-4 border rounded-3xl bg-gray-400 hover:bg-white hover:text-black'>Get in Touch</button>
                        </div>
                    </div>
                    <div className='mt-[8%] p-0'>
                    <QuoteBtn/>
                    </div>
                </div>
                <div className="z-10 mt-[3%]">
                    <img className='' src={Heroimg} alt="" />
                </div>
            </section>
            <Whoweare/>
            <Ourproduct/>
            <Contact/>
            <Faq/>
        </>
    );
};

export default Hero;
