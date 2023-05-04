import { FC } from "react";

import { Amplify } from "aws-amplify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createClient, dedupExchange, fetchExchange, Provider as UrqlProvider } from "urql";

import awsExports from "./aws-exports.ts";
import cacheExchange from "./cache.ts";
import Login from "./components/Login.tsx";
import AuthCallback from "./components/AuthCallback.tsx";
import Home from "./components/Home.tsx";
import { exchange as authExchange } from "./auth";
import AuthenticatedLayout from "./components/AuthenticatedLayout.tsx";
import TokenManagement from "./components/TokenManagement.tsx";
import CratePage from "./components/CratePage.tsx";
import Help from "./components/Help.tsx";

Amplify.configure(awsExports);
const client = createClient({
  url: `${import.meta.env.VITE_API_URL}/gql`,
  exchanges: [dedupExchange, cacheExchange, authExchange, fetchExchange],
});

const customTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5e6ca9",
    },
  },
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
          path: "/help",
          element: <Help />,
        },
        {
          path: "/tokens",
          element: <TokenManagement />,
        },
        {
          path: "/crates/:crateName",
          element: <CratePage />,
        },
      ],
    },
  ]);
  return (
    <ThemeProvider theme={customTheme}>
      <UrqlProvider value={client}>
        <CssBaseline>
          <RouterProvider router={router} />
        </CssBaseline>
      </UrqlProvider>
    </ThemeProvider>
  );
};

export default App;
