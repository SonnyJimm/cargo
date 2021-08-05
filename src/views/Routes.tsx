import { Redirect, Switch, Route } from "react-router"
import { useSelector } from "react-redux"
import { State} from "state"
import { Layout } from "_metronic/layout"
import AuthPage from "./AuthPage/AuthPage"
import UserBasePage from "./customer/BasePage/UserBasePage"

export const Routes: React.FC = () => {
  const state = useSelector((state: State) => state.user)
  const adminState = useSelector((state: State) => state.admin)
  return (
    <Switch>
      {!state.IsLoggedIn  ? (
        <Route>
          <AuthPage/>
        </Route>
      ) : (
        <Redirect from="/auth" to="/customer/" />
      )}
      { adminState.adminIsLoggedIn }
      { state.IsLoggedIn && <Layout><UserBasePage/></Layout>}
      <Redirect from = "*" to = "/404"/>
    </Switch>
  )
}
