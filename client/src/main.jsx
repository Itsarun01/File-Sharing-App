import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Hero from "./Components/Hero.jsx";
import Dashboard from "./Components/dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
