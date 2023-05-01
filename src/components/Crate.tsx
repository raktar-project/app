import { FC } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "urql";
import { CrateDetailsDocument } from "../generated/graphql.ts";
import { LinearProgress } from "@mui/material";

const Crate: FC = () => {
  const { crateName } = useParams();

  if (crateName === undefined) {
    return <div>Missing crate name!</div>;
  } else {
    return <CrateDetails name={crateName} />;
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
    return <div>{data.crateDetails.name}</div>;
  }

  return <div>Unexpected state.</div>;
};

export default Crate;
