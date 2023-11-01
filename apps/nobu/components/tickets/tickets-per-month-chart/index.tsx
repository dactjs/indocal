"use client";

import { Paper, Stack, Divider, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts";

import { TICKET_SERVICE_CATEGORIES_MOCK } from "~/lib";

import { months, labels } from "./config";
import type { Serie } from "./types";

export type TicketsPerMonthChartData = Serie & { month: number };
export type TicketsPerMonthChartDataset = TicketsPerMonthChartData[];

export interface TicketsPerMonthChartProps {
  title: string;
  dataset: TicketsPerMonthChartDataset;
}

export function TicketsPerMonthChart({
  title,
  dataset,
}: TicketsPerMonthChartProps): React.ReactElement {
  return (
    <Paper sx={{ height: "100%", padding: 2 }}>
      <Stack spacing={1} divider={<Divider flexItem />} sx={{ height: "100%" }}>
        <Typography color="text.secondary">{title}</Typography>

        <Stack sx={{ height: "100%" }}>
          <BarChart
            margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
            xAxis={[
              {
                dataKey: "month",
                scaleType: "band",
                valueFormatter: (month: number) => labels[months[month]],
              },
            ]}
            series={Object.values(TICKET_SERVICE_CATEGORIES_MOCK).map(
              ({ name }) => ({
                dataKey: name,
                label: name,
                stack: "category",
              })
            )}
            dataset={dataset}
            slotProps={{ legend: { hidden: true } }}
          />
        </Stack>
      </Stack>
    </Paper>
  );
}
