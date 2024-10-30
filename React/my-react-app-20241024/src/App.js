import logo from "./logo.svg";
import "./App.css";
// import { getCLS, getFID, getLCP } from "web-vitals";

function App() {
  // getCLS(console.log);
  // getFID(console.log);
  // getLCP(console.log);
  // function sendToGoogleAnalytics({ name, value }) {
  //   console.log(
  //     "🚀 ~ sendToGoogleAnalytics ~ sendToGoogleAnalytics:",
  //     name,
  //     value
  //   );
  //   // console.log("send", "event", {
  //   //   eventCategory: "Web Vitals",
  //   //   eventAction: name,
  //   //   eventValue: Math.round(name === "CLS" ? value * 1000 : value),
  //   //   eventLabel: window.location.pathname,
  //   // });
  // }

  // getCLS(sendToGoogleAnalytics);
  // getFID(sendToGoogleAnalytics);
  // getLCP(sendToGoogleAnalytics);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
