import { createClient, dedupExchange, fetchExchange } from "urql";
import cacheExchange from "./cache.ts";
import { exchange as authExchange } from "./auth.ts";

const client = createClient({
  url: `${import.meta.env.VITE_API_URL}/gql`,
  exchanges: [dedupExchange, cacheExchange, authExchange, fetchExchange],
});

export default client;
