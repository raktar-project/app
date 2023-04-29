import { ChangeEvent, FC, useState } from "react";
import { Button, LinearProgress, TextField } from "@mui/material";
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
    <div>
      <TextField
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setTokenName(event.target.value);
        }}
      />
      <Button onClick={() => generateToken({ name: tokenName })}>Generate New Token</Button>
    </div>
  );
};

export default TokenGenerator;
