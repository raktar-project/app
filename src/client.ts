import { createClient, dedupExchange, fetchExchange } from "urql";
import cacheExchange from "./cache.ts";
import { exchange as authExchange } from "./auth.ts";

const url = `https://api.crates.${import.meta.env.VITE_HOSTED_ZONE_DOMAIN}/gql`;

const client = createClient({
  url,
  exchanges: [dedupExchange, cacheExchange, authExchange, fetchExchange],
});

export default client;
