import { Auth } from "aws-amplify";
import { makeOperation, Operation } from "urql";
import { authExchange } from "@urql/exchange-auth";

interface AuthState {
  token: string;
}

const addAuthToOperation = ({
  authState,
  operation,
}: {
  authState: AuthState | null;
  operation: Operation;
}): Operation => {
  if (!authState?.token) {
    return operation;
  }
  const fetchOptions =
    typeof operation.context.fetchOptions === "function"
      ? operation.context.fetchOptions()
      : operation.context.fetchOptions || {};

  return makeOperation(operation.kind, operation, {
    ...operation.context,
    fetchOptions: {
      ...fetchOptions,
      headers: {
        ...fetchOptions.headers,
        Authorization: authState.token,
      },
    },
  });
};

const getToken = async (): Promise<string | null> => {
  const session = await Auth.currentSession();

  if (session) {
    return session.getAccessToken().getJwtToken();
  }

  await Auth.signOut();
  return null;
};

export const exchange = authExchange(async () => {
  // TODO: We should properly log out and redirect on expired tokens
  let token = await getToken();

  return {
    addAuthToOperation(operation: Operation) {
      const authState = token ? { token } : null;
      return addAuthToOperation({ authState, operation });
    },
    async refreshAuth() {
      token = await getToken();
    },
    didAuthError(error) {
      return error.response.status === 401;
    },
  };
});
