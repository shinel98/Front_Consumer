// import * as React from "react";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { IconButton } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import { Divider } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemAvatar } from "@mui/material";
import { Avatar } from "@mui/material";
import { ListItemText } from "@mui/material";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const dummyData = [
  {
    id: 1,
    img: "img/두루치기.jpg",
    category: "음식",
    name: "돼지 두루치기",
    price: "12000",
  },
  {
    id: 2,
    img: "img/김치찌개.jpg",
    category: "음식",
    name: "목살 김치찌개",
    price: "10000",
  },
  {
    id: 3,
    img: "img/로제파스타.jpeg",
    category: "음식",
    name: "로제 스파게티",
    price: "12000",
  },
  {
    id: 4,
    img: "img/감바스.jpg",
    category: "음식",
    name: "감바스",
    price: "12000",
  },
  {
    id: 5,
    img: "img/김치볶음밥.jpeg",
    category: "음식",
    name: "김치볶음밥",
    price: "10000",
  },
  {
    id: 6,
    img: "img/연어초밥.jpeg",
    category: "음식",
    name: "연어초밥",
    price: "13000",
  },
  {
    id: 7,
    img: "img/광어초밥.jpeg",
    category: "음식",
    name: "광어초밥",
    price: "14000",
  },
  {
    id: 8,
    img: "img/갈비탕.jpeg",
    category: "음식",
    name: "갈비탕",
    price: "14000",
  },
  {
    id: 9,
    img: "img/육회비빔밥.jpeg",
    category: "음식",
    name: "육회비빔밥",
    price: "12000",
  },
  {
    id: 10,
    img: "img/설렁탕.jpeg",
    category: "음식",
    name: "설렁탕",
    price: "11000",
  },
  {
    id: 11,
    img: "img/육개장.jpeg",
    category: "음식",
    name: "육개장",
    price: "12000",
  },
  {
    id: 1,
    img: "img/두루치기.jpg",
    category: "음식",
    name: "돼지 두루치기",
    price: "12000",
  },
  {
    id: 2,
    img: "img/김치찌개.jpg",
    category: "음식",
    name: "목살 김치찌개",
    price: "10000",
  },
  {
    id: 3,
    img: "img/로제파스타.jpeg",
    category: "음식",
    name: "로제 스파게티",
    price: "12000",
  },
  {
    id: 4,
    img: "img/감바스.jpg",
    category: "음식",
    name: "감바스",
    price: "12000",
  },
  {
    id: 5,
    img: "img/김치볶음밥.jpeg",
    category: "음식",
    name: "김치볶음밥",
    price: "10000",
  },
  {
    id: 6,
    img: "img/연어초밥.jpeg",
    category: "음식",
    name: "연어초밥",
    price: "13000",
  },
  {
    id: 7,
    img: "img/광어초밥.jpeg",
    category: "음식",
    name: "광어초밥",
    price: "14000",
  },
  {
    id: 8,
    img: "img/갈비탕.jpeg",
    category: "음식",
    name: "갈비탕",
    price: "14000",
  },
  {
    id: 9,
    img: "img/육회비빔밥.jpeg",
    category: "음식",
    name: "육회비빔밥",
    price: "12000",
  },
  {
    id: 10,
    img: "img/설렁탕.jpeg",
    category: "음식",
    name: "설렁탕",
    price: "11000",
  },
  {
    id: 11,
    img: "img/육개장.jpeg",
    category: "음식",
    name: "육개장",
    price: "12000",
  },
  {
    id: 5,
    img: "img/김치볶음밥.jpeg",
    category: "음식",
    name: "김치볶음밥",
    price: "10000",
  },
  {
    id: 6,
    img: "img/연어초밥.jpeg",
    category: "음식",
    name: "연어초밥",
    price: "13000",
  },
  {
    id: 7,
    img: "img/광어초밥.jpeg",
    category: "음식",
    name: "광어초밥",
    price: "14000",
  },
  {
    id: 8,
    img: "img/갈비탕.jpeg",
    category: "음식",
    name: "갈비탕",
    price: "14000",
  },
  {
    id: 9,
    img: "img/육회비빔밥.jpeg",
    category: "음식",
    name: "육회비빔밥",
    price: "12000",
  },
  {
    id: 10,
    img: "img/설렁탕.jpeg",
    category: "음식",
    name: "설렁탕",
    price: "11000",
  },
  {
    id: 11,
    img: "img/육개장.jpeg",
    category: "음식",
    name: "육개장",
    price: "12000",
  },
  {
    id: 12,
    img: "img/콜라.jpeg",
    category: "음료",
    name: "콜라",
    price: "2000",
  },
  {
    id: 13,
    img: "img/사이다.jpeg",
    category: "음료",
    name: "사이다",
    price: "2000",
  },
  {
    id: 14,
    img: "img/환타.jpeg",
    category: "음료",
    name: "환타",
    price: "2000",
  },
];

