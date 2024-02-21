
import
{
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"
import { auth, signOut } from "@/auth"
import SignOutButton from "./signout-button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const UserProfileBox = ({ data }: any) =>
{
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {data ? <Avatar className=" border-2 shadow-xl cursor-pointer  ">
                    <AvatarImage className=" shadow-sm " src={data?.image} />
                    <AvatarFallback className=" capitalize">{data.email.slice(0, 1)}</AvatarFallback>
                </Avatar> :
                    !data && <Link href={'/api/auth/signin'}>Login</Link>}


            </DropdownMenuTrigger>
            {data && <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuItem >
                    <Link className="w-full p-2" href={'/dashboard/statistics'}>Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem >
                    <SignOutButton signOut={async () =>
                    {
                        "use server"
                        await signOut({ redirectTo: "/" })
                    }} />
                </DropdownMenuItem>
            </DropdownMenuContent>}
        </DropdownMenu>

    )
}

export default UserProfileBox