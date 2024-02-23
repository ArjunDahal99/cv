export interface EmailTypes
{
    id: string;
    templateId: string;
    value: string;
}

export interface TemplateTypes
{
    id: string;
    userId: string;
    body: string;
    subject: string;
    fileName: string;
    fileUrl: string;
    createdAt: Date;
    updatedAt: Date;
    email: EmailTypes[];
}

export interface EmailSentTypes
{
    id: string;
    email: string;
    created_At: Date;
    userId: string;
}

export interface UserDataTypes
{
    id: string;
    username: string;
    email: string;
    password: string | null;
    credentialProvider: string;
    profilePicture: string | null
    created_At: Date;
    templates: TemplateTypes[];
    emailSent: EmailSentTypes[];
}