/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CrateDetails($name: String!, $version: String) {\n  crateDetails(name: $name, version: $version) {\n    id\n    name\n    description\n    version\n    readme\n    repository\n    allVersions\n  }\n}": types.CrateDetailsDocument,
    "query Crates($filter: String) {\n  crates(filter: $filter) {\n    id\n    name\n  }\n}": types.CratesDocument,
    "mutation DeleteToken($tokenId: String!) {\n  deleteToken(tokenId: $tokenId) {\n    id\n  }\n}": types.DeleteTokenDocument,
    "mutation GenerateToken($name: String!) {\n  generateToken(name: $name) {\n    id\n    token {\n      id\n      userId\n      name\n    }\n    key\n  }\n}": types.GenerateTokenDocument,
    "query MyTokens {\n  myTokens {\n    id\n    userId\n    name\n  }\n}": types.MyTokensDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CrateDetails($name: String!, $version: String) {\n  crateDetails(name: $name, version: $version) {\n    id\n    name\n    description\n    version\n    readme\n    repository\n    allVersions\n  }\n}"): (typeof documents)["query CrateDetails($name: String!, $version: String) {\n  crateDetails(name: $name, version: $version) {\n    id\n    name\n    description\n    version\n    readme\n    repository\n    allVersions\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Crates($filter: String) {\n  crates(filter: $filter) {\n    id\n    name\n  }\n}"): (typeof documents)["query Crates($filter: String) {\n  crates(filter: $filter) {\n    id\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteToken($tokenId: String!) {\n  deleteToken(tokenId: $tokenId) {\n    id\n  }\n}"): (typeof documents)["mutation DeleteToken($tokenId: String!) {\n  deleteToken(tokenId: $tokenId) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation GenerateToken($name: String!) {\n  generateToken(name: $name) {\n    id\n    token {\n      id\n      userId\n      name\n    }\n    key\n  }\n}"): (typeof documents)["mutation GenerateToken($name: String!) {\n  generateToken(name: $name) {\n    id\n    token {\n      id\n      userId\n      name\n    }\n    key\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query MyTokens {\n  myTokens {\n    id\n    userId\n    name\n  }\n}"): (typeof documents)["query MyTokens {\n  myTokens {\n    id\n    userId\n    name\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;