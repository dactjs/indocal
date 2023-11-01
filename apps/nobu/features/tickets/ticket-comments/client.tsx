"use client";

import {
  Box,
  Paper,
  Stack,
  AppBar,
  Toolbar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import {
  AddCircle as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

import { NoData } from "@indocal/ui";
import type { TicketComment } from "@indocal/schemas";

export interface ClientTicketCommentsProps {
  comments: TicketComment[];
}

export function ClientTicketComments({
  comments,
}: ClientTicketCommentsProps): React.ReactElement {
  return (
    <Stack component={Paper} sx={{ height: "100%", overflow: "hidden" }}>
      <AppBar position="static" sx={{ borderRadius: "inherit" }}>
        <Stack
          component={Toolbar}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Typography fontWeight="bolder">Comentarios</Typography>

          <IconButton color="inherit">
            <AddIcon />
          </IconButton>
        </Stack>
      </AppBar>

      <Box sx={{ height: "100%", padding: 1, overflowY: "auto" }}>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Accordion key={comment.id}>
              <AccordionSummary>
                <Typography
                  component="pre"
                  sx={{
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                >
                  {comment.content}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography variant="caption" color="text.secondary">
                  {`Escrito por ${comment.writtenBy.name} el ${new Date(
                    comment.createdAt
                  ).toLocaleString("es-do")}`}
                </Typography>
              </AccordionDetails>

              <AccordionActions>
                <Button
                  variant="contained"
                  size="small"
                  color="error"
                  endIcon={<DeleteIcon />}
                >
                  Eliminar
                </Button>

                <Button variant="contained" size="small" endIcon={<EditIcon />}>
                  Editar
                </Button>
              </AccordionActions>
            </Accordion>
          ))
        ) : (
          <NoData message="Sin comentarios" />
        )}
      </Box>
    </Stack>
  );
}
