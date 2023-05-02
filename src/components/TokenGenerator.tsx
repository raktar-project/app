import { ChangeEvent, FC, useState } from "react";
import {
  Alert,
  Button,
  InputAdornment,
  LinearProgress,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { useMutation } from "urql";
import { GenerateTokenDocument } from "../generated/graphql.ts";
import IconButton from "@mui/material/IconButton";
import { ContentCopy } from "@mui/icons-material";

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
        <Stack gap={2}>
          <Alert severity="warning">
            You won't be able to retrieve the secure key once you close this page. Please copy it
            and store it securely!
          </Alert>
          <TextField
            value={data.generateToken.key}
            disabled
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => navigator.clipboard.writeText(data.generateToken.key)}>
                    <ContentCopy />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      )}
    </Paper>
  );
};

export default TokenGenerator;
