import React, { lazy } from "react";
import Loadable from "../components/Loadable";

const Cards = Loadable(lazy(() => import("../pages/cards")));

const ComponentsRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <Cards />,
    },
  ],
};
export default ComponentsRoutes;
