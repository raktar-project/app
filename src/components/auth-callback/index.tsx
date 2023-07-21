import { FC, useEffect, useState } from "react";

import { Navigate } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import { Auth, Hub } from "aws-amplify";

const AuthCallback: FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload: { event } }) => {
      switch (event) {
        case "signIn":
          setLoggedIn(true);
      }
    });

    Auth.currentAuthenticatedUser().then(() => setLoggedIn(true));

    return unsubscribe;
  }, []);

  if (loggedIn) {
    return <Navigate to={"/"} replace={true} />;
  } else {
    return <LinearProgress />;
  }
};

export default AuthCallback;
