import { Table } from "@tanstack/react-table";
import { LucideIcon } from "lucide-react";
import { ComponentType } from "react";

export type SidebarItemsType = {
  title: string;
  href: string;
  icon?: LucideIcon | ComponentType<{ className?: string }>;
};

export type Tasks = {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
  dueDate: string;
};

export type TeamMembers = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  phone: string;
};

// Data table Types
export type Option = {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
};

type DotPrefix<T extends string> = T extends "" ? "" : `.${T}`;
type DotNestedKeys<T> = (
  T extends object
    ? {
        [K in Exclude<
          keyof T,
          symbol
        >]: `${K}${DotPrefix<DotNestedKeys<T[K]>>}`;
      }[Exclude<keyof T, symbol>]
    : ""
) extends infer D
  ? Extract<D, string>
  : never;

export interface DataTableSearchableColumn<TData> {
  id: DotNestedKeys<TData>;
  title: string;
}
export interface DataTableVisibleColumn<TData> {
  id: DotNestedKeys<TData>;
  value: boolean;
}
export interface DataTableFilterableColumn<TData>
  extends DataTableSearchableColumn<TData> {
  options: Option[];
}

interface DataTableButtonProps<TData> {
  table: Table<TData>;
}
export type DataTableDownloadRowsButtonType<TData> = React.ComponentType<
  DataTableButtonProps<TData>
>;
