import { getUserTemplate } from "@/server-action/template/get-user-template";
import React from "react";
import TemplateCardContainer from "./components/TemplateCardContainer";

const UserTemplate = async () => {
  const { data } = await getUserTemplate();
  return (
    <div className=" flex w-full ">
      <div className="flex flex-wrap gap-y-10 px-18 gap-x-11  p-8  max-md:justify-center justify-start">
        <TemplateCardContainer data={null} />
        {data?.map((template: any) => (
          <TemplateCardContainer key={template.id} data={template} />
        ))}
      </div>
    </div>
  );
};

export default UserTemplate;
