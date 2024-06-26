"use client";
import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PDFIcon } from "@/public/images";
import { useCVTemplateStore } from "@/store/cv-template-store";
import
{
  AlertCircleIcon,
  DotIcon,
  PictureInPicture2Icon,
  PictureInPictureIcon,
  PrinterIcon,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const CvPreview = ({ data }: any) =>
{
  console.log(data)
  const { body, subject, fileName, fileUrl } = useCVTemplateStore();

  return (
    <div className="   lg:w-[600px] max-md:w-full min-h-[80vh] h-[80vh] rounded-lg  dark:border-2  shadow-md ">
      {/* header portion */}
      <div className="  flex justify-between items-center px-6 py-4">
        <div className=" flex items-center">
          <h1 className=" text-2xl pr-4 ">
            {" "}
            {subject.length > 20 ? subject.slice(0, 20) + "..." : subject}
          </h1>
          <div className=" flex items-center bg-[#DDDDDD] text-slate-500 rounded-[3px] px-[1px]">
            <h1 className=" text-sm">Inbox</h1>
            <XIcon size={14} />
          </div>
        </div>

        <div className="  flex space-x-4 pr-4">
          <PrinterIcon />
          <PictureInPictureIcon />
        </div>
      </div>

      {/* middle portion */}
      <div className=" flex items-center space-x-4 pl-2">
        <Avatar className=" border-2 shadow-xl w-14 h-14 cursor-pointer  ">
          <AvatarImage className=" shadow-sm " src={data?.image} />
          <AvatarFallback className=" capitalize">{data.email.slice(0, 1)}</AvatarFallback>
        </Avatar>
        <div className="">
          <h1> <span className=' font-bold'> {data?.username}</span> {`<${data?.email}>`}</h1>
          <h1> to {`${'exmaple@gmail.com'}`}</h1>
        </div>
      </div>
      {/* body portion */}
      <div className=" w-full h-[40%]  p-6 text-wrap ">
        <textarea
          disabled
          className=" overflow-scroll textarea-container bg-transparent   w-full h-full "
          value={body}
        ></textarea>
      </div>

      {/* seperator */}
      <hr className="  border-dashed" />
      <div className=" px-6 flex items-center">
        <h1 className=" font-bold"> One Attachment</h1>
        <DotIcon />
        <h1> Scanned by Gmail</h1>
        <AlertCircleIcon size={12} />
      </div>

      {/* attachment portion */}
      <div className=" overflow-hidden">
        <div className="  p-5 ">
          {fileName && fileUrl && (
            <div className=" w-fit ">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={fileUrl}
                className=" flex flex-col justify-center items-center "
              >
                <Image
                  className=" w-[120px] h-[120px]"
                  src={PDFIcon}
                  alt="pdf"
                />
                <h1>
                  {fileName.length > 15
                    ? fileName.slice(0, 11) + "..."
                    : fileName}
                </h1>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CvPreview;
