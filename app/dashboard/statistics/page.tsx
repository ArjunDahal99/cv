import { columns } from "./components/template-table/columns"
import KpiCHart from "./components/kpi-chart";
import { getAllUserData } from "@/server-action/all-user-data";
import UserProfileBoxContainer from "./components/user-profile-box";
import { DataTable } from "./components/template-table/data-table";

const Statistics = async () =>
{
    const allUserData = await getAllUserData();

    const userData = allUserData?.data?.map(({ id, username, email, profilePicture, created_At, credentialProvider }) => ({
        id,
        username,
        email,
        profilePicture: profilePicture || null,
        created_At,
        credentialProvider,
    }));
    const userTemplateData = allUserData?.data?.map(({ templates }) => templates).flat()
    const userEmailSentData = allUserData?.data?.map(({ emailSent }) => emailSent).flat();

    return (
        <>
            <div className=" p-4  space-y-10">
                <div className=" flex max-md:flex-col">
                    <UserProfileBoxContainer data={userData} />
                    <KpiCHart userdata={{ userTemplateData, userEmailSentData }} />
                </div>
                <h1 className=" text-4xl text-purple-500/70"> Templates</h1>
                <DataTable columns={columns} data={userTemplateData} />
            </div>
        </>
    );
};

export default Statistics;
