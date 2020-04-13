import { combineReducers } from "redux";

import viewReducer from "./view-reducer";
import authReducer from "./auth-reducer";
import regReducer from "./reg-reducer";
import alertReducer from "./alert-reducer";

const rootReducer = combineReducers({
    viewReducer,
    authReducer,
    regReducer,
    alertReducer
})

export default rootReducer