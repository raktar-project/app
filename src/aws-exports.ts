const appUrl =
  import.meta.env.VITE_APP_URL || `https://crates.${import.meta.env.VITE_HOSTED_ZONE_DOMAIN}`;

export default {
  Auth: {
    region: import.meta.env.VITE_AWS_REGION,
    userPoolId: import.meta.env.VITE_AWS_USER_POOL_ID,
    userPoolWebClientId: import.meta.env.VITE_AWS_USER_POOL_CLIENT_ID,
    authenticationFlowType: "USER_SRP_AUTH",
    oauth: {
      redirectSignIn: `${appUrl}/cb`,
      redirectSignOut: appUrl,
      domain: import.meta.env.VITE_COGNITO_DOMAIN,
      responseType: "code",
    },
  },
};
