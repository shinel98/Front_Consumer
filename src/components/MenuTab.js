import { Box } from "@mui/material";

import styles from "../styles/Menu.module.css";
import Dropdown from "./Dropdown";

import { useState } from "react";
import "../styles/animation.css";
import { useEffect } from "react";
import * as React from "react";

import CartItem from "./CartItem";
import { useRecoilState } from "recoil";
import { menuBuf, menuListState } from "../store/atom";

const dummyData = [
  {
    id: 0,
    img: "img/두루치기.jpg",
    category: "한식",
    name: "돼지 두루치기",
    desc: "맛있는 두루치기",
    price: "12000",
    amount: 1,
    orderAmount: 1,
  },
  {
    id: 1,
    img: "img/김치찌개.jpg",
    category: "한식",
    name: "목살 김치찌개",
    desc: "맛있는 김치찌개",
    price: "10000",
    amount: 1,
    orderAmount: 10,
  },
  {
    id: 2,
    img: "img/로제파스타.jpeg",
    category: "양식",
    name: "로제 스파게티",
    desc: "맛있는 스파게티",
    price: "12000",
    amount: 1,
    orderAmount: 10,
  },
  {
    id: 3,
    img: "img/감바스.jpg",
    category: "",
    name: "양식",
    price: "12000",
    amount: 1,
    orderAmount: 8,
  },
  {
    id: 4,
    img: "img/김치볶음밥.jpeg",
    category: "한식",
    name: "김치볶음밥",
    price: "10000",
    amount: 1,
    orderAmount: 7,
  },
  {
    id: 5,
    img: "img/연어초밥.jpeg",
    category: "일식",
    name: "연어초밥",
    price: "13000",
    amount: 1,
    orderAmount: 5,
  },
  {
    id: 6,
    img: "img/광어초밥.jpeg",
    category: "일식",
    name: "광어초밥",
    price: "14000",
    amount: 1,
    orderAmount: 4,
  },
  {
    id: 7,
    img: "img/갈비탕.jpeg",
    category: "한식",
    name: "갈비탕",
    price: "14000",
    amount: 1,
    orderAmount: 3,
  },
  {
    id: 8,
    img: "img/육회비빔밥.jpeg",
    category: "한식",
    name: "육회비빔밥",
    price: "12000",
    amount: 1,
    orderAmount: 2,
  },
  {
    id: 9,
    img: "img/설렁탕.jpeg",
    category: "한식",
    name: "설렁탕",
    price: "11000",
    amount: 1,
    orderAmount: 8,
  },
  {
    id: 10,
    img: "img/육개장.jpeg",
    category: "한식",
    name: "육개장",
    price: "12000",
    amount: 1,
    orderAmount: 9,
  },
  {
    id: 11,
    img: "img/콜라.jpeg",
    category: "음료",
    name: "콜라",
    price: "2000",
    amount: 1,
    orderAmount: 9,
  },
  {
    id: 12,
    img: "img/환타.jpeg",
    category: "음료",
    name: "환타",
    price: "2000",
    amount: 1,
    orderAmount: 9,
  },
];
export default function MenuTab() {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [drop1, setDrop1] = useState(true);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);
  const [drop4, setDrop4] = useState(false);
  const [tmpMenu, setTmpMenu] = useState([]);
  const [test, setTest] = useState([]);
  const [menuList, setMenuList] = useRecoilState(menuListState);
  const [arr, setArr] = useState([]);
  const [noDuplicateMenu, setNoDuplicateMenu] = useRecoilState(menuBuf);
  // let arr = [];
  const onChangeProps = (id, key, value) => {
    setTmpMenu((prevState) => {
      return prevState.map((obj) => {
        if (obj.id === id) {
          return { ...obj, [key]: value };
        } else {
          return { ...obj };
        }
      });
    });
  };
  const addMenu = (menu, key, value) => {
    let flag = false;
    setArr(noDuplicateMenu);
    setMenuList((prev) => {
      if (prev.length === 0) {
        let newArr = [...prev, menu];
        setArr([menu.id]);
        return newArr;
      }

      console.log("arr : " + arr);
      let temp = prev.map((obj) => {
        if (obj.id === menu.id) {
          console.log("음식 값 더해짐");
          return { ...obj, [key]: value + obj.amount };
        } else {
          if (arr.includes(menu.id)) {
            return { ...obj };
          }

          flag = true;
          return 2;
        }
      });
      if (flag === true) {
        console.log("새로운 음식 담아짐");
        flag = false;
        let temp = [...arr, menu.id];
        setArr(temp);
        let newArr = [...prev, menu];

        return newArr;
      }
      return temp;
    });

    setNoDuplicateMenu(arr);
    console.log("menu: " + [...noDuplicateMenu]);
  };

  useEffect(() => {
    setTmpMenu([...dummyData]);
  }, []);
  return (
    <>
      <Box sx={{ height: "100vh" }}>
        <Box
          sx={{ width: 1, height: "60px", textAlign: "center" }}
          onClick={(event) => setDrop1(!drop1)}
          className={styles.boxShadow}
        >
          <div className={styles.category}>인기 메뉴</div>
        </Box>
        <Dropdown visibility={drop1}>
          <ul className={styles.noListDeco}>
            <Box sx={{ width: 1 }}>
              {tmpMenu.map((item, index) => {
                return (
                  <>
                    {item.orderAmount >= 10 ? (
                      <CartItem
                        key={item.id}
                        item={item}
                        onChangeProps={onChangeProps}
                        addMenu={addMenu}
                      />
                    ) : (
                      <div></div>
                    )}
                  </>
                );
              })}
            </Box>
          </ul>
        </Dropdown>
        <Box
          sx={{ width: 1, height: "60px", textAlign: "center" }}
          onClick={(event) => setDrop2(!drop2)}
          className={styles.boxShadow}
        >
          <div className={styles.category}>일식</div>
        </Box>
        <Dropdown visibility={drop2}>
          <ul className={styles.noListDeco}>
            <Box sx={{ width: 1 }}>
              {tmpMenu.map((item, index) => {
                return (
                  <>
                    {item.category === "일식" ? (
                      <CartItem
                        key={item.id}
                        item={item}
                        onChangeProps={onChangeProps}
                        addMenu={addMenu}
                      />
                    ) : (
                      <div></div>
                    )}
                  </>
                );
              })}
            </Box>
          </ul>
        </Dropdown>
        <Box
          sx={{ width: 1, height: "60px", textAlign: "center" }}
          onClick={(event) => setDropdownVisibility(!dropdownVisibility)}
          className={styles.boxShadow}
        >
          <div className={styles.category}>양식</div>
        </Box>
        <Dropdown visibility={dropdownVisibility}>
          <ul className={styles.noListDeco}>
            <Box sx={{ width: 1 }} className={styles.boxShadow}>
              {tmpMenu.map((item, index) => {
                return (
                  <>
                    {item.category === "양식" ? (
                      <CartItem
                        key={item.id}
                        item={item}
                        onChangeProps={onChangeProps}
                      />
                    ) : (
                      <div></div>
                    )}
                  </>
                );
              })}
            </Box>
          </ul>
        </Dropdown>

        <Box
          sx={{ width: 1, height: "60px", textAlign: "center" }}
          onClick={(event) => setDrop3(!drop3)}
          className={styles.boxShadow}
        >
          <div className={styles.category}>한식</div>
        </Box>
        <Dropdown visibility={drop3}>
          <ul className={styles.noListDeco}>
            <Box sx={{ width: 1 }}>
              {tmpMenu.map((item, index) => {
                return (
                  <>
                    {item.category === "한식" ? (
                      <CartItem
                        key={item.id}
                        item={item}
                        onChangeProps={onChangeProps}
                      />
                    ) : (
                      <div></div>
                    )}
                  </>
                );
              })}
            </Box>
          </ul>
        </Dropdown>
        <Box
          sx={{ width: 1, height: "60px", textAlign: "center" }}
          onClick={(event) => setDrop4(!drop4)}
          className={styles.boxShadow}
        >
          <div className={styles.category}>음료</div>
        </Box>
        <Dropdown visibility={drop4}>
          <ul className={styles.noListDeco}>
            <Box sx={{ width: 1 }}>
              {tmpMenu.map((item, index) => {
                return (
                  <>
                    {item.category === "음료" ? (
                      <CartItem
                        key={item.id}
                        item={item}
                        onChangeProps={onChangeProps}
                      />
                    ) : (
                      <div></div>
                    )}
                  </>
                );
              })}
            </Box>
          </ul>
        </Dropdown>
        {/* <div className={styles.historyBtn}>주문 내역</div> */}
      </Box>
    </>
  );
}
