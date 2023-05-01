import { FC } from "react";
import { useMutation, useQuery } from "urql";

import { DeleteTokenDocument, MyTokensDocument } from "../generated/graphql.ts";
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
  const [, deleteToken] = useMutation(DeleteTokenDocument);

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
            <TableRow key={token.tokenId}>
              <TableCell sx={{ width: "100%" }}>{token.name}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={async () => {
                    await deleteToken({ tokenId: token.tokenId });
                  }}
                >
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
