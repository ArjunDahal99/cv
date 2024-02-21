"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/dateFormatter";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const TemplateCardContainer = ({ data }: any) => {
  if (data === null) {
    return (
      <Link href={"/dashboard/user-template/new"}>
        <CardContainer className=" w-[400px] cursor-pointer  ">
          <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl flex justify-center shadow-sm h-[250px]  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-4 border  ">
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
            {data?.createdAt && formatDate(data.createdAt)}
          </CardItem>
          <CardItem translateZ={20}>
            <Link href={`create-template/${data._id}`}>
              <Button variant={"default"} className=" ">
                Edit
              </Button>
            </Link>
          </CardItem>

          <CardItem translateZ={20}>
            <Button onClick={() => {}} variant={"destructive"}>
              Delete
            </Button>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default TemplateCardContainer;
