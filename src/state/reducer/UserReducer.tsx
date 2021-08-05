import { Action, ActionKind, UserContainer } from "types/ActionTypes"

let initialUser = {} as UserContainer

try {
  let userId = localStorage.getItem("userId")
  let Token = localStorage.getItem("Token")
  let RefreshToken = localStorage.getItem("RefreshToken")
  let firstname = localStorage.getItem("firstname")
  let lastname = localStorage.getItem("lastname")
  let profile = localStorage.getItem("profile")
  let fullname = localStorage.getItem("fullname")

  if (
    userId != null &&
    Token != null &&
    RefreshToken != null &&
    firstname != null &&
    lastname != null &&
    fullname != null &&
    profile != null
  ) {
    initialUser = {
      userId: userId,
      Token: Token,
      RefreshToken: RefreshToken,
      IsLoggedIn: true,
      firstname: firstname,
      lastname: lastname,
      profile: profile,
      fullname: fullname,
    }
  } else {
    initialUser = {
      userId: "",
      Token: "",
      RefreshToken: "",
      IsLoggedIn: false,
      firstname: "",
      lastname: "",
      fullname: "",
      profile: "",
    }
  }
} catch (error) {
  initialUser = {
    userId: "",
    Token: "",
    RefreshToken: "",
    IsLoggedIn: false,
    firstname: "",
    lastname: "",
    fullname: "",
    profile: "",
  }
}
const userReducer = (state: UserContainer = initialUser, action: Action) => {
  switch (action.type) {
    case ActionKind.LOGIN:
      localStorage.setItem("userId", action.payload.userId)
      localStorage.setItem("Token", action.payload.Token)
      localStorage.setItem("RefreshToken", action.payload.RefreshToken)
      localStorage.setItem("lastname", action.payload.lastname)
      localStorage.setItem("firstname", action.payload.firstname)
      localStorage.setItem("profile", action.payload.profile)
      localStorage.setItem("fullname", action.payload.fullname)
      return {
        userId: action.payload.userId,
        Token: action.payload.Token,
        RefreshToken: action.payload.RefreshToken,
        IsLoggedIn: true,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        profile: action.payload.profile,
        fullname: action.payload.fullname,
      }
    case ActionKind.LOGOUT:
      localStorage.removeItem("userId")
      localStorage.removeItem("Token")
      localStorage.removeItem("RefreshToken")
      localStorage.removeItem("firstname")
      localStorage.removeItem("lastname")
      localStorage.removeItem("profile")
      localStorage.removeItem("fullname")
      return {
        userId: "",
        Token: "",
        RefreshToken: "",
        IsLoggedIn: false,
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
