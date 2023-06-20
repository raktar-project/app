export default {
  Auth: {
    region: import.meta.env.VITE_AWS_REGION,
    userPoolId: import.meta.env.VITE_AWS_USER_POOL_ID,
    userPoolWebClientId: import.meta.env.VITE_AWS_USER_POOL_CLIENT_ID,
    authenticationFlowType: "USER_SRP_AUTH",
    oauth: {
      redirectSignIn: `https://${import.meta.env.VITE_APP_DOMAIN}/cb`,
      redirectSignOut: `https://${import.meta.env.VITE_APP_DOMAIN}`,
      domain: import.meta.env.VITE_COGNITO_DOMAIN,
      responseType: "code",
    },
  },
};
