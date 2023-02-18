import { Grid } from "@mui/material";
import Header from "../components/Header";
import "../global.css";
import { useParams } from "react-router-dom";
import OrderTabs from "../components/OrderTabs";
import { useEffect, useState } from "react";
import axios from "axios";

function Main() {
  // const { seatId } = useParams();
  const [seatId, setSeatId] = useState(2);
  const [seat, setSeat] = useState();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getSeat();
    setLoad(true);
  }, []);

  async function getSeat() {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/seat/${seatId}`
      );
      setSeat(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Grid container>
      {load ? (
        <>
          <Grid item sx={{ width: 1 }}>
            <Header />
          </Grid>
          <Grid item sx={{ width: 1, height: "100vh" }}>
            <OrderTabs seat={seat} />
          </Grid>
        </>
      ) : (
        <>
          <Grid item sx={{ width: 1 }}>
            <Header />
          </Grid>
          <Grid item sx={{ width: 1, height: "100vh" }}></Grid>
        </>
      )}
    </Grid>
  );
}

export default Main;
