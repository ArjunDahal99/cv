"use server"

import { auth } from "@/auth"
import prisma from "@/db/db.config"

export const getUserTemplate = async (): Promise<any> =>
{
    try
    {
        const session = await auth();

        if (!session)
        {
            return { message: "User Not Authorized", status: false };
        }

        const user = await prisma.user.findUnique({ where: { id: session.user.id } });

        const templates = await prisma.template.findMany({
            where: {
                userId: user?.id,
            },
            orderBy: {
                updatedAt: 'desc', // Sort by updatedAt in descending order
            },
            include: {
                email: true
            }
        });

        return { message: "Templates Fetched", data: templates };
    } catch (error)
    {
        console.log(error);
        return { message: "Something went Wrong", data: error };
    }
};
