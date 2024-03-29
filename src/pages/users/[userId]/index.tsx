import { FC } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";

import User from "./user";

const UserPage: FC = () => {
  const { userId } = useParams();

  if (userId === undefined) {
    return <div>Missing user ID</div>;
  } else {
    return (
      <Grid container sx={{ marginTop: 3 }}>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <User userId={userId} />
        </Grid>
        <Grid item xs={4} />
      </Grid>
    );
  }
};

export default UserPage;
