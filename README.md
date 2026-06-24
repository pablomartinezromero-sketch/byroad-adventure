# Byroad Adventures

Landing web para rutas en moto premium por carreteras secundarias en España. Incluye explorador de rutas (Trail, Custom, Off-Road), selector de flota Voge y formulario de reserva.

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4
- Motion (animaciones)

## Requisitos

- Node.js 18+
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

La app se abre en [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run preview` | Vista previa del build |
| `npm run lint` | Comprobación TypeScript |

## Variables de entorno

Copia `.env.example` a `.env` y configura las claves si usas integraciones con Gemini:

```bash
cp .env.example .env
```

## Estructura

```
src/
  components/   # UI (Hero, Navbar, RouteExplorer, AdventureForm…)
  data.ts       # Rutas, motos, testimonios
  types.ts      # Tipos TypeScript
public/         # Assets estáticos (favicon, logos)
```

## Despliegue en GitHub Pages

La web se publica automáticamente en cada push a `main` mediante GitHub Actions.

**URL:** [https://pablomartinezromero-sketch.github.io/byroad-adventure/](https://pablomartinezromero-sketch.github.io/byroad-adventure/)

### Activar GitHub Pages (solo la primera vez)

1. En el repo, ve a **Settings → Pages**
2. En **Build and deployment → Source**, selecciona **GitHub Actions**
3. Sube los archivos del workflow (carpeta `.github/workflows/`) y haz commit en `main`
4. En **Actions**, comprueba que el workflow **Deploy to GitHub Pages** termina en verde

### Build local con la misma base que Pages

```bash
VITE_BASE_PATH=/byroad-adventure/ npm run build
npm run preview
```
