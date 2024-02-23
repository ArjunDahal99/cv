"use client"


import { Button } from "@/components/ui/button"
import
{
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { format } from 'date-fns';
import { FaGripHorizontal } from "react-icons/fa";
import { LuMoreHorizontal } from "react-icons/lu";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type TemplateType = {
    id: string;
    userId: string;
    body: string;
    subject: string;
    fileName: string;
    fileUrl: string;
    createdAt: Date;
    updatedAt: Date;
    email: Email[];
};
export type Email = {
    id: string;
    templateId: string;
    value: string;
};


export const columns: ColumnDef<TemplateType>[] = [
    {
        accessorKey: "id",
        header: "TemplateId",
        cell: ({ row }) =>
        {
            return <h1>{row.index + 1}</h1>

        },
    },
    {
        accessorKey: "subject",
        header: "Subject",
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
        cell: ({ row }) =>
        {
            console.log(row.getValue('createdAt'))
            //@ts-ignore
            const formattedDate = format(row.getValue('createdAt'), 'yyyy/MM/dd hh:mm:ss a');
            return <h1>{formattedDate}</h1>

        },

    },
    {
        accessorKey: "email",
        header: "Emails",
        cell: ({ row }) =>
        {
            //@ts-ignore
            return <h1>{row.getValue('email').length}</h1>

        },
    },
    {
        accessorKey: "id",
        header: "Actions",
        cell: ({ row }) =>
        {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <LuMoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )

        },
    },
]
