import React from "react";
import DonutChartComponent from "./components/donut-chart";
import KpiCHart from "./components/kpi-chart";
import { AreaChartUsageExampleWithCustomTooltip } from "./components/area-chat";
import { getAllUserData } from "@/server-action/all-user-data";

const Statistics = async () => {
  const allUserData = await getAllUserData();
  if (allUserData.success) {
    console.log(allUserData.data);
  }
  return (
    <>
      <div className=" p-10">
        <KpiCHart />
        <div className="  pt-5 flex  flex-wrap justify-evenly items-center gap-y-5">
          <AreaChartUsageExampleWithCustomTooltip />
          <DonutChartComponent />
        </div>
      </div>
    </>
  );
};

export default Statistics;
