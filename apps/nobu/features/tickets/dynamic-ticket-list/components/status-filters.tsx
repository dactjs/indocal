"use client";

import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import {
  AssignmentLate as UnassignedIcon,
  AssignmentInd as AssignedIcon,
  HourglassBottom as InProgressIcon,
  CheckCircle as ResolvedIcon,
  Verified as ClosedIcon,
  Cancel as CancelledIcon,
} from "@mui/icons-material";

import { translateTicketStatus, TicketStatus } from "@indocal/schemas";

export function StatusFilters(): React.ReactElement {
  const filters = [
    {
      value: TicketStatus.UNASSIGNED,
      icon: <UnassignedIcon />,
    },
    {
      value: TicketStatus.ASSIGNED,
      icon: <AssignedIcon />,
    },
    {
      value: TicketStatus.IN_PROGRESS,
      icon: <InProgressIcon />,
    },
    {
      value: TicketStatus.RESOLVED,
      icon: <ResolvedIcon />,
    },
    {
      value: TicketStatus.CLOSED,
      icon: <ClosedIcon />,
    },
    {
      value: TicketStatus.CANCELLED,
      icon: <CancelledIcon />,
    },
  ];

  return (
    <ToggleButtonGroup size="small" aria-label="Filtros de estado">
      {filters.map(({ value, icon }) => (
        <ToggleButton
          key={value}
          value={value}
          aria-label={translateTicketStatus(value)}
        >
          {icon}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
