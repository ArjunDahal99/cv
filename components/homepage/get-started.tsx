import React from 'react'
import { Button } from '../ui/button'

const GetStarted = () =>
{
    return (
        <>
            <div className=" text-center  pt-[2rem] ">
                <h1 className=' text-center dark:opacity-80 text-[2rem] max-sm:text-[1.3rem] drop-shadow-sm'>Effortless Elegance, Seamless Sharing</h1>
                <h1 className='dark:opacity-70 text-sm text-purple-500 max-sm:hidden'>
                    Your Personalized Hub for Effortless Expression,
                    Seamless Organization, and Amplified Connectivity !
                </h1>
                <div className=" flex justify-center pt-[2rem] drop-shadow-md">
                    <button className="btn bg-secondary p-2  button-outline button-one">
                        <span className=' font-bold  px-4 '>Get Started</span>
                    </button>

                </div>
            </div>
        </>
    )
}

export default GetStarted