/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly BASE_URL_API: string;
  // más variables de entorno...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
