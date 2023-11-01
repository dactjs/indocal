import {
  Card,
  CardContent,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
} from "@mui/material";

interface User {
  id: string;
  username: string;
  email: string;
  name: string;
}

export interface UserCardProps {
  title: string;
  user: User;
}

export function UserCard({ title, user }: UserCardProps): React.ReactElement {
  return (
    <Card sx={{ minWidth: 250 }}>
      <CardContent>
        <List dense disablePadding>
          <ListSubheader>{title}</ListSubheader>

          <ListItem>
            <ListItemText primary="Usuario" secondary={user.username} />
          </ListItem>

          <ListItem>
            <ListItemText primary="Correo electrónico" secondary={user.email} />
          </ListItem>

          <ListItem>
            <ListItemText primary="Nombre" secondary={user.name} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
