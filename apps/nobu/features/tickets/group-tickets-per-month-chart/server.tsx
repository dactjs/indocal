import type { Ticket } from "@indocal/schemas";

import { TICKETS_MOCK, TICKET_SERVICE_CATEGORIES_MOCK } from "~/lib";

import { TicketsPerMonthChart } from "~/components/tickets/tickets-per-month-chart";
import type { Serie } from "~/components/tickets/tickets-per-month-chart/types";

export async function ServerGroupTicketsPerMonthChart(): Promise<React.ReactElement> {
  // TODO: Fetch data from the server
  const tickets = await new Promise<Ticket[]>((resolve) => {
    const delay = Math.floor(Math.random() * 3000);

    setTimeout(() => {
      resolve(TICKETS_MOCK);
    }, delay);
  });

  const INITIAL_VALUES: Record<number, Serie> = new Array(12) // january to december
    .fill(null)
    .reduce<Record<number, Serie>>((acc, _, index) => {
      const month = index;

      return {
        ...acc,
        [month]: TICKET_SERVICE_CATEGORIES_MOCK.reduce<Serie>(
          (count, category) => {
            return {
              ...count,
              [category.name]: 0,
            };
          },
          {}
        ),
      };
    }, {});

  const dataset = Object.entries(
    tickets.reduce<Record<number, Serie>>((acc, current) => {
      const date = new Date(current.createdAt);

      const month = date.getMonth();
      const category = current.service.category.name;

      return {
        ...acc,
        [month]: {
          ...acc[month],
          [category]: acc[month][category] + 1,
        },
      };
    }, INITIAL_VALUES)
  ).map(([month, count]) => ({ month: Number(month), ...count }));

  return <TicketsPerMonthChart title="Tickets por mes" dataset={dataset} />;
}
