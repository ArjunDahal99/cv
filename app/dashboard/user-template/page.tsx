import { getUserTemplate } from "@/server-action/template/get-user-template";
import React from "react";
import TemplateCardContainer from "./components/TemplateCardContainer";
export const dynamic = "force-dynamic";

const UserTemplate = async () =>
{
  const { data } = await getUserTemplate();
  return (
    <div className="flex flex-wrap gap-y-10 gap-x-8 p-8 justify-center">
      <TemplateCardContainer data={null} />
      {data?.map((template: any) => (
        <TemplateCardContainer key={template.id} data={template} />
      ))}
    </div>
  );
};

export default UserTemplate;
