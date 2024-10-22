import React from 'react';
import { HeroContent} from '../../Constant';
import { Button } from "../../Components/ui/moving-border";
import { Heroimg } from '../../Assets/data';
import Whoweare from './Whoweare';
import { QuoteBtn } from './Quoteform';
import Faq from './Faq';
import Contact from './Contact';
import { Ourproduct } from './Ourproducts';

const Hero = () => {
    return (
        <>
            <section className="flex flex-col md:flex-row sm:pt-[5%] pt-[21%] h-fit w-full px-5">

                <div className="w-full md:w-2/3 mx-auto flex flex-col items-center justify-center text-center">
                    <div className='w-11/12 z-10'>
                        {HeroContent.map((data, i) => (
                            <div key={i} className="mb-6">
                                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0078ff] via-[#6569f1] to-[#ff00f9] bg-clip-text text-transparent transition-transform duration-300 hover:scale-105">
                                    {data.head}
                                </h1>
                                <p className="mt-2 text-gray-300 transition-opacity duration-300 hover:opacity-80">
                                    {data.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row justify-center gap-5 mt-6">
                        <div>
                            <Button
                                borderRadius="1.75rem"
                                className=" h-[37px] text-white hover:font-extrabold"
                            >
                                Call Now
                            </Button>
                        </div>
                        <div className='z-10'>
                            <button className="cssbuttons-io">
                                <span>
                                    Get in Touch
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className='mt-8 p-0'>
                        <QuoteBtn />
                    </div>
                </div>
                
                <div className="z-10 mt-6 md:mt-0 md:ml-6">
                    <img className="w-full h-auto" src={Heroimg} alt="" />
                </div>
            </section>
            <Whoweare />
            <Ourproduct/>
            <Contact />
            <Faq />
        </>
    );
};

export default Hero;
