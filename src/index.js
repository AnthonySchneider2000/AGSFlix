import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";
import ShowPage from "./pages/ShowPage";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource/roboto/300.css"; // Import the font for font-weight: 300
import "@fontsource/roboto/400.css"; // Import the font for font-weight: 400
import "@fontsource/roboto/500.css"; // Import the font for font-weight: 500
import "@fontsource/roboto/700.css"; // Import the font for font-weight: 700
import { ThemeContextProvider } from "./utils/ThemeContext";
import { ShowDataContextProvider } from "./utils/ShowContext";

// import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/show", //maybe make "/shows/:id"
    element: <ShowPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Toaster /> */}
    <ShowDataContextProvider>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </ShowDataContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
