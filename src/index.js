import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import ReactDOM from 'react-dom/client'
import { AppProvider } from "./context/AppContext";
import App from "./App";

import "./index.css"
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AppProvider>
    <App/>
  </AppProvider>
)