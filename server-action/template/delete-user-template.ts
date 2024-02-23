
"use server"

import { auth } from "@/auth"
import prisma from "@/db/db.config"
import { revalidatePath } from "next/cache"

export const deleteUserTemplate = async (templateId: any) =>
{
    try
    {
        const session = await auth()
        if (!session)
        {
            return { message: "User Not uthorized", status: false }
        }
        const user = await prisma.user.findUnique({ where: { id: session.user.id } })
        if (!user)
        {
            return { message: "User Not uthorized", status: false }
        }
        const template = await prisma.template.findUnique({
            where: {
                id: templateId
            }
        })

        if (!template)
        {
            return { message: "Template Not Found ", status: false };
        }


        const deleteTemplate = await prisma.template.delete({
            where: {
                id: templateId
            }
        })
        revalidatePath('/dashboard/user-template');
        return { message: "Template Deleted", status: true };
    } catch (error)
    {
        console.log(error)
        return { message: "Something Wnet Wrong", status: false }
    }

};


export const deleteUserTemplateEmail = async ({ email, templateId }: any) =>
{
    const session = await auth()
    if (!session)
    {
        return { message: "User Not uthorized", status: false }
    }

    const template = await prisma.template.findUnique({
        where: {
            id: templateId
        }
    })

    if (!template)
    {
        return { message: "Template Not Found ", status: false };
    }

    const deleteTemplateEmail = await prisma.email.deleteMany({
        where: {
            templateId: template.id,
            value: email
        }
    })

    revalidatePath('/dashboard/user-template');
    return { message: "Template Deleted", status: true }

}


