import
{
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserDataTypes } from "@/types/types";
import Image from "next/image";
import { FaGithub, FaGoogle, FaLock } from "react-icons/fa";

const UserProfileBoxContainer = ({ data }: any) =>
{
  return (
    <Card className=" w-[400px]  dark:bg-[#111827]  flex flex-col justify-center items-center max-md:w-full ">
      <CardHeader>
        <CardTitle className=" text-center capitalize">
          {data[0].username}
        </CardTitle>
      </CardHeader>
      <CardContent className=" flex gap-y-2  flex-col items-center justify-center">
        <Image
          className=" rounded-full"
          src={data[0].profilePicture}
          width={150}
          height={150}
          alt="pp"
        />
      </CardContent>
      <CardContent className="  opacity-45 text-purple-400 flex gap-x-4 items-end justify-center">
        <h1> Crediantail Provider</h1>
        {data[0].credentialProvider == "google" && <FaGoogle size={30} />}
        {data[0].credentialProvider == "github" && <FaGithub size={30} />}
        {data[0].credentialProvider == "credentials" && <FaLock size={30} />}
      </CardContent>
    </Card>
  );
};

export default UserProfileBoxContainer;
