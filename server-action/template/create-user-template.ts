"use server"

import { auth } from "@/auth"
import prisma from "@/db/db.config"
import { CVTemplateType } from "@/store/cv-template-store"

export const createUserTemplate = async ({body , subject,fileName, fileUrl}: any) =>
{

    const session = await auth()
    if (!session)
    {
        return { message: "User Not uthorized", status: false }
    }

    const user = await prisma.user.findUnique({ where: { id: session.user.id } })

    if(!user) {
        return { message: "User Not uthorized", status: false }
    }


    const template = await prisma.template.create({data:{
        userId:user.id,
        body,
        fileName,
        fileUrl,
        subject
    }})

    return { message: "Template Created", data: template, status:true }


}