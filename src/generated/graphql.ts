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
  name: Scalars['String'];
};

export type GeneratedToken = {
  __typename?: 'GeneratedToken';
  token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  generateToken: GeneratedToken;
};


export type MutationGenerateTokenArgs = {
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  crates: Array<Crate>;
};

export type GenerateTokenMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type GenerateTokenMutation = { __typename?: 'Mutation', generateToken: { __typename?: 'GeneratedToken', token: string } };


export const GenerateTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenerateToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<GenerateTokenMutation, GenerateTokenMutationVariables>;