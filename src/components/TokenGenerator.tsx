import { ChangeEvent, FC, useState } from "react";
import { Box, Button, LinearProgress, TextField, Typography } from "@mui/material";
import { useMutation } from "urql";
import { GenerateTokenDocument } from "../generated/graphql.ts";

const TokenGenerator: FC = () => {
  const [tokenName, setTokenName] = useState<string>("");
  const [{ data, error, fetching }, generateToken] = useMutation(GenerateTokenDocument);

  if (data) {
    return <div>{`Token: ${data.generateToken.token}`}</div>;
  } else if (error) {
    return <div>{`Failed to get token: ${error.message}`}</div>;
  } else if (fetching) {
    return <LinearProgress />;
  }

  return (
    <Box>
      <Typography variant="h5">New Token</Typography>
      <TextField
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setTokenName(event.target.value);
        }}
        fullWidth
        size="small"
      />
      <Button
        onClick={() => generateToken({ name: tokenName })}
        fullWidth
        variant="outlined"
        sx={{ marginTop: 2 }}
      >
        Generate New Token
      </Button>
    </Box>
  );
};

export default TokenGenerator;
