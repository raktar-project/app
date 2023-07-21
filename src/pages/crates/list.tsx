import { FC } from "react";
import { useQuery } from "urql";

import {
  Button,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { CratesDocument } from "@generated/graphql";

const CratesList: FC = () => {
  const [{ data, error, fetching }] = useQuery({ query: CratesDocument, variables: { limit: 20 } });
  const navigate = useNavigate();

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <TableContainer component={Paper} sx={{ marginTop: 5 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "100%" }}>Crate</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.crates.map((crate) => (
              <TableRow key={crate.name}>
                <TableCell sx={{ width: "100%" }}>{crate.name}</TableCell>
                <TableCell>
                  <Button onClick={() => navigate(`/crates/${crate.name}`)}>View</Button>
                </TableCell>
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
