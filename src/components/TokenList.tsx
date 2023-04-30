import { FC } from "react";
import { useQuery } from "urql";

import { MyTokensDocument } from "../generated/graphql.ts";
import {
  Box,
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

const TokenList: FC = () => {
  const [{ data, error, fetching }] = useQuery({ query: MyTokensDocument });

  if (fetching) {
    return <CircularProgress />;
  } else if (error) {
    return <div>{error.message}</div>;
  } else if (data) {
    return (
      <Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: "100%" }}>Token</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
          </Table>
          <TableBody></TableBody>
          {data.myTokens.map((token) => (
            <TableRow key={token.name}>
              <TableCell sx={{ width: "100%" }}>{token.name}</TableCell>
              <TableCell>
                <Button variant="outlined" color="error">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </Box>
    );
  }

  return null;
};

export default TokenList;
