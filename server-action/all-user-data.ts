import { auth } from "@/auth";
import prisma from "@/db/db.config";
import { UserDataTypes } from "@/types/types";

export const getAllUserData = async (): Promise<{ message: string; success: boolean; data?: UserDataTypes[] }> =>
{
    try
    {
        const session = await auth();

        if (!session)
        {
            return { message: "User Not Authorized", success: false };
        }

        const user = await prisma.user.findUnique({
            where: { id: session.user.id },
            include: {
                templates: {
                    include: {
                        email: true,
                    },
                },
                emailSent: true,
            },
        });

        if (!user)
        {
            return { message: "User Not Found", success: false };
        }

        return { message: "User Fetched", success: true, data: [user] };
    } catch (error)
    {
        console.error("Error in getAllUserData:", error);
        return { message: "Something Went Wrong", success: false };
    }
};
