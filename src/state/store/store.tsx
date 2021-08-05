import { createStore, applyMiddleware} from "redux"
import reducers from "../reducer/CombinedReducer"
import thunk from "redux-thunk"

export const store = createStore(reducers, {},applyMiddleware(thunk))
