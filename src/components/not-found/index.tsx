import { FC } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const NotFound: FC<{ message: string }> = ({ message }) => {
  return (
    <Grid container>
      <Grid item xs={3} />
      <Grid item xs={6} sx={{ marginTop: 5 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "primary.main",
            padding: 5,
          }}
        >
          <Typography variant="h1" style={{ color: "white" }}>
            404
          </Typography>
          <Typography variant="body1" style={{ color: "white" }}>
            {message}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3} />
    </Grid>
  );
};

export default NotFound;
