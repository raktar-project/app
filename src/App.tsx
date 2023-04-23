import { FC } from "react";

import { Amplify } from "aws-amplify";
import "./App.css";
import awsExports from "./aws-exports.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./components/Login.tsx";
import AuthCallback from "./components/AuthCallback.tsx";
import Home from "./components/Home.tsx";

Amplify.configure(awsExports);

const App: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/cb",
      element: <AuthCallback />,
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
