import { cacheExchange } from "@urql/exchange-graphcache";
import {
  DeleteTokenMutation,
  GenerateTokenMutation,
  MyTokensDocument,
} from "./generated/graphql.ts";
import schema from "./generated/introspection.json";

const exchange = cacheExchange({
  schema,
  updates: {
    Mutation: {
      generateToken(result, _, cache) {
        const token = (result as GenerateTokenMutation).generateToken.token;

        cache.updateQuery({ query: MyTokensDocument }, (data) => {
          if (data) {
            data.myTokens.push(token);
          }
          return data;
        });
      },
      deleteToken(result, _, cache) {
        const id = (result as DeleteTokenMutation).deleteToken.id;

        cache.updateQuery({ query: MyTokensDocument }, (data) => {
          if (data) {
            data.myTokens = data.myTokens.filter((t) => t.id !== id);
          }
          return data;
        });
      },
    },
  },
});

export default exchange;
