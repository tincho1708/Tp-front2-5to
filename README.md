

https://tp-front2-5to-3omu.vercel.app/


- **Framework:** Astro 6
- **Backend:** Supabase (Auth + PostgreSQL)
- **Deploy:** Vercel
- **Linting:** ESLint con plugins para Astro y TypeScript
- **Testing:** Vitest (unitarios) + Playwright (E2E)
- **CI/CD:** GitHub Actions


Un detalle importante: todas las ramas tienen que respetar esta convención de nombres.

 Prefijo  Uso  Ejemplo

 `feature/`  Nueva funcionalidad  `feature/agregar-favoritos` 
 `fix/`  Corrección de bugs  `fix/login-redirect` 
 `docs/`  Cambios en documentación  `docs/actualizar-readme` 
 `ci/`  Cambios en el pipeline CI/CD  `ci/agregar-eslint` 
 `test/`  Agregar o modificar tests  `test/e2e-login` 




npm run dev       
npm run build     
npm run preview   
npm run lint     
npm run test (antes esto npm install -D vitest happy-dom)     


1. Lint Verifica el código con ESLint
2. Tests Ejecuta los tests unitarios y E2E
3. Build Compila el proyecto con Astro
4. Deploy Despliega automáticamente a Vercel (solo en push a `main` y si todos los pasos anteriores pasan)
