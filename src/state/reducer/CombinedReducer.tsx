import { combineReducers } from "redux"
import { adminReducer } from "./AdminReducer"
import userReducer from "./UserReducer"
const reducers = combineReducers({
    admin: adminReducer,
    user: userReducer
})
export default reducers
export  type State = ReturnType<typeof reducers>