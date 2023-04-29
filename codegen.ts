import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3026/gql",
  documents: "src/**/*.graphql",
  generates: {
    "src/generated/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
