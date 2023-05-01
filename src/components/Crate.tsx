import { FC } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "urql";
import { CrateDetailsDocument } from "../generated/graphql.ts";
import { LinearProgress, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Grid from "@mui/material/Grid";

const Crate: FC = () => {
  const { crateName } = useParams();

  if (crateName === undefined) {
    return <div>Missing crate name!</div>;
  } else {
    return (
      <Grid container sx={{ marginTop: 3 }}>
        <Grid item xs={2} />
        <Grid item xs={6}>
          <CrateDetails name={crateName} />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h5">This will be the sidebar</Typography>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    );
  }
};

const CrateDetails: FC<{ name: string }> = ({ name }) => {
  const [{ data, error, fetching }] = useQuery({
    query: CrateDetailsDocument,
    variables: { name },
  });

  if (error) {
    return <div>{error.message}</div>;
  } else if (fetching) {
    return <LinearProgress />;
  } else if (data) {
    return (
      <Box>
        {data.crateDetails.readme && (
          <Paper sx={{ padding: 2 }}>
            <ReactMarkdown children={data.crateDetails.readme} remarkPlugins={[remarkGfm]} />
          </Paper>
        )}
      </Box>
    );
  }

  return <div>Unexpected state.</div>;
};

export default Crate;
