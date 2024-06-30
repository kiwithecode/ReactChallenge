import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from "react-redux";
import getStore from "./store/getStore";
import reducers from './reducers';
import Main from './Main';
import reportWebVitals from "./reportWebVitals";
import "./sass/app.scss";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={getStore(reducers)}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
