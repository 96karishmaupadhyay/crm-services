import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import store from "./core/data/redux/store.tsx";
import { Provider } from "react-redux";
import ALLRoutes from "./feature-module/router/router.tsx";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../src/style/icon/boxicons/boxicons/css/boxicons.min.css";
import "../src/style/icon/weather/weathericons.css";
import "../src/style/icon/typicons/typicons.css";
import "../src/style/icon/fontawesome/css/fontawesome.min.css";
import "../src/style/icon/fontawesome/css/all.min.css";
import "../src/style/icon/ionic/ionicons.css";
import "../src/style/icon/tabler-icons/webfont/tabler-icons.css";
import "../src/style/css/feather.css";
import './index.scss'
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
   
      <BrowserRouter >
      
      <ALLRoutes/>
      </BrowserRouter>
      
    </Provider>
  </React.StrictMode>
);
