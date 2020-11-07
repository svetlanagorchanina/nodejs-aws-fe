import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import App from "components/App/App";
import { store } from "store/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response.status === 400) {
      alert(error.response.data?.data);
    }
    return Promise.reject(error.response);
  }
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#378d0e",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
