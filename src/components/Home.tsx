import { FC } from "react";
import Grid from "@mui/material/Grid";

import CratesList from "./CratesList.tsx";

const Home: FC = () => {
  return (
    <Grid container>
      <Grid item xs={3} />
      <Grid item xs={6}>
        <CratesList />
      </Grid>
      <Grid item xs={3} />
    </Grid>
  );
};

export default Home;
