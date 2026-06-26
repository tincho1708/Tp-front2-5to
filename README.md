# GridVault

GridVault es una aplicación web de colección de autos de carrera y modificados (JDM, Rally, Muscle, Europeo), hecha como Trabajo Práctico tpfront-2. Permite registrarse, iniciar sesión y gestionar una colección personal de autos con estadísticas, favoritos y perfil que se puede editar.

## URL de producción

https://tp-front2-5to-3omu.vercel.app/

## Tech Stack

- **Framework:** Astro 6
- **Backend:** Supabase (Auth + PostgreSQL)
- **Deploy:** Vercel
- **Linting:** ESLint con plugins para Astro y TypeScript
- **Testing:** Vitest (unitarios) + Playwright (E2E)
- **CI/CD:** GitHub Actions

## Convención de ramas

Todas las ramas deben seguir esta convención de nombres:

| Prefijo | Uso | Ejemplo |
|---------|-----|---------|
| `feature/` | Nueva funcionalidad | `feature/agregar-favoritos` |
| `fix/` | Corrección de bugs | `fix/login-redirect` |
| `docs/` | Cambios en documentación | `docs/actualizar-readme` |
| `ci/` | Cambios en el pipeline CI/CD | `ci/agregar-eslint` |
| `test/` | Agregar o modificar tests | `test/e2e-login` |

**Reglas:**
- Ningún cambio se mergea directo a `main`. Todo pasa por un Pull Request.
- El PR debe referenciar el issue que resuelve (ej. `closes #12`).
- El otro integrante del equipo debe revisar y aprobar el PR antes de mergearlo.

## Scripts disponibles

```bash
npm run dev       # Servidor de desarrollo
npm run build     # Build de producción
npm run preview   # Preview del build
npm run lint      # Ejecutar ESLint
npm run test      # Ejecutar tests con Vitest
```

## Variables de entorno

Copiar `.env.example` a `.env` y completar con los valores de Supabase:

```
PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
PUBLIC_SUPABASE_ANON_KEY=tu-anon-key-de-supabase
```

## CI/CD

El repositorio cuenta con un pipeline de GitHub Actions que se ejecuta en cada push o PR a `main`:

1. **Lint** — Verifica el código con ESLint
2. **Tests** — Ejecuta los tests unitarios y E2E
3. **Build** — Compila el proyecto con Astro
4. **Deploy** — Despliega automáticamente a Vercel (solo en push a `main` y si todos los pasos anteriores pasan)
