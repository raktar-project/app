import { FC, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

import AppBar from "@components/appbar";

const AuthenticatedLayout: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const configureUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
      } catch (e) {
        navigate("/login");
      }
    };
    configureUser();
  }, [navigate]);

  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};

export default AuthenticatedLayout;
