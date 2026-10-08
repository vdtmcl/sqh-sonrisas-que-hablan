# BITACORA.md — SQH

## ESTADO_ACTUAL

Auditoría 2026-10-08 UTC. vdtmcl/sqh-sonrisas-que-hablan; main c201c232d160217c63ddbeb5f7536b2403447a41. Cloudflare sqh-sonrisas-que-hablan; cuenta 7d5cdcf87df07007a26fc926025fbfc7; sqh.cl activo.
Deployment canónico aeee1def-8b97-454a-9eef-08e43475652b, 2026-08-31, producción exitosa y commit coincide con main. Revalidar al inicio.
Git integrado publica main y previews de todas las ramas; npm run build → dist. .github/workflows/deploy-pages.yml publica adicionalmente GitHub Pages.
La rama codex/admin-multisitio-20261008 prepara AGENTS, esta bitácora, operaciones y validación de PR; todavía no incorporada a main.

## MAPA_TECNICO

React 18, Vite 6, TypeScript, Tailwind 3; Router, GSAP, Three/R3F. src/data/content.ts y media.ts; scripts/prerender.mjs genera rutas de episodios. functions/api/contact.ts usa Resend y admite un adjunto hasta 10 MB.
README conserva contexto inicial, pero sus rutas y referencias a placeholders no sustituyen código actual.

## INTEGRACIONES_Y_OPERACION

- Cloudflare production: RESEND_API_KEY (secret_text) y RESEND_FROM_EMAIL (plain_text) presentes; no se leyeron valores.
- Preview: sin variables de Resend. El formulario no puede completar envío allí; frontend/build se validan por separado.
- Cloudinary: URLs públicas en media.ts (cloud l9grsc6p), YouTube y servicios de Google. Acceso administrativo y funcionamiento efectivo externo pendientes.
- main sin protección reportada por GitHub. vdtmcl con admin/push/pull verificados; Cloudflare lectura verificada por APIs de proyecto/deployment.
- No bindings D1 configurados en los ambientes auditados.

## RIESGOS_Y_PENDIENTES

- Cloudflare y GitHub Pages coexisten; Functions no funcionan en hosting estático GitHub Pages. No retirar hosting ni cambiar dominios sin autorización.
- El handler de contacto no verifica Turnstile en servidor; una variable/frontend preparado no demuestra protección. Evaluar protección antispam en tarea específica.
- tsconfig solo incluye src; build no cubre tipado de Functions. Sin tests/lint actuales.
- Preview carece de Resend; configurar credenciales de pruebas y destino controlado requiere autorización específica, nunca copiar secretos de producción.
- Pages construye sin depender de Actions; exigir build Pages y Validate aprobados antes de merge.
- README propone develop; flujo vigente autorizado usa codex/**, manteniendo ramas anteriores.
- Backup de multimedia existente se conserva. Ningún backup externo ni rollback de integraciones fue probado.

## ULTIMA_VALIDACION

Correspondencia dominio/repositorio/commit canónico verificada por APIs. Workflow previo: https://github.com/vdtmcl/sqh-sonrisas-que-hablan/actions/runs/33347502856 (success).
Para resultados de validación de esta rama y preview consultar PR; no declarar prueba de envío real.

## FUENTES_DE_DETALLE

AGENTS.md, docs/OPERATIONS.md, README.md, package.json, src/, functions/, workflows y Git. Registro central en WEB VDTM NUBE para selección del sitio.
