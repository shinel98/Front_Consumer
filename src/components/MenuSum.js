import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import { List } from "@mui/material";
import { Divider } from "@mui/material";
import { IconButton } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";

import React from "react";

const MenuSum = () => {
  return (
    <Box sx={{ height: 1 }}>
      <Card
        sx={{ width: 1, height: 1, display: "flex", flexDirection: "column" }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">담은 메뉴</Typography>
          <IconButton edge="end" size="small">
            <RestartAltIcon fontSize="small" />
          </IconButton>
        </Box>
        <Divider />
        <List sx={{ flexGrow: 1, overflow: "auto" }}></List>
      </Card>
    </Box>
  );
};

export default MenuSum;
