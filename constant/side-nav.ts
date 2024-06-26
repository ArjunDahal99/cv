import { FC } from 'react';
import { BarChartIcon, BoltIcon, LayoutPanelTopIcon, SettingsIcon } from 'lucide-react';

interface SideNavContentType
{
    name: string;
    link: string;
    logo: FC;
}


export const sideNavContent: SideNavContentType[] = [
    {
        name: "Statistics",
        link: "/dashboard/statistics",
        logo: BarChartIcon
    },
    {
        name: "My Template",
        link: "/dashboard/user-template",
        logo: LayoutPanelTopIcon
    },
    // {
    //     name: "Configure",
    //     link: "/dashboard/configure",
    //     logo: BoltIcon
    // },
    // {
    //     name: "Settings",
    //     link: "/dashboard/settings",
    //     logo: SettingsIcon
    // },
];
