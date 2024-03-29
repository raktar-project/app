import { FC } from "react";
import { useQuery } from "urql";
import { LinearProgress } from "@mui/material";
import Grid from "@mui/material/Grid";

import CrateReadme from "./readme";
import CrateSidebar from "./sidebar";
import NotFound from "@components/not-found";
import { CrateVersionDocument } from "@generated/graphql";

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
    if (data.crateVersion) {
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
              owners={data.crateVersion.crate.owners}
            />
          </Grid>
          <Grid item xs={2} />
        </Grid>
      );
    } else {
      const message =
        version === undefined
          ? `Crate ${name} is not found.`
          : `Version ${version} for ${name} is not found.`;
      return <NotFound message={message} />;
    }
  }

  return null;
};
