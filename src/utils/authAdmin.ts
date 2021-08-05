import {Data,AdminAction,LoginFeedBack} from "types/ActionTypes"
import { Dispatch } from "redux"
import { actionCreators} from "state"
import { bindActionCreators } from "redux"
export const login = (email:string , password:string,dispatch:Dispatch<AdminAction>): Data=>{
    const { adminlogin } = bindActionCreators(actionCreators, dispatch)
    let result={}as Data
    result = {
        feedback: LoginFeedBack.FAILED,
        error:"Username or password wrong please check"
    }
    
}