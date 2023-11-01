import {
  Card,
  CardContent,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
} from "@mui/material";

interface Supply {
  id: string;
  brand: string;
  model: string;
  serial: string;
}

export interface SupplyCardProps {
  supply: Supply;
}

export function SupplyCard({ supply }: SupplyCardProps): React.ReactElement {
  return (
    <Card sx={{ minWidth: 250 }}>
      <CardContent>
        <List dense disablePadding>
          <ListSubheader>Información general</ListSubheader>

          <ListItem>
            <ListItemText primary="Marca" secondary={supply.brand} />
          </ListItem>

          <ListItem>
            <ListItemText primary="Modelo" secondary={supply.model} />
          </ListItem>

          <ListItem>
            <ListItemText primary="Número de serie" secondary={supply.serial} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
