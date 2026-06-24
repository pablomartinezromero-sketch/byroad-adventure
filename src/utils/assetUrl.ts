/** Resuelve rutas de la carpeta `public/` respetando el base path (p. ej. GitHub Pages). */
export function publicAsset(path: string): string {
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalized}`;
}
