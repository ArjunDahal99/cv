"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState, useEffect } from 'react'
import { useCVTemplateStore } from '@/store/cv-template-store';
import { XIcon } from 'lucide-react';

import { toast } from 'sonner';
import { sendCV } from '@/server-action/send-cv';
import { deleteUserTemplateEmail } from '@/server-action/template/delete-user-template';

const CvSendContainer = ({ templateId }: { templateId: string }) =>
{
    const { email, addEmail, deleteEmail, subject, body, fileName, fileUrl } = useCVTemplateStore();
    const [inputEmail, setInputEmail] = useState<string>('')
    const [isLoading, setIsLoading] = useState(false)
    const [emailColors, setEmailColors] = useState<string[]>([]);



    const handleAddEmail = (e: React.FormEvent) =>
    {
        try
        {
            e.preventDefault()
            addEmail(inputEmail!)
            setInputEmail('')
        } catch (error)
        {
            console.log(error)
        }
    }

    const handleDeleteEmail = async (email: string) =>
    {

        deleteEmail(email);
        if (templateId !== 'new')
        {
            const response = await deleteUserTemplateEmail({ templateId, email })
            console.log(response)
        }
    }

    const sendCv = async () =>
    {
        try
        {
            setIsLoading(true);
            alert(isLoading);
            await Promise.all(email.map(async (e) =>
            {
                await sendCV({ body, subject, to: e, fileUrl, fileName });
            }));
            toast.success("Email Sent")
        } catch (error)
        {
            console.log(error);
        } finally
        {
            setIsLoading(false);
        }
    }

    return (
        <div className="lg:w-[900px] max-md:w-full flex flex-col ">
            <form onSubmit={(e) => handleAddEmail(e)} className="flex space-x-2">
                <Input onChange={(e) => { setInputEmail(e.target.value) }} value={inputEmail} type='text' required />
                <Button type='submit' variant={'secondary'} className='px-10'>Add</Button>
            </form>
            <div className="flex flex-wrap  justify-center gap-x-16  gap-y-6 items-center py-5 w-full  ">
                {email && email.map((e, i) => (
                    <div key={i} className="flex p-2  dark:bg-secondary bg-orange-400/50 h-[30px] w-[250px] rounded-full items-center   justify-between">
                        <h1>{e}</h1>
                        {isLoading
                            ?
                            <h1>...</h1>
                            :
                            <XIcon onClick={() => handleDeleteEmail(e)} className='  hover:text-red-500 cursor-pointer rounded-full ' size={16} />
                        }
                    </div>
                ))}
            </div>
            <Button onClick={sendCv} disabled={isLoading} variant={'outline'} > SenCv</Button>
        </div>
    )
}

export default CvSendContainer;
