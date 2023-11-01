import type { Ticket } from "@indocal/schemas";

import { TICKETS_MOCK } from "~/lib";

import { WeekActivityChart } from "~/components/tickets/week-activity-chart";
import { days } from "~/components/tickets/week-activity-chart/config";
import type { Serie } from "~/components/tickets/week-activity-chart/types";

export async function ServerCurrentWeekActivityChart(): Promise<React.ReactElement> {
  // TODO: Fetch data from the server
  const tickets = await new Promise<Ticket[]>((resolve) => {
    const delay = Math.floor(Math.random() * 3000);

    setTimeout(() => {
      resolve(TICKETS_MOCK);
    }, delay);
  });

  const INITIAL_VALUES: Record<number, Serie> = new Array(11) // 7am to 5pm
    .fill(null)
    .reduce<Record<number, Serie>>((acc, _, index) => {
      const hour = index + 7;

      return {
        ...acc,
        [hour]: {
          monday: 0,
          tuesday: 0,
          wednesday: 0,
          thursday: 0,
          friday: 0,
        },
      };
    }, {});

  const dataset = Object.entries(
    tickets.reduce<Record<number, Serie>>((acc, current) => {
      const date = new Date(current.createdAt);

      const hour = date.getHours();
      const day = days[date.getDay()];

      return {
        ...acc,
        [hour]: {
          ...acc[hour],
          [day]: acc[hour][day] + 1,
        },
      };
    }, INITIAL_VALUES)
  ).map(([hour, count]) => ({ hour: Number(hour), ...count }));

  return <WeekActivityChart title="Actividad semanal" dataset={dataset} />;
}
