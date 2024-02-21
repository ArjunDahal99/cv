
import LottieAnimation from "@/components/homepage/lottie-animation";
import { TypewriterEffectSmooth } from "@/components/homepage/typewriter-effect";

const HomePage = async () =>
{
  const words = [
    {
      text: "Send",
    },
    {
      text: "Your",
    },
    {
      text: "Cv",
    },
    {
      text: "10x",
    },
    {
      text: "Faster",
    },
    {
      text: "with Sencv.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <main className=" flex flex-col justify-center h-[89vh] items-center">
      {/* <TypewriterEffectSmooth words={words} /> */}
      <LottieAnimation />
    </main>
  )
}

export default HomePage