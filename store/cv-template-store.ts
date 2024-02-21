//@ts-nocheck
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface CVTemplateType
{
    subject: string;
    body: string;
    fileName: string;
    fileUrl: string;
    email?: string[];
    setField: (field: Partial<CVTemplateType>) => void;
    addEmail: (newEmail: string) => void; // Function to add an email
    deleteEmail: (newEmail: string) => void; // Function to add an email
}

export const useCVTemplateStore = create<CVTemplateType>(
    //@ts-ignore
    devtools(
        persist(
            (set) => ({
                subject: '',
                body: '',
                email: [],
                fileName: '',
                fileUrl: '',
                setField: (field) => set(field),
                addEmail: (newEmail) => set((state) => ({ email: [...state.email, newEmail] })),
                deleteEmail: (email) => set((state) => ({ email: state.email.filter((e) => e != email) }))
            }),
            { name: 'cv-template' },
        ),
    ),
);
