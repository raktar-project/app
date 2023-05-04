import { FC } from "react";

import Grid from "@mui/material/Grid";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const helpText = `
# How to configure Cargo to use the private registry?
You can name the private registry whatever you want locally.
Let's use the name "raktar" for example.

Add a new entry in the Cargo configuration file for the registry:
\`\`\`toml
[registries.raktar]
index = "sparse+${import.meta.env.VITE_API_URL}/"
\`\`\`

Cargo configuration files follow a hierarchical structure.
Please refer to the
[official documentation](https://doc.rust-lang.org/cargo/reference/config.html)
for more details on locating the appropriate configuration file.

Run the following command to configure a new token for the registry:
\`\`\`sh
cargo login --registry raktar
\`\`\`

it should prompt you to paste a new token. Ignore the URL in the prompt.
Navigate to the \`tokens\` section (top right corner) in this application
to generate a new token and paste it into the prompt.

That should be it - you are now ready to use the registry.

# How to use dependencies published to the registry?
Specifying a dependency in the private registry is as simple as passing
in the \`registry\` flag in the \`Cargo.toml\`, e.g.

\`\`\`toml
[dependencies]
private_crate = { registry = "raktar", version = "0.1.1" }
\`\`\`

Unfortunately, proper authentication for private registries is not stabilised
yet in Rust. You need use the nightly build for things to work.

Make sure \`nightly\` is installed:
\`\`\`sh
rustup toolchain install nightly
\`\`\`

You can configure your project to use \`nightly\` by adding a
\`rust-toolchain.toml\` to the root directory of the project with

\`\`\`toml
[toolchain]
channel = "nightly"
\`\`\`

The last thing you need to do is passing in the \`-Z registry-auth\` flag
when running Cargo commands, e.g.

\`\`\`sh
cargo build --registry raktar -Z registry-auth
\`\`\`

# How to publish a new crate?
\`\`\`sh
cargo publish --registry raktar -Z registry-auth
\`\`\`
`;

const Help: FC = () => (
  <>
    <Grid container>
      <Grid item xs={3} />
      <Grid item xs={6}>
        <ReactMarkdown children={helpText} remarkPlugins={[remarkGfm]} />
      </Grid>
      <Grid item xs={3} />
    </Grid>
  </>
);

export default Help;
