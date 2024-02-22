import { auth } from "@/auth"
import prisma from "@/db/db.config";

export const getAllUserData = async()=>{
try {
       
    const session = await auth();

    if (!session)
    {
        return { message: "User Not Authorized", status: false };
    }
    const user = await prisma.user.findUnique({ where: { id: session.user.id },include:{
        templates:{
            include:{
                email:true
            }
        },
        emailSent:true,
    } });

    if(!user)
    {
        return { message:"User Not Found" ,success:false}
    }
    return { message:"User Featched" , success:true , data:user}
} catch (error) {
    return { message:"Some thing Went Wrong" , success:false }
}
}   