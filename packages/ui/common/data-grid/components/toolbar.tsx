import {
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";

export function DataGridToolbar(): React.ReactElement {
  return (
    <GridToolbarContainer
      sx={{
        justifyContent: "space-between",
        gap: 1,
        paddingTop: 1,
        paddingBottom: 0.5,
        borderBottom: "1px dashed rgba(255, 255, 255, 0.12)",
      }}
    >
      <GridToolbarExport
        csvOptions={{ utf8WithBom: true, delimiter: "," }}
        printOptions={{ hideToolbar: true, hideFooter: true }}
      />

      <GridToolbarQuickFilter
        autoComplete="off"
        variant="outlined"
        size="small"
      />
    </GridToolbarContainer>
  );
}
