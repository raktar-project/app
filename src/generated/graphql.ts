/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Crate = {
  __typename?: 'Crate';
  authors: Array<Scalars['String']>;
  categories: Array<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  keywords: Array<Scalars['String']>;
  name: Scalars['String'];
  readme?: Maybe<Scalars['String']>;
  repository?: Maybe<Scalars['String']>;
  version: Scalars['String'];
};

export type CrateSummary = {
  __typename?: 'CrateSummary';
  description: Scalars['String'];
  maxVersion: Scalars['String'];
  name: Scalars['String'];
};

export type DeletedToken = {
  __typename?: 'DeletedToken';
  id: Scalars['String'];
};

export type GeneratedToken = {
  __typename?: 'GeneratedToken';
  key: Scalars['String'];
  token: Token;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteToken: DeletedToken;
  generateToken: GeneratedToken;
};


export type MutationDeleteTokenArgs = {
  tokenId: Scalars['String'];
};


export type MutationGenerateTokenArgs = {
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  crateDetails: Crate;
  crates: Array<CrateSummary>;
  myTokens: Array<Token>;
};


export type QueryCrateDetailsArgs = {
  name: Scalars['String'];
};

export type Token = {
  __typename?: 'Token';
  id: Scalars['String'];
  name: Scalars['String'];
  userId: Scalars['Int'];
};

export type CrateDetailsQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type CrateDetailsQuery = { __typename?: 'Query', crateDetails: { __typename?: 'Crate', name: string, description?: string | null, version: string, readme?: string | null, repository?: string | null } };

export type CratesQueryVariables = Exact<{ [key: string]: never; }>;


export type CratesQuery = { __typename?: 'Query', crates: Array<{ __typename?: 'CrateSummary', name: string }> };

export type DeleteTokenMutationVariables = Exact<{
  tokenId: Scalars['String'];
}>;


export type DeleteTokenMutation = { __typename?: 'Mutation', deleteToken: { __typename?: 'DeletedToken', id: string } };

export type GenerateTokenMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type GenerateTokenMutation = { __typename?: 'Mutation', generateToken: { __typename?: 'GeneratedToken', key: string, token: { __typename?: 'Token', id: string, userId: number, name: string } } };

export type MyTokensQueryVariables = Exact<{ [key: string]: never; }>;


export type MyTokensQuery = { __typename?: 'Query', myTokens: Array<{ __typename?: 'Token', id: string, userId: number, name: string }> };


export const CrateDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CrateDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crateDetails"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"readme"}},{"kind":"Field","name":{"kind":"Name","value":"repository"}}]}}]}}]} as unknown as DocumentNode<CrateDetailsQuery, CrateDetailsQueryVariables>;
export const CratesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Crates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CratesQuery, CratesQueryVariables>;
export const DeleteTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tokenId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tokenId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tokenId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteTokenMutation, DeleteTokenMutationVariables>;
export const GenerateTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenerateToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<GenerateTokenMutation, GenerateTokenMutationVariables>;
export const MyTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyTokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myTokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<MyTokensQuery, MyTokensQueryVariables>;