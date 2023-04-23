import { FC, useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { Box, Button, LinearProgress, Typography } from "@mui/material";

const Home: FC = () => {
  const [user, setUser] = useState<any>(null);
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

  if (user) {
    return (
      <Box>
        <Typography variant="h1">Home Page</Typography>
        <Button onClick={() => Auth.signOut()}>Logout</Button>
      </Box>
    );
  } else {
    return <LinearProgress />;
  }
};

export default Home;
