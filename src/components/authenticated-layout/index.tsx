import { FC, useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { Outlet, useNavigate } from "react-router-dom";
import { LinearProgress } from "@mui/material";

import AppBar from "@components/appbar";

const AuthenticatedLayout: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const configureUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
      } catch (e) {
        await Auth.federatedSignIn();
      }
    };
    configureUser();
  }, [navigate]);

  if (user) {
    return (
      <>
        <AppBar />
        <Outlet />
      </>
    );
  } else {
    return <LinearProgress />;
  }
};

export default AuthenticatedLayout;
