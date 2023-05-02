import { FC } from "react";
import { Paper, Stack, Typography } from "@mui/material";

interface CrateSidebarProps {
  name: string;
  description: string;
  version: string;
}

const CrateSidebar: FC<CrateSidebarProps> = ({ name, description, version }) => {
  return (
    <Paper sx={{ padding: 2 }}>
      <Stack>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="subtitle1">{version}</Typography>
        <Typography variant="body1">{description}</Typography>
      </Stack>
    </Paper>
  );
};

export default CrateSidebar;
