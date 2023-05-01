import { FC } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Paper } from "@mui/material";

const CrateReadme: FC<{ readme: string }> = ({ readme }) => (
  <Paper sx={{ padding: 2 }}>
    <ReactMarkdown children={readme} remarkPlugins={[remarkGfm]} />
  </Paper>
);

export default CrateReadme;
