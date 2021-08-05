import { store } from "state"
import { Provider } from "react-redux"
import { MaterialThemeProvider } from "_metronic/layout"
import { Routes } from "./Routes"
import { BrowserRouter } from "react-router-dom"
const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <MaterialThemeProvider>
            <Routes />
          </MaterialThemeProvider>
        </BrowserRouter>
      </Provider>
    </>
  )
}
export default App
