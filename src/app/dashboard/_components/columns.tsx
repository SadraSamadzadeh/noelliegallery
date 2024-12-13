"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Image = {
  userId: string;
  id: number;
  name: string;
  url: string;
  createdAt: string;
  updatedAt: string | undefined;
}

export type DBImage = {
  userId: string;
  id: number;
  name: string;
  url: string;
  createdAt: Date;
  updatedAt: Date | null;
}

export const columns: ColumnDef<Image>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "url",
    header: "URL",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
  },
  {
    accessorKey: "userId",
    header: "Owner",
  },
]
