
import GetStarted from "@/components/homepage/get-started";
import LottieAnimation from "@/components/homepage/lottie-animation";
import AnimatedCharacters from "@/components/homepage/typewriter-effect";
import TypewriterEffect from "@/components/homepage/typewriter-effect";


const HomePage = async () =>
{

  return (
    <main className=" flex flex-col pt-[14vh] max-md:pt-[24vh] justify-center h-screen  items-center">
      <AnimatedCharacters />
      <GetStarted />
      <LottieAnimation />
    </main>
  )
}

export default HomePage