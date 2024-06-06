/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_BASE_URL_API: string;
  // más variables de entorno...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
