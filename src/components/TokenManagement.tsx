import { FC } from "react";
import TokenGenerator from "./TokenGenerator.tsx";

const TokenManagement: FC = () => {
  return (
    <>
      <h2>Token Management</h2>
      <TokenGenerator />
    </>
  );
};

export default TokenManagement;
