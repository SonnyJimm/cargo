import { LoggingInUser,LoginFeedBack,Action ,Data} from "types/ActionTypes"
import {users} from "types/UserType"
import { Dispatch } from "redux"
import { actionCreators} from "state"
import { bindActionCreators } from "redux"
export const login = (email:string , password:string,dispatch:Dispatch<Action>): Data=>{
    const { login } = bindActionCreators(actionCreators, dispatch)

    let result={}as Data
    result = {
        feedback: LoginFeedBack.FAILED,
        error:"Username or password wrong please check"
    }
    users.map((user)=>{
        if(user.email === email && user.password == password){
            let loginUser:LoggingInUser ={
                userId : user.userId,
                Token:"asdasdasdasdasdasd",
                RefreshToken:"adasdasdasdasdasd",
                firstname: user.firstname,
                lastname: user.lastname,
                fullname: user.fullname,
                profile: user.profile,
            }
            login(loginUser)
            result={
                feedback: LoginFeedBack.SUCCESS,
            }
            return
        }
    })
    return result
}