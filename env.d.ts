/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PROD_BASE_URL: string;
  readonly VITE_PROD_SITE_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
