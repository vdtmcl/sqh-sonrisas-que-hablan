# BITACORA.md — SQH

## CIERRE_PROTOCOLO_MULTISITIO_20261020

- **Solicitud de cierre:** 2026-10-20 13:29:05, America/Santiago. Sesión de gobierno multisitio; no es una auditoría nueva del estado productivo de esta web.
- **Objetivo y resultado:** simplificar las instrucciones de WEB VDTM NUBE y separar reglas estables de datos operativos. Versión definitiva de 3.930 caracteres entregada en el chat; Agustín confirmó «aplicado». La configuración de ChatGPT no fue inspeccionada por herramienta: la aplicación consta por confirmación del usuario.
- **Decisiones:** una tarea a la vez; controles proporcionales al cambio; «aplica y sube»/«publica» constituye autorización específica del cambio y no requiere una segunda aprobación idéntica. Se mantienen los controles obligatorios y restricciones de las herramientas. Las referencias antiguas a pedir siempre una segunda aprobación son históricas y no deben reintroducirla frente a esta autorización vigente.
- **Continuidad:** AGENTS conserva reglas del sitio; BITACORA mantiene estado, evidencia y pendientes; OPERATIONS conserva procedimientos. Los datos variables no se mantienen en instrucciones ni en el antiguo adjunto central. «Cierre de sesión» consolida y persiste documentación; no cierra cuentas. Registrar también hitos durante trabajos largos.
- **NIC.cl:** quedó autorizada la gestión técnica dentro de los proyectos solicitados, con alcance y destino validados. Observación NIC.cl anterior en este chat (2026-10-20): ficha de sqh.cl accesible; nameservers rayne.ns.cloudflare.com y nikon.ns.cloudflare.com. No se guardaron cambios ni se probó escritura; no revalidado al cierre.
- **Cambio de este cierre:** únicamente BITACORA.md en este repositorio. Rama documental codex/admin-multisitio-20261008; PR #3 abierto y sin merge; base main. HEAD leído antes del cierre: 75cb84c5b4006765290fbe56fc6060d3cdac53d7. El SHA del commit de cierre queda en el historial remoto de este archivo.
- **Validación:** lectura autenticada de AGENTS.md, BITACORA.md, árbol Git y referencia/PR en GitHub. No se ejecutaron builds, pruebas funcionales, revisión visual ni despliegues manuales por este cambio documental. No se revalidaron producción, DNS, Cloudflare ni sesiones de navegador al cierre; los snapshots anteriores conservan sus fechas y deben reconsultarse cuando sean necesarios.
- **Límite conocido:** el entorno de ejecución local quedó indisponible; el archivo WEB_VDTM_NUBE_MULTISITIO.md abierto no pudo reemplazarse por el último texto compacto. La versión larga anterior no es la política vigente ni una fuente de estado. Retirar su uso como protocolo adjunto si aún existe; no se confirmó su retirada. Las instrucciones definitivas aplicadas por Agustín son la referencia de política.
- **Pendientes y siguiente paso:** conservar los PR anteriores y sus dependencias sin fusionarlos por este cierre. Retomar con una tarea y sitio concretos, leer esta bitácora desde su rama/PR vigente y contrastar solo los datos necesarios. No se cambiaron código, main, producción, DNS, secretos ni permisos durante este cierre.

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

AGENTS.md, docs/OPERATIONS.md, README.md, package.json, src/, functions/, workflows y Git. La identidad y el estado técnico se mantienen en este repositorio; la política general está en las instrucciones vigentes de WEB VDTM NUBE.
