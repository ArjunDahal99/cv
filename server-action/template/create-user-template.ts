"use server"

import { auth } from "@/auth"
import prisma from "@/db/db.config"
import { revalidatePath } from "next/cache"

export const createUserTemplate = async ({ body, subject, fileName, fileUrl, templateId, email }: any) =>
{

    console.log(email)
    const session = await auth()
    if (!session)
    {
        return { message: "User Not Authorized", status: false }
    }

    const user = await prisma.user.findUnique({ where: { id: session.user.id } })

    if (!user)
    {
        return { message: "User Not Authorized", status: false }
    }

    if (templateId === 'new')
    {
        const template = await prisma.template.create({
            data: {
                userId: user.id,
                body,
                fileName,
                fileUrl,
                subject
            }
        });

        // Update or create emails for each address in the array
        const createdEmails = await Promise.all(email.map(async (email: string) =>
        {
            return prisma.email.create({
                data: {
                    templateId: template.id,
                    value: email,
                },
            });
        }));

        revalidatePath('/dashboard/user-template');
        return { message: "Template Created/Updated", status: true };
    }

    const updatedTemplate = await prisma.template.update({
        where: {
            id: templateId,
        },
        data: {
            body,
            fileName,
            fileUrl,
            subject,
        },
        include: {
            email: true
        }
    });
    const createdEmails = await Promise.all(email.map(async (email: string) =>
    {
        return prisma.email.create({
            data: {
                templateId: updatedTemplate.id,
                value: email,
            },
        });
    }));

    console.log(createdEmails)


    revalidatePath('/dashboard/user-template');
    return { message: "Template Updated", data: { template: updatedTemplate, status: true } }
};
