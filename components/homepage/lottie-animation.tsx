"use client"
import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import animationData from '@/public/animation.json'
const LottieAnimation = () =>
{
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() =>
    {
        setIsMounted(true)
    }, [])

    if (!isMounted)
    {
        return null
    }
    return (
        <div className=" w-[20vw] max-md:w-full h-[500px]">
            <Lottie animationData={animationData} />
        </div>
    )
}

export default LottieAnimation