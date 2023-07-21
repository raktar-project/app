import { FC } from "react";
import { useQuery } from "urql";

import { CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid";

import { UsersDocument } from "../../generated/graphql.ts";
import Users from "@components/user-directory/Users.tsx";

const UsersPage: FC = () => {
  const [{ data, error, fetching }] = useQuery({ query: UsersDocument });

  if (fetching) {
    return <CircularProgress />;
  } else if (error) {
    return <div>{error.message}</div>;
  } else if (data) {
    return (
      <Grid container sx={{ marginTop: 3 }}>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <Users users={data.users} />
        </Grid>
        <Grid item xs={3} />
      </Grid>
    );
  }

  return null;
};

export default UsersPage;
