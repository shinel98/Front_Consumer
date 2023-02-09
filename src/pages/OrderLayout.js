import { Grid } from "@mui/material";
import { Stack } from "@mui/material";
import { ListItem } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import ChattingBar from "../components/ChattingBar";
import FullWidthTabs from "../components/FullWidthTabs";
import MenuList from "../components/MenuList";
import MenuSum from "../components/MenuSum";

export default function OrderLayout() {
  return (
    // <Container sx={{ border: 1 }}>
    <Grid container>
      {/* 메뉴판 */}

      <Grid item xs={9} md={12}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <MenuList />
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid item xs={3} md={2}>
        <Grid container></Grid>
      </Grid> */}
    </Grid>

    // </Container>
  );
}
