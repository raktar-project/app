import { FC } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "github-markdown-css/github-markdown.css";

const Markdown: FC<{ markdown: string }> = ({ markdown }) => (
  <div className="markdown-body">
    <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
  </div>
);

export default Markdown;
