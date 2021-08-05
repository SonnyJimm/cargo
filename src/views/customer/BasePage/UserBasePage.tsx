import { Suspense } from "react"
import { actionCreators } from "state"
import { bindActionCreators } from "redux"  

import { useDispatch } from "react-redux"
import { Redirect, Route, Switch } from "react-router"
import { LayoutSplashScreen } from "_metronic/layout"
import DashBoardPage from "./DashBoardPage"
import SearchPage from "./SearchPage"
const UserBasePage:React.FC = () =>{
   
    const dispatch = useDispatch()  
    const { logout } = bindActionCreators(actionCreators, dispatch)
    
    return <>
    <Suspense fallback = {<LayoutSplashScreen/>}/>
    <Switch>
        {
            <Redirect exact from="/customer/" to="/customer/dashboard"/>
        }

        <Route exact path="/customer/dashboard" component = {DashBoardPage}/>
        <Route exact path="/customer/search" component = {SearchPage}/>
        <Route exact path="/customer/logout" >{logout}</Route>
        <Redirect from = "*" to = "/404"/>
    </Switch>
    </>
}
export default UserBasePage