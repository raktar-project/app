import { FC, useEffect, useState } from "react";
import AppBar from "./AppBar.tsx";
import { Outlet, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

const AuthenticatedLayout: FC = () => {
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
