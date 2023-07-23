import { FC } from "react";
import { Grid, Stack } from "@mui/material";

import TokenGenerator from "./generator";
import TokenList from "./list";

const TokenManagement: FC = () => (
  <>
    <Grid container>
      <Grid item xs={3} />
      <Grid item xs={6}>
        <Stack spacing={5} margin={2}>
          <TokenGenerator />
          <TokenList />
        </Stack>
      </Grid>
      <Grid item xs={3} />
    </Grid>
  </>
);

export default TokenManagement;
