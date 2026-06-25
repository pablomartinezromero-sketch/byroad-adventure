/** Rutas de la SPA respetando el base path (p. ej. `/byroad-adventure/` en GitHub Pages). */
export function appPath(segment = ''): string {
  const base = import.meta.env.BASE_URL;
  const normalized = segment.replace(/^\//, '');
  return normalized ? `${base}${normalized}` : base;
}

export function isLegalNoticePath(): boolean {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const legalPath = base ? `${base}/aviso-legal` : '/aviso-legal';
  return path === legalPath;
}
