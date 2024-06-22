"use client";

import type { TeamMembers } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";
import React, { type FC, useMemo } from "react";
import { useModal } from "@/components/providers/modal-provider";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { CustomDeleteAlertDailog } from "@/components/custom-delete-alert-dialog";
import { DataTable } from "@/components/data-table";

type Props = {
  data: TeamMembers[];
};

export const TeamMembersTableShell: FC<Props> = ({ data }) => {
  const { setOpen } = useModal();

  const TeamMembersColumnDef = useMemo<ColumnDef<TeamMembers>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
            className="translate-y-[2px]"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            className="translate-y-[2px]"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        id: "firstName",
        header: ({ column }) => (
          <div>
            <DataTableColumnHeader column={column} title="First Name" />
          </div>
        ),
        cell: ({ row }) => (
          <div className="min-w-max mr-auto">{row.getValue("firstName")}</div>
        ),
        accessorKey: "firstName",
        enableSorting: true,
        enableHiding: true,
      },
      {
        id: "lastName",
        header: ({ column }) => (
          <div>
            <DataTableColumnHeader column={column} title="Last Name" />
          </div>
        ),
        cell: ({ row }) => (
          <div className="min-w-max mr-auto">{row.getValue("lastName")}</div>
        ),
        accessorKey: "lastName",
        enableSorting: true,
        enableHiding: true,
      },
      {
        id: "email",
        header: ({ column }) => (
          <div>
            <DataTableColumnHeader column={column} title="Email" />
          </div>
        ),
        cell: ({ row }) => (
          <div className="min-w-max">{row.getValue("email")}</div>
        ),
        accessorKey: "email",
        enableSorting: true,
        enableHiding: true,
      },
      {
        id: "phone",
        header: ({ column }) => (
          <div>
            <DataTableColumnHeader column={column} title="Phone" />
          </div>
        ),
        cell: ({ row }) => (
          <div className="min-w-max">{row.getValue("phone")}</div>
        ),
        accessorKey: "phone",
        enableSorting: true,
        enableHiding: true,
      },
      {
        id: "role",
        header: ({ column }) => (
          <div>
            <DataTableColumnHeader column={column} title="Role" />
          </div>
        ),
        cell: ({ row }) => (
          <div className="min-w-max">{row.getValue("role")}</div>
        ),
        accessorKey: "role",
        enableSorting: true,
        enableHiding: true,
      },
      {
        id: "actions",
        header: () => (
          <div className="flex min-w-max items-center justify-center">
            Actions
          </div>
        ),
        cell: ({ row }) => (
          <div className="flex items-center justify-evenly min-w-max space-x-5">
            <Button size="icon">
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="destructive"
              size="icon"
              onClick={() => {
                setOpen(
                  <CustomDeleteAlertDailog
                    title="Are you absolutely sure?"
                    description="This action cannot be undone. This will permanently delete your post and remove your data from our servers"
                    onDelete={() => {}}
                    isDeleting={false}
                    actionText="Delete Post"
                  />,
                );
              }}
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data],
  );

  return (
    <DataTable
      data={data ?? []}
      columns={TeamMembersColumnDef}
      filterableColumns={[]}
      searchPlaceholder="Search members..."
      messages={{
        filteredDataNotFoundMessage: {
          title: "No members found!",
          description: "Add team members to get started!",
        },
        emptyDataMessage: {
          title: "No members found!",
          description: "Add team members to get started!",
        },
      }}
    />
  );
};
