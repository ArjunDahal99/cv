"use client"
import React, { useEffect } from 'react';
import gsap from 'gsap';

const TypewriterEffect = () =>
{
    useEffect(() =>
    {
        const timeline = gsap.timeline({ repeat: -1 });
        const textElements = document.querySelectorAll('.typewriter-text');

        gsap.set(textElements, { autoAlpha: 0, y: 80, rotationX: 90 });

        textElements.forEach((textElement, index) =>
        {
            timeline.to(textElement, { duration: 0.4, autoAlpha: 1, y: 0, rotationX: 0, ease: 'power2.inOut' })
                .to(textElement, { duration: 0.4, autoAlpha: 0, y: -80, rotationX: -90, ease: 'power2.inOut' }, `+=${index === textElements.length - 1 ? 2 : 0.5}`);
        });
    }, []);

    return (
        <div className=" flex  w-full  justify-center items-center ">

            <div className=" relative  lg:w-[180px]  max-md:w-[150px] max-sm:w-[100px] text-[3rem]  max-sm:text-[2rem] flex justify-center items-center  h-full  ">
                {['Make', 'Edit', 'Save', 'Share'].map((text, index) => (
                    <p key={index} className='  absolute   typewriter-text '>{text} </p>
                ))}

            </div>
            <div className=" flex  items-center  text-[3rem]   max-sm:text-[2rem]   gap-x-4">
                <p className=''>Your</p>
                <p className='   font-[900]  bg-gradient-to-r  translate-y-[-6px] max-sm:text-[3rem]  text-[4rem] from-purple-700  via-pink-600 to-blue-600  text-transparent bg-clip-text animate-gradient'> CV</p>
            </div>


        </div>
    );
}

export default TypewriterEffect;
