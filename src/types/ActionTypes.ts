export enum ActionKind{
    LOGIN= "LOGIN",
    LOGOUT="LOGOUT"
}

export type LoggingInUser={
    userId: string,
    Token: string,
    RefreshToken: string,
    firstname:string,
    lastname:string,
    fullname:string,
    profile:string,
}
export type LoggingInAdmin={
    adminId: string,
    adminToken: string,
    adminRefreshToken: string,
    firstname:string,
    lastname:string,
    fullname:string,
    profile:string,
}

type AdminLogin={
    type: ActionKind.LOGIN,
    payload: LoggingInAdmin
}

type ActionLogin={
    type: ActionKind.LOGIN,
    payload: LoggingInUser
}
type ActionLogout={
    type: ActionKind.LOGOUT
}
export type Action=ActionLogin | ActionLogout

export type AdminAction=ActionLogout |AdminLogin

export type UserContainer={
    userId: string,
    Token: string,
    RefreshToken: string,
    IsLoggedIn:boolean,
    firstname:string,
    lastname:string,
    fullname:string,
    profile:string,
}
export type AdminContainer={
    adminId: string,
    adminToken: string,
    adminRefreshToken: string,
    adminIsLoggedIn:boolean,
    firstname:string,
    lastname:string,
    fullname:string,
    profile:string,
}

export enum LoginFeedBack{
    SUCCESS="SUCCESS",
    FAILED="FAILED"
}

type LoginSuccess={
    feedback:LoginFeedBack.SUCCESS,
}
type LoginFailed={
    feedback: LoginFeedBack.FAILED,
    error:string
}

export type Data=LoginSuccess|LoginFailed
