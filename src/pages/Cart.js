import { useEffect } from "react";
import { menuListState } from "../store/atom";
import { useRecoilValue } from "recoil";

export default function Cart() {
  // const [menuList, setMenuList] = useRecoilState(menuListState);
  const t = useRecoilValue(menuListState);
  t.map((item) => console.log(item));

  return <div>Cart</div>;
}
