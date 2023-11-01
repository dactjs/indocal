"use client";

import { Paper, Stack, Divider, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";

import { days, labels } from "./config";
import type { Serie } from "./types";

export type WeekActivityChartData = Serie & { hour: number };
export type WeekActivityChartDataset = WeekActivityChartData[];

export interface WeekActivityChartProps {
  title: string;
  dataset: WeekActivityChartDataset;
}

export function WeekActivityChart({
  title,
  dataset,
}: WeekActivityChartProps): React.ReactElement {
  return (
    <Paper sx={{ height: "100%", padding: 2 }}>
      <Stack spacing={1} divider={<Divider flexItem />} sx={{ height: "100%" }}>
        <Typography color="text.secondary">{title}</Typography>

        <Stack sx={{ height: "100%" }}>
          <LineChart
            margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
            xAxis={[
              {
                dataKey: "hour",
                scaleType: "band",
                valueFormatter: (hour: number) =>
                  `${String(hour).padStart(2, "0")}:00`,
              },
            ]}
            series={Object.values(days).map((key) => ({
              dataKey: key,
              label: labels[key],
            }))}
            dataset={dataset}
            slotProps={{ legend: { hidden: true } }}
          />
        </Stack>
      </Stack>
    </Paper>
  );
}
