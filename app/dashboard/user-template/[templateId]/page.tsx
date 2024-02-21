import CvInput from "./components/cv-input";
import CvPreview from "./components/cv-preview";


const CreateTemplate = ({ params }: { params: { templateId: string }; }
) =>
{
    console.log(params.templateId)
    return (
        <>
            <section className=" items-center flex w-full max-md:p-5 justify-evenly flex-wrap">
                <CvInput />
                <CvPreview />
            </section>
        </>
    )
}

export default CreateTemplate