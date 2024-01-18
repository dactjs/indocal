import NextLink from "next/link";
import {
  Box,
  Paper,
  Unstable_Grid2 as Grid,
  TextField,
  Typography,
  Button,
  Link as MuiLink,
  Avatar,
} from "@mui/material";
import { LockOutlined as LockIcon } from "@mui/icons-material";

import { PAGES } from "~/constants";

export default function SignInPage(): React.ReactElement {
  return (
    <Grid component="main" container sx={{ height: "100vh" }}>
      <Grid
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <Grid component={Paper} square xs={12} sm={8} md={5} elevation={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginX: 4,
            marginY: 8,
          }}
        >
          <Avatar sx={{ margin: 1, backgroundColor: "secondary.main" }}>
            <LockIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Iniciar sesión
          </Typography>

          <Box sx={{ marginTop: 1 }}>
            <TextField
              required
              fullWidth
              autoComplete="username"
              margin="normal"
              name="username"
              label="Usuario"
            />

            <TextField
              required
              fullWidth
              autoComplete="current-password"
              margin="normal"
              name="password"
              label="Contraseña"
              type="password"
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{ marginTop: 3, marginBottom: 2 }}
            >
              Iniciar sesión
            </Button>

            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              spacing={1}
            >
              <Grid>
                <MuiLink
                  component={NextLink}
                  href={PAGES.RESET_PASSWORD}
                  variant="body2"
                >
                  ¿Olvidaste tu contraseña?
                </MuiLink>
              </Grid>

              <Grid>
                <MuiLink
                  component={NextLink}
                  href={PAGES.SIGN_UP}
                  variant="body2"
                >
                  ¿No tienes cuenta? Regístrate
                </MuiLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
