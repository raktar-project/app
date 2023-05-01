import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://0.0.0.0:3026/gql",
  documents: "src/**/*.graphql",
  generates: {
    "src/generated/": {
      preset: "client",
      plugins: [],
    },
    "src/generated/introspection.json": {
      plugins: ["introspection"],
      config: {
        minify: true,
      },
    },
  },
};

export default config;
