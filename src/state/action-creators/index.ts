import { LoggingInUser,ActionKind,Action, AdminAction,LoggingInAdmin } from "types/ActionTypes"
import { Dispatch } from "redux"

export const login = (user: LoggingInUser) =>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type: ActionKind.LOGIN,
            payload: user
        })
    }
}
export const logout = () =>{
    return (dispatch:Dispatch <Action>)=>{
        dispatch({
            type: ActionKind.LOGOUT
        })
    }
}
export const adminlogin = (admin:LoggingInAdmin) =>{
    return (dispatch:Dispatch<AdminAction>)=>{
        dispatch({
            type: ActionKind.LOGIN,
            payload: admin
        })
    }
}
export const adminlogout = () =>{
    return (dispatch:Dispatch <Action>)=>{
        dispatch({
            type: ActionKind.LOGOUT
        })
    }
}