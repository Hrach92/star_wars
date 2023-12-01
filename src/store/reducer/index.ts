import { combineReducers } from "redux";
import { starWars } from "./starWars";

const rootReducers = combineReducers({
  [starWars.reducerPath]: starWars.reducer,
});
export default rootReducers;
