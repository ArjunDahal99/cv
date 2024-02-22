import { auth } from "@/auth";
import CvInput from "./components/cv-input";
import CvPreview from "./components/cv-preview";
import CvSendContainer from "./components/cv-send";


const CreateTemplate = async ({ params }: { params: { templateId: string }; }
) =>
{
    //@ts-ignore
    const { user } = await auth()
    return (
        <>
            <section className=" items-center flex w-full max-md:p-5 justify-evenly flex-wrap">
                <CvInput templateId={params.templateId} />
                <CvPreview data={user} />
            </section>
            <section className=" pt-10 flex  flex-col  min-h-[600px] items-center">
                <h1 className=" text-4xl  font-bold p-10">Send CV</h1>
                <CvSendContainer templateId={params.templateId} />
            </section>
        </>
    )
}

export default CreateTemplate