const Item = styled(Card)({
  userSelect: "none",
  ":hover": {
    transform: "scale(1.02)",
    cursor: "pointer",
  },
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function MenuList() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [selectMenuList, setSelectMenuList] = useState([]);
  const [menus, setMenus] = useState([]);
  const [count, setCount] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleAddMenu = (menu) => {
    let flag = false;
    selectMenuList.forEach((item, index) => {
      if (item.id === menu.id) {
        flag = true;
        setCount((old) => {
          let newCount = [...old];
          newCount[index]++;
          return newCount;
        });
      }
    });
    if (flag) return;
    setCount((old) => [...old, 1]);
    setSelectMenuList((old) => [...old, menu]);
  };
  const handleClickReset = () => {
    setCount([]);
    setSelectMenuList([]);
  };
  const handleDeleteMenu = (number) => {
    setCount((old) => old.filter((_, i) => number !== i));
    setSelectMenuList((old) => old.filter((_, i) => number !== i));
  };
  const getTotalPrice = () => {
    let result = 0;
    selectMenuList.forEach((item, index) => {
      result += item.price * count[index];
    });
    return result;
  };

  const totalPrice = getTotalPrice();

  return (
    <Box sx={{ display: "flex", gap: 2, height: 1 }}>
      <Box
        sx={{
          bgcolor: "background.paper",
          width: 1,
          overflow: "auto",
          height: "100vh",
        }}
      >
        <AppBar position="sticky">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            sx={{ bgcolor: "green" }}
          >
            <Tab label="음식" {...a11yProps(0)} />
            <Tab label="음료" {...a11yProps(1)} />
            <Tab label="추후 추가" {...a11yProps(2)} />
            <Tab label="추후 추가" {...a11yProps(3)} />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Box
              sx={{
                flexGrow: 1,
                height: 1,
                p: 3,
                pt: 0,
                overflow: "auto",
              }}
            >
              <Grid container spacing={{ xs: 2, md: 3 }}>
                {dummyData.map((menu) =>
                  menu.category === "음식" ? (
                    <Grid item xs={4} md={3} lg={2} key={menu.id}>
                      <Item onClick={() => handleAddMenu(menu)}>
                        <Box
                          component="img"
                          alt={menu.name}
                          src={menu.img}
                          sx={{ width: 1, height: 100 }}
                        />
                        <Box sx={{ p: 2, pb: 3 }}>
                          <Typography fontWeight={600}>{menu.name}</Typography>
                          <Typography color="blue" fontWeight={600}>
                            {menu.price}원
                          </Typography>
                        </Box>
                      </Item>
                    </Grid>
                  ) : (
                    ""
                  )
                )}
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Box
              sx={{
                flexGrow: 1,
                height: 1,
                p: 3,
                pt: 0,
                overflow: "auto",
              }}
            >
              <Grid container spacing={{ xs: 2, md: 3 }}>
                {dummyData.map((menu) =>
                  menu.category === "음료" ? (
                    <Grid item xs={4} md={3} lg={2} key={menu.id}>
                      <Item onClick={() => handleAddMenu(menu)}>
                        <Box
                          component="img"
                          alt={menu.name}
                          src={menu.img}
                          sx={{ width: 1, height: 100 }}
                        />
                        <Box sx={{ p: 2, pb: 3 }}>
                          <Typography fontWeight={600}>{menu.name}</Typography>
                          <Typography color="blue" fontWeight={600}>
                            {menu.price}원
                          </Typography>
                        </Box>
                      </Item>
                    </Grid>
                  ) : (
                    ""
                  )
                )}
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Box sx={{ color: "grey" }}>
              <Grid container spacing={{ xs: 2, md: 3 }}>
                <Grid item sx={{ width: 1 }}>
                  <Box
                    sx={{
                      textAlign: "center",
                      pt: "250px",
                    }}
                  >
                    등록된 상품이 없습니다.
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <Box sx={{ color: "grey" }}>
              <Grid container spacing={{ xs: 2, md: 3 }}>
                <Grid item sx={{ width: 1 }}>
                  <Box
                    sx={{
                      textAlign: "center",
                      pt: "250px",
                    }}
                  >
                    등록된 상품이 없습니다.
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
        </SwipeableViews>
      </Box>

      {/* <Box sx={{ flexGrow: 1, height: 1, p: 3, pt: 0, overflow: "auto" }}> */}
      {/* <Typography variant="h5" sx={{ p: 2 }}>
          메뉴 리스트
        </Typography> */}
      {/* <Grid container spacing={{ xs: 2, md: 3 }}>
          {dummyData.map((menu) => (
            <Grid item xs={4} md={3} lg={2} key={menu.id}>
              <Item onClick={() => handleAddMenu(menu)}>
                <Box
                  component="img"
                  alt={menu.name}
                  src={menu.img}
                  sx={{ width: 1, height: 100 }}
                />
                <Box sx={{ p: 2, pb: 3 }}>
                  <Typography fontWeight={600}>{menu.name}</Typography>
                  <Typography color="blue" fontWeight={600}>
                    {menu.price}원
                  </Typography>
                </Box>
              </Item>
            </Grid>
          ))}
        </Grid> */}
      {/* </Box> */}
      <Box sx={{ minWidth: 280, height: 1 }}>
        <Card
          sx={{
            width: 1,
            height: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5">담은 메뉴</Typography>
            <IconButton edge="end" onClick={handleClickReset} size="small">
              <RestartAltIcon fontSize="small" />
            </IconButton>
          </Box>
          <Divider />
          <List sx={{ flexGrow: 1, overflow: "auto" }}>
            {selectMenuList?.map((menu, index) => (
              <ListItem
                key={menu.id}
                secondaryAction={
                  <IconButton
                    edge="end"
                    onClick={() => handleDeleteMenu(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar alt={menu.name} src={menu.img} variant="rounded" />
                </ListItemAvatar>
                <ListItemText
                  primary={`${menu.name} ${
                    count[index] < 2 ? "" : `× ${count[index]}`
                  }`}
                  secondary={`${menu.price * count[index]}원`}
                />
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Typography
              variant="h6"
              sx={{ display: "flex", justifyContent: "space-evenly" }}
              gutterBottom
            >
              <span>총:</span>
              <span>{totalPrice}원</span>
            </Typography>
            <Button variant="contained" color="success" sx={{ width: 1 }}>
              주문하기
            </Button>
            {/* <OrderModal price={totalPrice} reset={handleClickReset} /> */}
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
