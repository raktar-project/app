import { FC } from "react";
import { Button } from "@mui/material";
import { Auth } from "aws-amplify";

const Login: FC = () => (
  <div>
    <Button onClick={() => Auth.federatedSignIn({ customProvider: "aws-sso" })}>
      Login using SSO
    </Button>
  </div>
);

export default Login;
