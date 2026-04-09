import { type RouteObject } from "react-router";
import Homepage from "./pages/Homepage";

export default [
  {
    path: "/",
    Component: Homepage,
  },
] satisfies RouteObject[];
