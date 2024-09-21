import { combineReducers } from "redux";
import changeTheNumber from "./add,subtract";
import changeNumber from "./multiply,divide";

const rootReducers = combineReducers({
	changeTheNumber,
	changeNumber,
});

export default rootReducers;
