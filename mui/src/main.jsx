import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignIn, Signup, Blog, Checkout, SignInSide } from "./templates";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signin-side", element: <SignInSide /> },
  { path: "/signup", element: <Signup /> },
  { path: "/blog", element: <Blog /> },
  { path: "/checkout", element: <Checkout /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
