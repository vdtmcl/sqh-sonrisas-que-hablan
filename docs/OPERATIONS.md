# Operación de SQH

## Desarrollo y controles

npm ci; npm run build (TypeScript frontend, bundle y prerender). npm run dev y npm run preview. El nuevo Validate de PR usa Node 22 compatible con Vite 6; GitHub Pages conserva Node 20. Revisar rutas de episodios y sitemap cuando cambie contenido. No crear scripts check/test ficticios.
tsconfig incluye src; revisar Functions mediante Pages local y controles específicos para cambios backend.

## Publicación

Cuenta 7d5cdcf87df07007a26fc926025fbfc7; proyecto sqh-sonrisas-que-hablan; producción main. Git integrado Pages despliega previews en ramas codex/** y dist con Functions. PR activa Validate. Verificar commit, environment preview, build/Actions y URL servida antes de pedir aprobación.
Merge autorizado a main publica Cloudflare y activa también GitHub Pages; este último no ejecuta Functions. Conservar mecanismo hasta decisión expresa.
No trasladar workflows Wrangler/secretos de VDTM: aquí basta integración nativa existente.

## Formularios e integraciones

functions/api/contact.ts requiere RESEND_API_KEY y RESEND_FROM_EMAIL. Preview no tiene variables de correo; mostrar esta limitación al entregar. No probar envío real ni configurar secretos sin autorización específica. Preparar pruebas locales simuladas para errores y adjuntos cuando se trabaje el formulario. La función actual no verifica Turnstile; protección efectiva pendiente.
Medios en src/data/media.ts; conservar IDs, originales y backup/. Acceso a Cloudinary no demostrado por URLs.

## Recuperación

Registrar deployment/commit canónicos antes de publicar. Preparar git revert, validar y pedir autorización de publicación. Rollback de Cloudflare al deployment estable anterior con aprobación específica; revisar GitHub Pages separadamente. No borrar deployments ni medios; conservar configuración y contratos externos.

## Registro y nuevos sitios

WEB VDTM NUBE mantiene su registro central fuera del código de SQH. Cada alta agrega una ficha y documentación en el repositorio propio; nunca reutilizar aquí dominios, destinos de correo o recursos de otro sitio.
