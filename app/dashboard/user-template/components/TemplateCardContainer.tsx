"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/dateFormatter";
import { deleteUserTemplate } from "@/server-action/template/delete-user-template";
import { useCVTemplateStore } from "@/store/cv-template-store";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const TemplateCardContainer = ({ data }: any) => {
  const { setField } = useCVTemplateStore();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  const handelOpen = () => {
    setField({
      body: data.body,
      subject: data.subject,
      fileName: data.fileName,
      fileUrl: data.fileUrl,
      email: data?.email?.map((e: any) => e.value),
    });
  };

  const handelDelete = async () => {
    console.log(data?.id);
    const response = await deleteUserTemplate(data?.id);
    if (response.status) {
      toast.success(response.message);
    }
  };

  if (data === null) {
    return (
      <Link href={"/dashboard/user-template/new"}>
        <CardContainer className=" min-w-[400px] cursor-pointer  ">
          <CardBody className="  w-[400px] bg-gray-50 relative group/card hover:shadow-2xl flex justify-center shadow-sm h-[250px]  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-4 border  ">
            <CardItem
              translateZ="50"
              className="text-xl  flex justify-center items-center
                        flex-col py-[3.1rem] font-bold text-neutral-600 dark:text-white"
            >
              <PlusIcon size={50} />
              <h1>Add Template</h1>
            </CardItem>
          </CardBody>
        </CardContainer>
      </Link>
    );
  }
  return (
    <CardContainer className=" w-[400px]   ">
      <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl shadow-sm h-[250px]  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-4 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {data?.subject}
        </CardItem>
        <CardItem
          as="p"
          translateZ="30"
          className="text-neutral-500 text-sm max-w-sm mt-2 h-[65%] w-full  dark:text-neutral-300"
        >
          {data?.body}
        </CardItem>

        <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {data?.updatedAt && formatDate(data.updatedAt)}
          </CardItem>
          <CardItem translateZ={20}>
            <Link href={`/dashboard/user-template/${data.id}`}>
              <Button onClick={handelOpen} variant={"outline"} className=" ">
                Open
              </Button>
            </Link>
          </CardItem>

          <CardItem translateZ={20}>
            <Button onClick={handelDelete} variant={"destructive"}>
              Delete
            </Button>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default TemplateCardContainer;
