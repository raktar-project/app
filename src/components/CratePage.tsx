import { FC } from "react";
import { useParams } from "react-router-dom";
import { Crate } from "./crate/Crate.tsx";

const CratePage: FC = () => {
  const { crateName } = useParams();
  const { version } = useParams();

  if (crateName === undefined) {
    return <div>Missing crate name!</div>;
  } else {
    return <Crate name={crateName} version={version} />;
  }
};

export default CratePage;
