import { FC } from "react";
import Grid from "@mui/material/Grid";

import CratesList from "./list";

const Home: FC = () => (
  <Grid container>
    <Grid item xs={3} />
    <Grid item xs={6}>
      <CratesList />
    </Grid>
    <Grid item xs={3} />
  </Grid>
);

export default Home;
