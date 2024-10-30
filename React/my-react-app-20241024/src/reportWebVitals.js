import { getCLS, getFID, getLCP, getFCP, getTTFB } from "web-vitals";

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }

  function sendToGoogleAnalytics({ name, value }) {
    console.log("send", "event", {
      eventCategory: "Web Vitals",
      eventAction: name,
      eventValue: Math.round(name === "CLS" ? value * 1000 : value),
      eventLabel: window.location.pathname,
    });
  }

  getCLS(sendToGoogleAnalytics);
  getFID(sendToGoogleAnalytics);
  getLCP(sendToGoogleAnalytics);
  getFCP(sendToGoogleAnalytics);
  getTTFB(sendToGoogleAnalytics);
};

export default reportWebVitals;
