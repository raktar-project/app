import { ChangeEvent, FC, useState } from "react";
import {
  Button,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useMutation } from "urql";
import { GenerateTokenDocument } from "../generated/graphql.ts";

const TokenGenerator: FC = () => {
  const [tokenName, setTokenName] = useState<string>("");
  const [{ data, error, fetching }, generateToken] = useMutation(GenerateTokenDocument);

  if (error) {
    return <div>{`Failed to get token: ${error.message}`}</div>;
  } else if (fetching) {
    return <LinearProgress />;
  }

  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      {!data && (
        <>
          <TextField
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setTokenName(event.target.value);
            }}
            label="Token name"
            fullWidth
            size="small"
            disabled={data !== undefined}
          />
          <Button
            onClick={() => generateToken({ name: tokenName })}
            fullWidth
            variant="outlined"
            sx={{ marginTop: 2 }}
          >
            Generate New Token
          </Button>
        </>
      )}
      {data && (
        <>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Secure Token</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ width: "100" }}>{tokenName}</TableCell>
                <TableCell>{data.generateToken.token}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </>
      )}
    </Paper>
  );
};

export default TokenGenerator;
