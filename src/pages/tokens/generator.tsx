import { FC } from "react";
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
import IconButton from "@mui/material/IconButton";
import { ContentCopy } from "@mui/icons-material";
import { Controller, useForm } from "react-hook-form";

import { GenerateTokenDocument } from "@generated/graphql";

interface FormValues {
  tokenName: string;
}

const TokenGenerator: FC = () => {
  const { control, handleSubmit } = useForm<FormValues>({ defaultValues: { tokenName: "" } });
  const [{ data, error, fetching }, generateToken] = useMutation(GenerateTokenDocument);

  if (error) {
    return <div>{`Failed to get token: ${error.message}`}</div>;
  } else if (fetching) {
    return <LinearProgress />;
  }

  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      {!data && (
        <form onSubmit={handleSubmit((data) => generateToken({ name: data.tokenName }))}>
          <Controller
            name="tokenName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                required
                label="Token name"
                fullWidth
                size="small"
                disabled={data !== undefined}
              />
            )}
          />
          <Button type="submit" fullWidth variant="outlined" sx={{ marginTop: 2 }}>
            Generate New Token
          </Button>
        </form>
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
