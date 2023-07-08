import { FC } from "react";
import { useQuery } from "urql";
import { UserDocument } from "../../generated/graphql.ts";
import {
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import NotFound from "../NotFound.tsx";

interface UserProps {
  userId: string;
}

const User: FC<UserProps> = ({ userId }) => {
  const [{ data, error, fetching }] = useQuery({
    query: UserDocument,
    variables: { id: userId },
  });

  if (error) {
    return <div>{error.message}</div>;
  } else if (fetching) {
    return <LinearProgress />;
  } else if (data?.user) {
    const rows = [
      { label: "User ID", value: data.user.id },
      { label: "Login", value: data.user.login },
      { label: "Given name", value: data.user.givenName },
      { label: "Family name", value: data.user.familyName },
    ];

    return (
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.label}>
                <TableCell>{row.label}</TableCell>
                <TableCell>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else if (data) {
    return <NotFound message={`User ${userId} is not found.`} />;
  }

  return null;
};

export default User;
