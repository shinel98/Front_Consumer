import { useEffect, useState } from "react";
import styles from "../styles/Menu.module.css";
import { menuListState } from "../store/atom";
import { useRecoilState } from "recoil";
export default function CartItem({ key, item, onChangeProps, addMenu }) {
  const [menuList, setMenuList] = useRecoilState(menuListState);
  const [isBtnValid, setIsBtnValid] = useState(true);

  const plusMenu = (event) => {
    event.preventDefault();
    console.log("추가");
    onChangeProps(item.id, "amount", item.amount + 1);
  };
  const minusMenu = (event) => {
    event.preventDefault();
    onChangeProps(item.id, "amount", item.amount - 1);
  };

  useEffect(() => {
    setIsBtnValid(item.amount >= 1);
  }, [item.amount]);

  const handleAddMenu = (menu) => {
    addMenu(menu);
    console.log(menuList);
    onChangeProps(item.id, "amount", 1);
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.imgContainer}>
        <img
          src={item.img}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt="로제파스타"
        ></img>
      </div>
      <div className={styles.menuDetail}>
        <div className={styles.name}>{item.name}</div>
        <div className="desc">로제맛이 잘나는 파스타 ~~ 설명</div>
        <div className="price">{item.price}</div>
        <div className={styles.menuBtn}>
          {isBtnValid ? (
            <button onClick={minusMenu} className={styles.btn}>
              -
            </button>
          ) : (
            <button onClick={minusMenu} className={styles.btn} disabled>
              -
            </button>
          )}

          <span>{item.amount}</span>
          <button onClick={plusMenu} className={styles.btn}>
            +
          </button>
          <button onClick={() => handleAddMenu(item)} className={styles.subbtn}>
            담기
          </button>
        </div>
      </div>
    </div>
  );
}
