'use client';
import { Card, ProgressBar } from '@tremor/react';
import { ProgressCircle } from '@tremor/react';

function classNames(...classes: any)
{
    return classes.filter(Boolean).join(' ');
}

const data = [
    {
        name: 'Daily active users',
        stat: '3,450',
        change: '+12.1%',
        changeType: 'positive',
    },
];

export default function KpiCHart()
{
    return (
        <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="mx-auto max-w-sm">
                    <div className="flex justify-start space-x-5 items-center">
                        <ProgressCircle value={75} size="md">
                            <span className="text-xs font-medium ">75%</span>
                        </ProgressCircle>

                        <div>
                            <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                                $340/$450 (75%)
                            </p>
                            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                                Spend management control
                            </p>
                        </div>
                    </div>
                </Card>
                <Card className="mx-auto max-w-sm">
                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between">
                        <span>$9,012 &bull; 45%</span>
                        <span>$20,000</span>
                    </p>
                    <ProgressBar value={45} color="teal" className="mt-3" />
                </Card>

                {data.map((item) => (
                    <Card key={item.name} className='mx-auto max-w-sm'>
                        <div className="flex items-center justify-between">
                            <p className="text-tremor-default font-medium text-tremor-content dark:text-dark-tremor-content">
                                {item.name}
                            </p>

                        </div>
                        <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            {item.stat}
                        </p>
                    </Card>
                ))}
            </div>
        </>
    );
}