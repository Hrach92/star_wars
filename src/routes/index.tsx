import { useRoutes } from "react-router-dom";
import ComponentsRoutes from "./ComponentsRoutes";

export default function ThemeRoutes() {
  return useRoutes([ComponentsRoutes]);
}
