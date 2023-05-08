import { FC } from "react";
import { useQuery } from "urql";
import { CrateDetailsDocument } from "../../generated/graphql.ts";
import { LinearProgress } from "@mui/material";
import CrateReadme from "./CrateReadme.tsx";
import Grid from "@mui/material/Grid";
import CrateSidebar from "./CrateSidebar.tsx";

export const Crate: FC<{ name: string }> = ({ name }) => {
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
      <Grid container sx={{ marginTop: 3 }} gap={5}>
        <Grid item xs={2} />
        <Grid item xs={6}>
          {data.crateDetails.readme && <CrateReadme readme={data.crateDetails.readme} />}
        </Grid>
        <Grid item xs={2}>
          <CrateSidebar
            name={data.crateDetails.name}
            version={data.crateDetails.version}
            description={data.crateDetails.description || ""}
            allVersions={data.crateDetails.allVersions}
          />
        </Grid>
        <Grid item xs={2} />
      </Grid>
    );
  }

  return <div>Unexpected state.</div>;
};

export default Crate;
