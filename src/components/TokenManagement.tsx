import { FC } from "react";
import TokenGenerator from "./TokenGenerator.tsx";
import TokenList from "./TokenList.tsx";

const TokenManagement: FC = () => {
  return (
    <>
      <h2>Token Management</h2>
      <TokenGenerator />
      <TokenList />
    </>
  );
};

export default TokenManagement;
