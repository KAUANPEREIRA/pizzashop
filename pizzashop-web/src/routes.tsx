import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";

import { Dashboard } from "./pages/app/dashboard/dashboard";
import { Orders } from "./pages/app/orders/orders";
import { SignIn } from "./pages/auth/signIn";
import { SignUp } from "./pages/auth/signUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/", element: <Dashboard /> }],
  },

  {
    path: "/signin",
    element: <AuthLayout />,
    children: [{ path: "/signin", element: <SignIn /> }],
  },

  {
    path: "/signup",
    element: <AuthLayout />,
    children: [{ path: "/signup", element: <SignUp /> }],
  },
  {
    path: "/ordens",
    element: <AppLayout />,
    children: [{ path: "/ordens", element: <Orders /> }],
  },
]);
