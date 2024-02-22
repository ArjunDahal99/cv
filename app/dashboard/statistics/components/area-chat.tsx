"use client"
import { AreaChart, Card, Title } from '@tremor/react';

const chartdata = [
    {
        date: 'Jan 23',
        Running: 167,
    },
    {
        date: 'Feb 23',
        Running: 125,
    },
    {
        date: 'Mar 23',
        Running: 156,
    },
    {
        date: 'Apr 23',
        Running: 165,
    },
    {
        date: 'May 23',
        Running: 153,
    },
    {
        date: 'Jun 23',
        Running: 124,
    },
];

export function AreaChartUsageExampleWithCustomTooltip()
{
    const customTooltip = (props: any) =>
    {
        const { payload, active } = props;
        if (!active || !payload) return null;
        return (
            <div className="w-[12rem] rounded-tremor-default border  p-2 text-tremor-default shadow-tremor-dropdown">
                {payload.map((category: any, idx: any) => (
                    <div key={idx} className="flex flex-1 space-x-2.5">
                        <div
                            className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
                        />
                        <div className="space-y-1">
                            <p className="">{category.dataKey}</p>
                            <p className="font-medium">
                                {category.value} bpm
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };
    return (
        <>
            <AreaChart
                className="mt-4 h-72 w-[50%] max-md:w-full"
                data={chartdata}
                index="date"
                categories={['Running']}
                colors={['blue']}
                yAxisWidth={30}
                customTooltip={customTooltip}
            />
        </>
    );
}