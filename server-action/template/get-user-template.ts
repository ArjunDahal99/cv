"use server"

import { auth } from "@/auth"
import prisma from "@/db/db.config"
import { revalidatePath } from "next/cache"

export const getUserTemplate = async ():Promise<any> =>
{

    try {
        const session = await auth()
        if (!session)
        {
            return { message: "User Not uthorized", status: false }
        }
    
    
        const user = await prisma.user.findUnique({ where: { id: session.user.id } })
    
        const template = await prisma.template.findMany({
            where: {
                userId: user?.id
            }
        })
        revalidatePath('/')
        return { message: "Template Fetched", data: template } 
    } catch (error) {
        console.log(error)
    }



}