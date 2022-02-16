import { combineReducers, createStore } from "redux";
import bodyReducer from "./bodyReducer";
import SearchFieldReducer from "./SearchFieldReducer";

const reducers = combineReducers({
   searchField: SearchFieldReducer,
   body: bodyReducer
})

const store = createStore(reducers)

export default store