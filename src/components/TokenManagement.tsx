import { FC } from "react";
import TokenGenerator from "./TokenGenerator.tsx";
import TokenList from "./TokenList.tsx";
import { Grid, Stack } from "@mui/material";

const TokenManagement: FC = () => {
  return (
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
};

export default TokenManagement;
