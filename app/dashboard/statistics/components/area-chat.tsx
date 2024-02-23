//@ts-nocheck
"use client";
import { AreaChart } from "@tremor/react";

export function AreaChartUsageExampleWithCustomTooltip({ areaData }: any)
{
    const charData = {};
    areaData.forEach((entry) =>
    {
        const entryDate = entry.created_At.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
        });

        const todayDate = new Date().toLocaleString("en-US", {
            month: "short",
            day: "numeric",
        });
        // Check if the entry is from today
        if (entryDate === todayDate)
        {
            const timeKey = entry.created_At.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            });

            if (!charData[timeKey])
            {
                charData[timeKey] = { time: timeKey, totalEmailSent: 0 };
            }

            charData[timeKey].totalEmailSent++;
        }
    });

    const charDataArray = Object.values(charData);


    const customTooltip = (props: any) =>
    {
        const { payload, active } = props;
        if (!active || !payload) return null;
        return (
            <div className="w-[12rem]rounded-tremor-default border p-2 text-tremor-default shadow-tremor-dropdown">
                {payload.map((category: any, idx: any) => (
                    <div key={idx} className="flex flex-1 space-x-2.5">
                        <div
                            className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
                        />
                        <div className="space-y-1">
                            <p className="font-medium">{category.value}mails</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <AreaChart
            className="mt-4 h-72 w-[93%] max-md:w-full"
            data={charDataArray}
            index="time"
            categories={["totalEmailSent"]}
            colors={["purple"]}
            yAxisWidth={30}
            customTooltip={customTooltip}
        />
    );
}
