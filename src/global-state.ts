import { atom } from "jotai";

type AppTheme = "auto" | "light" | "dark";

export const themeAtom = atom<AppTheme>("auto");
