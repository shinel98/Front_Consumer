import { Grid } from "@mui/material";
import Header from "../components/Header";
import "../global.css";
import OrderTabs from "../components/OrderTabs";

function Main() {
  return (
    <Grid container sx={{ border: 1 }}>
      <Grid item sx={{ border: 1, width: 1 }}>
        <Header />
      </Grid>
      <Grid item sx={{ border: 1, width: 1, height: "100vh" }}>
        <OrderTabs />
      </Grid>
    </Grid>
  );
}

export default Main;
