import { FC } from "react";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  Provider as UrqlProvider,
} from "urql";

import Login from "./components/Login.tsx";
import AuthCallback from "./components/AuthCallback.tsx";
import Home from "./components/Home.tsx";
import { exchange as authExchange } from "./auth";
import AuthenticatedLayout from "./components/AuthenticatedLayout.tsx";
import TokenManagement from "./components/TokenManagement.tsx";
import { CssBaseline } from "@mui/material";

Amplify.configure(awsExports);
const client = createClient({
  url: import.meta.env.VITE_GRAPHQL_API_URL,
  exchanges: [dedupExchange, cacheExchange, authExchange, fetchExchange],
});

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
      element: <AuthenticatedLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/tokens",
          element: <TokenManagement />,
        },
      ],
    },
  ]);
  return (
    <UrqlProvider value={client}>
      <CssBaseline>
        <RouterProvider router={router} />
      </CssBaseline>
    </UrqlProvider>
  );
};

export default App;
