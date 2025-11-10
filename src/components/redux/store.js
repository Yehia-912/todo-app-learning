import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers";

const initialValue = { todos: [{id:1,title:"HTML",isCompleted:false}] };

const store = createStore(rootReducer,initialValue)
export default store;