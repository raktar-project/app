/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_HOSTED_ZONE_DOMAIN: string;
  readonly VITE_AWS_REGION: string;
  readonly VITE_AWS_USER_POOL_ID: string;
  readonly VITE_AWS_USER_POOL_CLIENT_ID: string;
  readonly VITE_COGNITO_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
