import { FC } from "react";
import { useQuery } from "urql";

import { CratesDocument } from "../generated/graphql.ts";
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const CratesList: FC = () => {
  const [{ data, error, fetching }] = useQuery({ query: CratesDocument });

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <TableContainer component={Paper} sx={{ marginTop: 5 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "100%" }}>Crate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.crates.map((crate) => (
              <TableRow key={crate.name}>
                <TableCell sx={{ width: "100%" }}>{crate.name}</TableCell>
              </TableRow>
            ))}
          {fetching && (
            <TableRow>
              <TableCell>
                <CircularProgress size={12} />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CratesList;
