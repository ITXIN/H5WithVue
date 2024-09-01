import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
window.onerror = function (message, source, lineno, colno, error) {
  console.log(
    "🚀 ~ message, source, lineno, colno, error:",
    message,
    source,
    lineno,
    colno,
    error
  );
  return true;
};

window.addEventListener("unhandledrejection", (event) => {
  console.log("🚀 ~ event:", event);
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
