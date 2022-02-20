import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import bodyReducer from "./bodyReducer";
import bookReducer from "./bookReducer";
import SearchFieldReducer from "./SearchFieldReducer";

const reducers = combineReducers({
   searchField: SearchFieldReducer,
   body: bodyReducer,
   book: bookReducer
})

const store = createStore(reducers, applyMiddleware(...[thunk]))

window.store = store

export default store