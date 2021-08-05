/* librarys */
import React from "react"
import ReactDOM from "react-dom"

import {
  MetronicLayoutProvider,
  MetronicSplashScreenProvider,
  MetronicSubheaderProvider,
} from "./_metronic/layout"

/* components */
import App from "views/App"
/* styles */
import "./index.scss"
import "./_metronic/_assets/plugins/keenthemes-icons/font/ki.css"
import "socicon/css/socicon.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./_metronic/_assets/plugins/flaticon/flaticon.css"
import "./_metronic/_assets/plugins/flaticon2/flaticon.css"
import "react-datepicker/dist/react-datepicker.css"


ReactDOM.render(
  <React.StrictMode>
      <MetronicLayoutProvider>
        <MetronicSubheaderProvider>
          <MetronicSplashScreenProvider>
            <App/>
          </MetronicSplashScreenProvider>
        </MetronicSubheaderProvider>
      </MetronicLayoutProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
