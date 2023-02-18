import { atom } from "recoil";

export const menuListState = atom({
  key: "menuListState",
  default: [],
});

export const menuBuf = atom({
  key: "menuBuf",
  default: [],
});
