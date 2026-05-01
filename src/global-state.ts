import { atom } from "jotai";

type AppTheme = "dark" | "light";

export const themeAtom = atom<AppTheme>("dark");
