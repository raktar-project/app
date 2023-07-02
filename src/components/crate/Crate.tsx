import { FC } from "react";
import { useQuery } from "urql";
import { CrateVersionDocument } from "../../generated/graphql.ts";
import { LinearProgress } from "@mui/material";
import CrateReadme from "./CrateReadme.tsx";
import Grid from "@mui/material/Grid";
import CrateSidebar from "./CrateSidebar.tsx";

interface CrateProps {
  name: string;
  version: string | undefined;
}

export const Crate: FC<CrateProps> = ({ name, version }) => {
  const [{ data, error, fetching }] = useQuery({
    query: CrateVersionDocument,
    variables: { name, version },
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
          {data.crateVersion.readme && <CrateReadme readme={data.crateVersion.readme} />}
        </Grid>
        <Grid item xs={2}>
          <CrateSidebar
            name={data.crateVersion.name}
            version={data.crateVersion.version}
            description={data.crateVersion.description || ""}
            allVersions={data.crateVersion.crate.versions}
          />
        </Grid>
        <Grid item xs={2} />
      </Grid>
    );
  }

  return <div>Unexpected state.</div>;
};
