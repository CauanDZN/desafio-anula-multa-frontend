import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Change this import
import "./index.css";
import App from "./App";
import Settings from "./components/Settings";
import Report from "./components/Report";
import EmailLogin from "./components/EmailLogin";
import store from "./redux/store";

function Main() {
  return (
    <Provider store={store}>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<EmailLogin />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </Router>
    </Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
