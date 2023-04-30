import { FC } from "react";
import { useQuery } from "urql";

import { MyTokensDocument } from "../generated/graphql.ts";
import { Box, CircularProgress } from "@mui/material";

const TokenList: FC = () => {
  const [{ data, error, fetching }] = useQuery({ query: MyTokensDocument });

  if (fetching) {
    return <CircularProgress />;
  } else if (error) {
    return <div>{error.message}</div>;
  } else if (data) {
    return (
      <Box>
        <ul>
          {data.myTokens.map((token) => (
            <li>{token.name}</li>
          ))}
        </ul>
      </Box>
    );
  }

  return null;
};

export default TokenList;
