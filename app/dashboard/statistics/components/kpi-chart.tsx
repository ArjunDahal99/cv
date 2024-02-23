"use client"
import { Card, ProgressBar, ProgressCircle } from '@tremor/react';
import { AreaChartUsageExampleWithCustomTooltip } from './area-chat';

const KpiChart = ({ userdata }: any) =>
{
    const { userEmailSentData, userTemplateData } = userdata;

    console.log(userEmailSentData)
    return (
        <div className=" w-full flex flex-col justify-center">
            <div className="flex flex-wrap h-fit  justify-evenly gap-4 lg:pl-5 max-md:w-full max-md:justify-between max-sm:justify-center max-md:pt-4">
                {/** Template Used Card */}
                <Card className="max-w-[332px] flex justify-center">
                    <div className="flex justify-center space-x-5 items-center">
                        <ProgressCircle color="purple" value={(userTemplateData.length / 20) * 100} size="md">
                            <span className="text-xs font-medium">{(userTemplateData.length / 20) * 100}%</span>
                        </ProgressCircle>

                        <div>
                            <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                                Template Used
                            </p>
                            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                                Remaining Template {20 - userTemplateData.length}
                            </p>
                        </div>
                    </div>
                </Card>

                {/** Email Usage Progress Bar Chart Card */}
                <Card className="max-w-[332px] flex justify-center items-center ">
                    <div className="w-full">
                        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between">
                            <span>Email Usage &bull; {(userEmailSentData.length / 50) * 100}%</span>
                            <span>Remaining {50 - userEmailSentData.length}</span>
                        </p>
                        <ProgressBar value={(userEmailSentData.length / 50) * 100} color="purple" className="mt-3" />
                    </div>
                </Card>

                {/** Total Template Created Card */}
                <Card className="max-w-[332px]">
                    <div className="flex items-center justify-between">
                        <p className="text-tremor-default font-medium text-tremor-content dark:text-dark-tremor-content">
                            Total Email Sent
                        </p>
                    </div>
                    <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                        {userEmailSentData.length}
                    </p>
                </Card>

                {/** Total Email Sent Card */}
            </div>
            <div className=" flex justify-center ">
                <AreaChartUsageExampleWithCustomTooltip areaData={userEmailSentData} />
            </div>


        </div>

    );
};

export default KpiChart;
