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

export type CrateSummary = {
  __typename?: 'CrateSummary';
  description: Scalars['String'];
  id: Scalars['ID'];
  maxVersion: Scalars['String'];
  name: Scalars['String'];
  owners: Array<User>;
  versions: Array<Scalars['String']>;
};

export type CrateVersion = {
  __typename?: 'CrateVersion';
  authors: Array<Scalars['String']>;
  categories: Array<Scalars['String']>;
  crate: CrateSummary;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  keywords: Array<Scalars['String']>;
  name: Scalars['String'];
  readme?: Maybe<Scalars['String']>;
  repository?: Maybe<Scalars['String']>;
  version: Scalars['String'];
};

export type DeletedToken = {
  __typename?: 'DeletedToken';
  id: Scalars['String'];
};

export type GeneratedToken = {
  __typename?: 'GeneratedToken';
  id: Scalars['ID'];
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
  crate: CrateSummary;
  crateVersion?: Maybe<CrateVersion>;
  crates: Array<CrateSummary>;
  myTokens: Array<Token>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryCrateArgs = {
  name: Scalars['String'];
};


export type QueryCrateVersionArgs = {
  name: Scalars['String'];
  version?: InputMaybe<Scalars['String']>;
};


export type QueryCratesArgs = {
  filter?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Token = {
  __typename?: 'Token';
  id: Scalars['ID'];
  name: Scalars['String'];
  userId: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  familyName: Scalars['String'];
  givenName: Scalars['String'];
  id: Scalars['ID'];
  login: Scalars['String'];
};

export type CrateVersionQueryVariables = Exact<{
  name: Scalars['String'];
  version?: InputMaybe<Scalars['String']>;
}>;


export type CrateVersionQuery = { __typename?: 'Query', crateVersion?: { __typename?: 'CrateVersion', id: string, name: string, description?: string | null, version: string, readme?: string | null, repository?: string | null, crate: { __typename?: 'CrateSummary', versions: Array<string>, owners: Array<{ __typename?: 'User', id: string, login: string, givenName: string, familyName: string }> } } | null };

export type CratesQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type CratesQuery = { __typename?: 'Query', crates: Array<{ __typename?: 'CrateSummary', id: string, name: string }> };

export type DeleteTokenMutationVariables = Exact<{
  tokenId: Scalars['String'];
}>;


export type DeleteTokenMutation = { __typename?: 'Mutation', deleteToken: { __typename?: 'DeletedToken', id: string } };

export type GenerateTokenMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type GenerateTokenMutation = { __typename?: 'Mutation', generateToken: { __typename?: 'GeneratedToken', id: string, key: string, token: { __typename?: 'Token', id: string, userId: number, name: string } } };

export type MyTokensQueryVariables = Exact<{ [key: string]: never; }>;


export type MyTokensQuery = { __typename?: 'Query', myTokens: Array<{ __typename?: 'Token', id: string, userId: number, name: string }> };

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, login: string, givenName: string, familyName: string } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, login: string, givenName: string, familyName: string }> };


export const CrateVersionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CrateVersion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crateVersion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"version"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"readme"}},{"kind":"Field","name":{"kind":"Name","value":"repository"}},{"kind":"Field","name":{"kind":"Name","value":"crate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"versions"}},{"kind":"Field","name":{"kind":"Name","value":"owners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"givenName"}},{"kind":"Field","name":{"kind":"Name","value":"familyName"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CrateVersionQuery, CrateVersionQueryVariables>;
export const CratesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Crates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CratesQuery, CratesQueryVariables>;
export const DeleteTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tokenId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tokenId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tokenId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteTokenMutation, DeleteTokenMutationVariables>;
export const GenerateTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenerateToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<GenerateTokenMutation, GenerateTokenMutationVariables>;
export const MyTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyTokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myTokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<MyTokensQuery, MyTokensQueryVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"givenName"}},{"kind":"Field","name":{"kind":"Name","value":"familyName"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"givenName"}},{"kind":"Field","name":{"kind":"Name","value":"familyName"}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;