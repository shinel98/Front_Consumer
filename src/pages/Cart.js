import { useEffect } from "react";
import { menuListState } from "../store/atom";
import { useRecoilValue } from "recoil";
import styles from "../styles/Cart.module.css";

// const dummyData = [
//   {
//     id: 0,
//     img: "img/두루치기.jpg",
//     category: "한식",
//     name: "돼지 두루치기",
//     price: "12000",
//     amount: 1,
//     orderAmount: 1,
//   },
//   {
//     id: 1,
//     img: "img/김치찌개.jpg",
//     category: "한식",
//     name: "목살 김치찌개",
//     price: "10000",
//     amount: 1,
//     orderAmount: 10,
//   },
//   {
//     id: 2,
//     img: "img/로제파스타.jpeg",
//     category: "양식",
//     name: "로제 스파게티",
//     price: "12000",
//     amount: 1,
//     orderAmount: 10,
//   },
//   {
//     id: 3,
//     img: "img/감바스.jpg",
//     category: "",
//     name: "양식",
//     price: "12000",
//     amount: 1,
//     orderAmount: 8,
//   },
//   {
//     id: 4,
//     img: "img/김치볶음밥.jpeg",
//     category: "한식",
//     name: "김치볶음밥",
//     price: "10000",
//     amount: 1,
//     orderAmount: 7,
//   },
//   {
//     id: 5,
//     img: "img/연어초밥.jpeg",
//     category: "일식",
//     name: "연어초밥",
//     price: "13000",
//     amount: 1,
//     orderAmount: 5,
//   },
//   {
//     id: 6,
//     img: "img/광어초밥.jpeg",
//     category: "일식",
//     name: "광어초밥",
//     price: "14000",
//     amount: 1,
//     orderAmount: 4,
//   },
//   {
//     id: 7,
//     img: "img/갈비탕.jpeg",
//     category: "한식",
//     name: "갈비탕",
//     price: "14000",
//     amount: 1,
//     orderAmount: 3,
//   },
//   {
//     id: 8,
//     img: "img/육회비빔밥.jpeg",
//     category: "한식",
//     name: "육회비빔밥",
//     price: "12000",
//     amount: 1,
//     orderAmount: 2,
//   },
//   {
//     id: 9,
//     img: "img/설렁탕.jpeg",
//     category: "한식",
//     name: "설렁탕",
//     price: "11000",
//     amount: 1,
//     orderAmount: 8,
//   },
//   {
//     id: 10,
//     img: "img/육개장.jpeg",
//     category: "한식",
//     name: "육개장",
//     price: "12000",
//     amount: 1,
//     orderAmount: 9,
//   },
//   {
//     id: 11,
//     img: "img/콜라.jpeg",
//     category: "음료",
//     name: "콜라",
//     price: "2000",
//     amount: 1,
//     orderAmount: 9,
//   },
//   {
//     id: 12,
//     img: "img/환타.jpeg",
//     category: "음료",
//     name: "환타",
//     price: "2000",
//     amount: 1,
//     orderAmount: 9,
//   },
// ];

export default function Cart() {
  // const [menuList, setMenuList] = useRecoilState(menuListState);
  const cartList = useRecoilValue(menuListState);
  // const [buyList, setBuyList] = useState([]);

  useEffect(() => {
    cartList.map((item) => console.log(item));
    console.log(cartList.length);
  }, [cartList]);

  return <div className={""}></div>;
}
