import { FC } from "react";
import { useParams } from "react-router-dom";
import { Crate } from "./crate/Crate.tsx";

const CratePage: FC = () => {
  const { crateName } = useParams();

  if (crateName === undefined) {
    return <div>Missing crate name!</div>;
  } else {
    return <Crate name={crateName} />;
  }
};

export default CratePage;
