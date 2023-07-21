import { FC } from "react";

import { Amplify } from "aws-amplify";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider as UrqlProvider } from "urql";

import awsExports from "./aws-exports.ts";
import client from "./client.ts";
import AuthCallback from "@components/AuthCallback";
import AuthenticatedLayout from "@components/AuthenticatedLayout";
import Crates from "@pages/crates";
import Crate from "@pages//crates/[crateName]";
import Help from "@pages/help";
import Login from "@pages/login";
import Tokens from "@pages/tokens";
import Users from "@pages/users";
import User from "@pages/users/[userId]";

Amplify.configure(awsExports);

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
          element: <Crates />,
        },
        {
          path: "/help",
          element: <Help />,
        },
        {
          path: "/tokens",
          element: <Tokens />,
        },
        {
          path: "/crates/:crateName/:version?",
          element: <Crate />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/users/:userId",
          element: <User />,
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
