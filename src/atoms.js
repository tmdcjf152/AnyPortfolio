import { atom } from "recoil";

export const menuState = atom({
  key: "menuState", 
  default: true 
});

export const profileData = atom({
  key: "profileData", 
  default: "" 
});