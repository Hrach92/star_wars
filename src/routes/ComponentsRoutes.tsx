import { lazy } from "react";
import Loadable from "../components/Loadable";

const Cards = Loadable(lazy(() => import("../pages/cards")));
const Item = Loadable(lazy(() => import("../pages/cards/item")));

const ComponentsRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <Cards />,
    },
    {
      path: ":id",
      element: <Item />,
    },
  ],
};
export default ComponentsRoutes;
