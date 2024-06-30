import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from "react-redux";
import getStore from "./store/getStore";
import reducers from './reducers';
import Main from './Main';
import reportWebVitals from "./reportWebVitals";
import './sass/tailwind.css';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={getStore(reducers)}>
      <BrowserRouter>
        <div className="app-container">
          <Main />
        </div>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
