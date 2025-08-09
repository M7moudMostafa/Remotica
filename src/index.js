import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { init } from "@noriginmedia/norigin-spatial-navigation";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./config/queryClient";

const root = ReactDOM.createRoot(document.getElementById("root"));

init({
  debug: true,
  // visualDebug: true
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools position="bottom" initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
