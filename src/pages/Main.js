import { Grid } from "@mui/material";
import Header from "../components/Header";
import "../global.css";
import OrderTabs from "../components/OrderTabs";

function Main() {
  return (
    <Grid container>
      <Grid item sx={{ width: 1 }}>
        <Header />
      </Grid>
      <Grid item sx={{ width: 1, height: "100vh" }}>
        <OrderTabs />
      </Grid>
    </Grid>
  );
}

export default Main;
