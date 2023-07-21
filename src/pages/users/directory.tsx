import { FC } from "react";

import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

interface User {
  id: string;
  givenName: string;
  familyName: string;
}

interface UsersProps {
  users: User[];
}

const Users: FC<UsersProps> = ({ users }) => {
  const navigate = useNavigate();

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "100%" }}>Users</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell
                  sx={{ width: "100%" }}
                >{`${user.givenName} ${user.familyName}`}</TableCell>
                <TableCell>
                  <Button onClick={() => navigate(`/users/${user.id}`)}>View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Users;
