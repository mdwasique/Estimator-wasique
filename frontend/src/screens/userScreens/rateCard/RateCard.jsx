import styles from "./rateCard.module.scss";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 80 },
  {
    field: "rateCode",
    headerName: "Rate Code",
    width: 150,
  },
  {
    field: "role",
    headerName: "Role",
    width: 220,
  },
  {
    field: "listRate",
    headerName: "List Rate",
    width: 120,
  },
  {
    field: "projectRate",
    headerName: "Project Rate",
    width: 120,
  },
  {
    field: "projectRate",
    headerName: "Project Rate",
    width: 120,
  },
  {
    field: "change",
    headerName: "Change%",
    width: 120,
  },
  {
    field: "modifyRate",
    headerName: "Modify Rate",
    width: 120,
  },
];

columns.forEach((column) => {
  column.headerClassName = styles.customHeader; // Apply your custom style class
});

const rows = [
  {
    id: 1,
    rateCode: "PML-1",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
  {
    id: 2,
    rateCode: "PML-1",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
  {
    id: 3,
    rateCode: "PML-1",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
  {
    id: 4,
    rateCode: "PML-1",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
  {
    id: 5,
    rateCode: "PML-1",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
  {
    id: 6,
    rateCode: "PML-1",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
  {
    id: 7,
    rateCode: "PML-1",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
  {
    id: 8,
    rateCode: "PML-1",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
  {
    id: 9,
    rateCode: "PML-1",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
  {
    id: 10,
    rateCode: "PML-1",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
  {
    id: 11,
    rateCode: "PML-1",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
  {
    id: 12,
    rateCode: "PML-1",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
  {
    id: 13,
    rateCode: "PML-1",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
  {
    id: 14,
    rateCode: "PML-1",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
  {
    id: 15,
    rateCode: "PML-1",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
  {
    id: 16,
    rateCode: "PML-1",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
  {
    id: 17,
    rateCode: "PML-1",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
  {
    id: 18,
    rateCode: "PML-1",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
  {
    id: 19,
    rateCode: "PML-1",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
  {
    id: 20,
    rateCode: "PML-5",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
  {
    id: 21,
    rateCode: "PML-20",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
  {
    id: 22,
    rateCode: "PML-1",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
  {
    id: 23,
    rateCode: "PML-3",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
  {
    id: 24,
    rateCode: "PML-2",
    role: "Enterprise Project Manager",
    listRate: "$250",
    projectRate: "$225",
    change: "10%",
    modifyRate: "$200",
  },
];

const RateCard = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.navbar}>NAVBAR</header>
      <div style={{ display: "flex" }}>
        <aside className={styles.sidebar}>SIDEBAR</aside>
        <main className={styles.main}>
          <div className={styles.navigate}>
            <h2>Rate Card</h2>
            <div className={styles.button1}>
              <button className={styles.button1}>
                <FileDownloadOutlinedIcon style={{ fontSize: "18px" }} />
                Export
              </button>
              <button className={styles.button2}>
                <AddOutlinedIcon style={{ fontSize: "18px" }} />
                <span>New Rate</span>
              </button>
            </div>
          </div>
          <div className={styles.link}>
            <span>All Roles</span>
            <span>Active Roles</span>
            <span>In-Active Roles</span>
          </div>
          <Box sx={{ height: "100%", width: "100%" }}>
            <DataGrid
              className="dataGrid"
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 7,
                  },
                },
              }}
              slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 250 },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
              disableColumnFilter
              disableDensitySelector
              disableColumnSelector
            />
          </Box>
        </main>
      </div>
    </div>
  );
};

export default RateCard;
