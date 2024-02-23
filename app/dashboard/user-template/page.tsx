import { getUserTemplate } from "@/server-action/template/get-user-template";
import React from "react";
import TemplateCardContainer from "./components/TemplateCardContainer";

const UserTemplate = async () =>
{
  const { data } = await getUserTemplate();
  return (

    <div className=" lg:pl-28  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-md:p-4 gap-y-[20px]  ">
      <TemplateCardContainer data={null} />
      {data?.map((template: any) => (
        <TemplateCardContainer key={template.id} data={template} />
      ))}
    </div>

  );
};

export default UserTemplate;
