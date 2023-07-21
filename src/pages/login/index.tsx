import { FC } from "react";
import { Button } from "@mui/material";
import { Auth } from "aws-amplify";
import Grid from "@mui/material/Grid";

const Login: FC = () => (
  <Grid container sx={{ marginTop: 10 }}>
    <Grid item xs={4} />
    <Grid item xs={4}>
      <Button
        onClick={() => Auth.federatedSignIn({ customProvider: "sso-provider" })}
        fullWidth
        variant="contained"
        size="large"
      >
        Login using SSO
      </Button>
    </Grid>
    <Grid item xs={4} />
  </Grid>
);

export default Login;
