# CALIDAD.md — GridVault

## Estrategia general

La estrategia de calidad del proyecto se basa en automatizar la validación del código en cada cambio, asegurando que ningún error llegue a producción sin ser detectado previamente. Para esto implementamos un pipeline de integración continua y despliegue continuo (CI/CD) que ejecuta verificaciones en cadena: primero el análisis estático del código (lint), luego los tests automatizados, después la compilación del proyecto, y finalmente el deploy a producción.

Elegimos este enfoque secuencial porque cada etapa actúa como filtro: si el código tiene errores de estilo o sintaxis, no tiene sentido correr los tests; si los tests fallan, no tiene sentido compilar; y si el build falla, no se puede deployar. De esta forma ahorramos tiempo de ejecución y garantizamos que solo llega a producción código que pasó todas las validaciones.

Además del pipeline, implementamos un flujo de trabajo basado en Pull Requests con revisión obligatoria. Esto agrega una capa humana de validación: antes de que cualquier cambio llegue a `main`, otro integrante del equipo lo revisa, comenta y aprueba. Combinando automatización con revisión de pares, minimizamos tanto errores técnicos como errores de lógica o diseño.

## Herramientas seleccionadas

<!-- COMPLETAR POR PERSONA 2: justificar la elección de Vitest, Playwright, y alternativas evaluadas -->

## Tests desarrollados

<!-- COMPLETAR POR PERSONA 2: listar cada test con descripción del caso de uso que cubre -->

## Casos de uso críticos

<!-- COMPLETAR POR PERSONA 2: qué flujos se priorizaron para testear y por qué -->

## Pipeline de CI/CD

El pipeline está implementado como un workflow de GitHub Actions (`.github/workflows/ci.yml`) que se dispara en dos eventos:
- **Push a `main`**: ejecuta el pipeline completo incluyendo deploy.
- **Pull Request a `main`**: ejecuta lint, tests y build (sin deploy), para validar los cambios antes de mergear.

### Pasos del pipeline

#### 1. Lint
- **Herramienta:** ESLint con plugins para Astro y TypeScript.
- **Qué hace:** Analiza estáticamente todo el código en `src/` buscando errores de sintaxis, variables no usadas, tipos incorrectos y malas prácticas.
- **Por qué es el primer paso:** Si el código tiene problemas básicos de calidad, no tiene sentido ejecutar tests ni compilar. Es la validación más rápida y barata de correr.

#### 2. Tests
- **Herramienta:** Vitest para tests unitarios.
- **Qué hace:** Ejecuta todos los tests automatizados del proyecto para validar que la lógica de negocio funciona correctamente.
- **Depende de:** Lint (solo corre si el lint pasa).
- **Por qué:** Los tests validan comportamiento real de la aplicación. Si una función de filtrado o validación se rompe, el pipeline lo detecta antes del deploy.

#### 3. Build
- **Herramienta:** Astro build (`npm run build`).
- **Qué hace:** Compila el proyecto completo, generando la versión de producción. Utiliza las variables de entorno de Supabase configuradas como secrets en GitHub.
- **Depende de:** Tests (solo corre si los tests pasan).
- **Por qué:** Un proyecto que no compila no se puede deployar. Este paso verifica que no hay errores de importación, tipos faltantes o problemas de configuración que los tests unitarios no cubren.

#### 4. Deploy
- **Herramienta:** Vercel CLI.
- **Qué hace:** Despliega la aplicación a producción en Vercel.
- **Depende de:** Build (solo corre si el build pasa).
- **Condición adicional:** Solo se ejecuta en push directo a `main`, no en Pull Requests. Esto evita que un PR abierto genere un deploy a producción.
- **Por qué separar build y deploy:** El build verifica que el código compila; el deploy es una acción irreversible que afecta a los usuarios. Separándolos, podemos validar el build en PRs sin riesgo de deployar accidentalmente.

### Secrets necesarios

El pipeline requiere los siguientes secrets configurados en GitHub:
- `PUBLIC_SUPABASE_URL`: URL del proyecto en Supabase.
- `PUBLIC_SUPABASE_ANON_KEY`: Clave anónima de Supabase.
- `VERCEL_TOKEN`: Token de autenticación para Vercel CLI.

### Decisiones de diseño

- **Jobs separados vs. un solo job:** Elegimos separar lint, tests, build y deploy en jobs independientes con dependencias (`needs`). Esto permite ver claramente en qué etapa falló el pipeline y facilita la depuración. La alternativa era un solo job con todos los steps, que es más rápido pero menos legible.
- **Cache de npm:** Usamos `actions/setup-node` con cache habilitado para `npm`. Esto reduce significativamente el tiempo de instalación de dependencias en corridas sucesivas.
- **Deploy condicional:** El deploy solo ocurre en push a `main` (`if: github.event_name == 'push' && github.ref == 'refs/heads/main'`). En PRs se ejecuta todo menos el deploy, lo que permite validar los cambios sin afectar producción.

## Limitaciones y deuda técnica

- **Tests E2E limitados:** Actualmente los tests E2E cubren solo el flujo principal. Flujos como edición de perfil, eliminación de autos o manejo de errores de red no están cubiertos. Con más tiempo, agregaríamos tests para estos escenarios.
- **Sin coverage mínimo:** No implementamos un umbral mínimo de cobertura de tests en el pipeline. Un cambio podría pasar el CI sin tener tests que lo cubran. Lo ideal sería agregar `vitest --coverage` con un mínimo del 60%.
- **Variables de entorno hardcodeadas en el cliente:** Las claves de Supabase son públicas (`PUBLIC_`), lo cual es intencional para el acceso desde el navegador, pero limita qué operaciones se pueden proteger solo con Row Level Security.
- **Sin entorno de staging:** El pipeline deploya directo a producción. Lo ideal sería tener un entorno de staging donde se desplieguen los PRs para poder probar visualmente antes de mergear.
- **Sin monitoreo de errores:** No integramos Sentry ni otro servicio de error monitoring. Los errores en producción solo se detectan si un usuario los reporta o si revisamos los logs manualmente.
- **Sin notificaciones de fallo:** Si el pipeline falla, hay que ir a GitHub Actions a verificar. Sería útil integrar notificaciones a Slack o email para enterarse de fallos inmediatamente.

## Uso de herramientas de IA

Se utilizó Claude Code (agente de IA de Anthropic) para asistir en la configuración del pipeline de CI/CD, la estructura del ESLint y la redacción inicial de este documento. Las decisiones de diseño (como separar el pipeline en jobs, usar deploy condicional, elegir ESLint con plugins de Astro) fueron discutidas y validadas por el equipo. Cada integrante puede explicar y defender las decisiones documentadas.
