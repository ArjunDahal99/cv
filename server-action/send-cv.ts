"use server"
import { auth } from "@/auth";
import prisma from "@/db/db.config";
import nodemailer from "nodemailer";

export interface Emailoptions
{
    to: string;
    subject: string;
    body: string;
    fileUrl?: string;
    fileName?: string;
}

export const sendCV = async (options: Emailoptions): Promise<void> =>
{
    const session = await auth()
    console.log(session?.user.id)
    console.log(options);
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: "dahalarjun409@gmail.com",
            pass: "xafbbasoqenxxqye",
        },
    });

    const { body, to, fileUrl, subject, fileName } = options;

    const mailoptions: any = {
        from: "dahalarjun409@gmail.com",
        to,
        subject,
        html: `<body>${body.replace(/\n/g, '<br>')}</body>`
    };

    // Conditionally add attachment if filePath is provided
    if (fileUrl && fileName)
    {
        mailoptions.attachments = [{
            filename: fileName,
            path: fileUrl
        }];
    }

    console.log(mailoptions);

    try
    {
        const testResult = await transport.verify();
        console.log(testResult);
    } catch (error)
    {
        console.log(error);
    }

    try
    {
        const sendResult = await transport.sendMail(mailoptions as nodemailer.SendMailOptions); // Type assertion here
        console.log(sendResult);
        const emailSent = await prisma.emailSent.create({
            data: {
                email: to,
                userId: session?.user.id!,
            }
        })
        console.log(emailSent)
    } catch (error)
    {
        console.log(error);
    }
};
