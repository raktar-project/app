import { FC } from "react";
import { Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Owner {
  id: string;
  login: string;
}

interface CrateSidebarProps {
  name: string;
  description: string;
  version: string;
  allVersions: string[];
  owners: Owner[];
}

const CrateSidebar: FC<CrateSidebarProps> = ({
  name,
  description,
  version,
  allVersions,
  owners,
}) => {
  return (
    <Stack spacing={2}>
      <Paper sx={{ padding: 2 }}>
        <Stack>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="subtitle1">{version}</Typography>
          <Typography variant="body1">{description}</Typography>
        </Stack>
      </Paper>
      <Paper sx={{ padding: 2 }}>
        <Typography variant="h5">Versions</Typography>
        <ul>
          {allVersions.map((v) => (
            <li key={v}>
              <Link to={`/crates/${name}/${v}`}>{v}</Link>
            </li>
          ))}
        </ul>
      </Paper>
      <Paper sx={{ padding: 2 }}>
        <Typography variant="h5">Owners</Typography>
        <ul>
          {owners.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.login}</Link>
            </li>
          ))}
        </ul>
      </Paper>
    </Stack>
  );
};

export default CrateSidebar;
