import React from 'react'
import DonutChartComponent from './components/donut-chart'
import KpiCHart from './components/kpi-chart'
import { AreaChartUsageExampleWithCustomTooltip } from './components/area-chat'

const Statistics = () =>
{
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
    )
}

export default Statistics