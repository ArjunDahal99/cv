"use server"

import { auth } from "@/auth"
import prisma from "@/db/db.config"

export const getUserTemplate = async () =>
{
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

    return { message: "Template Fetched", data: template }


}