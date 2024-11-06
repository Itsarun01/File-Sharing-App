import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import {ClerkProvider} from "@clerk/clerk-react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import Home from "./Components/Home";
import SignInPage from "./auth/sign-in/SignInPage";
import NotFoundPage from "./Components/Pages/NotFoundPage";
import Dashboard from "./Components/Dashboard";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },

  {
    path: "/auth/sign-in",
    element: <SignInPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
