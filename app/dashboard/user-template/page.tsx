import { getUserTemplate } from "@/server-action/template/get-user-template";
import React from "react";
import TemplateCardContainer from "./components/TemplateCardContainer";
export const dynamic = "force-dynamic";
const UserTemplate = async () => {
  const { data } = await getUserTemplate();
  console.log(data);
  return (
    <>
      <div className=" flex  overflow-y-scroll mx-auto  flex-wrap gap-y-10 justify-center gap-x-8">
        <TemplateCardContainer data={null} />
        {data?.map((template: any) => (
          <TemplateCardContainer data={template} />
        ))}
      </div>
    </>
  );
};

export default UserTemplate;
