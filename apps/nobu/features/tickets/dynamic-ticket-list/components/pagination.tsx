"use client";

import { Pagination as MuiPagination } from "@mui/material";

export interface PaginationProps {
  count: number;
}

export function Pagination({ count }: PaginationProps): React.ReactElement {
  return <MuiPagination variant="outlined" shape="rounded" count={count} />;
}
