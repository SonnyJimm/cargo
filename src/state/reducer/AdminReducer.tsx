import { AdminAction, AdminContainer ,ActionKind} from "types/ActionTypes"
import userReducer from "./UserReducer"

let initialAdmin = {} as AdminContainer
try {
  let adminId = localStorage.getItem("adminId")
  let adminToken= localStorage.getItem("adminToken")
  let adminRefreshToken=localStorage.getItem("adminRefreshToken")
  let adminIsLoggedIn=localStorage.getItem("adminIsLoggedIn")
  let firstname=localStorage.getItem("firstname")
  let lastname=localStorage.getItem("lastname")
  let fullname=localStorage.getItem("fullname")
  let profile=localStorage.getItem("profile")
  if (adminId && adminToken && adminRefreshToken && adminIsLoggedIn && firstname && lastname &&fullname && profile) {
    initialAdmin = {
        adminId:  adminId,
        adminToken:adminToken,
        adminRefreshToken: adminRefreshToken,
        adminIsLoggedIn: true,
        firstname:  firstname,
        lastname: lastname,
        fullname: fullname,
        profile: profile,
      }
  } else {
    initialAdmin = {
      adminId: "",
      adminToken: "",
      adminRefreshToken: "",
      adminIsLoggedIn: false,
      firstname: "",
      lastname: "",
      fullname: "",
      profile: "",
    }
  }
} catch (error) {
  initialAdmin = {
    adminId: "",
    adminToken: "",
    adminRefreshToken: "",
    adminIsLoggedIn: false,
    firstname: "",
    lastname: "",
    fullname: "",
    profile: "",
  }
}
export const adminReducer = (
  state: AdminContainer = initialAdmin,
  action: AdminAction
) => {
    switch(action.type){
        case ActionKind.LOGIN:
            localStorage.setItem("adminId",action.payload.adminId)
            localStorage.setItem("adminRefreshToke",action.payload.adminRefreshToken)
            localStorage.setItem("adminToken",action.payload.adminToken)
            localStorage.setItem("firstname",action.payload.firstname)
            localStorage.setItem("fullname",action.payload.fullname)
            localStorage.setItem("lastname",action.payload.lastname)
            localStorage.setItem("profile",action.payload.profile)
            return {
                adminId:  action.payload.adminId,
                adminToken:action.payload.adminToken,
                adminRefreshToken: action.payload.adminRefreshToken,
                adminIsLoggedIn: true,
                firstname:  action.payload.firstname,
                lastname: action.payload.lastname,
                fullname: action.payload.fullname,
                profile: action.payload.profile,
            }
        case ActionKind.LOGOUT:
            localStorage.removeItem("adminId")
            localStorage.removeItem("adminRefreshToke")
            localStorage.removeItem("adminToken")
            localStorage.removeItem("firstname")
            localStorage.removeItem("fullname")
            localStorage.removeItem("lastname")
            localStorage.removeItem("profile")
        return{
            adminId: "",
            adminToken: "",
            adminRefreshToken: "",
            adminIsLoggedIn: false,
            firstname: "",
            lastname: "",
            fullname: "",
            profile: "",
        }
        default:
            return state
    }
}
export default userReducer