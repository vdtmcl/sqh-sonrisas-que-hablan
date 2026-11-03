# SQH | Sonrisas que Hablan

Frontend one page para el podcast SQH, construido como una experiencia editorial audiovisual sobre salud, tecnología aplicada y conversación interdisciplinaria.

## Stack

- React + TypeScript + Vite
- React Router DOM v6
- Tailwind CSS
- Lucide React
- GSAP ScrollTrigger
- Three.js, @react-three/fiber y @react-three/drei
- Google Font API
- Preparado para Cloudinary, Google Analytics, Google Tag Manager, Google Maps, Cloudflare Turnstile y Resend
- Pensado para Cloudflare Pages con HTTP/3 vía Cloudflare

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Variables de entorno

Copia `.env.example` como `.env.local` y completa solo los servicios que correspondan:

```bash
VITE_GTM_ID=
VITE_GA_MEASUREMENT_ID=
VITE_GOOGLE_MAPS_API_KEY=
VITE_CLOUDFLARE_TURNSTILE_SITE_KEY=
VITE_CLOUDINARY_CLOUD_NAME=
```

No se incluyen secretos reales en el repositorio.

## Cloudinary

Los assets temporales están centralizados en `src/data/media.ts`.

- Reemplazar `src` por URLs finales o usar `cloudinaryPublicId`.
- `ResponsiveImage`, `VideoFrame`, `EpisodeMedia` y `CloudinaryReadyMedia` ya están preparados para responsive media, lazy loading y poster audiovisual.
- El recurso principal del hero usa `fetchpriority="high"`.

## GitHub + Cloudflare Pages

Flujo recomendado:

- `main`: producción.
- `develop`: iteraciones y previews.
- Pull requests para revisar diseño, contenido y ajustes visuales.
- Cloudflare Pages conectado al repositorio de GitHub.

Configuración de Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`
- Variables de entorno: usar las mismas de `.env.example` en el panel de Cloudflare.

## Formulario y Resend

El formulario envía los mensajes a `contacto@sqh.cl` mediante `functions/api/contact.ts`, incluyendo un archivo adjunto opcional de hasta 10 MB. Turnstile se valida en el servidor antes del envío. En Cloudflare Pages:

- Producción usa el secreto `RESEND_API_KEY_SQH`; la función admite `RESEND_API_KEY` como alternativa para vista previa.
- `TURNSTILE_SECRET` es un secreto independiente de Resend; `TURNSTILE_HOSTNAMES` define los hosts aceptados cuando se configura para vista previa. En producción, el host predeterminado es `sqh.cl`.
- `RESEND_FROM_EMAIL` configura el remitente bajo el dominio verificado `sqh.cl`.
- Las claves de Resend de producción y vista previa son independientes y están restringidas al envío desde `sqh.cl`. No registrar sus valores en el repositorio.

El formulario se publicó mediante el PR #9 (commit `17a01ae`). Se comprobaron compilación, vista previa y verificación de datos inválidos; el mensaje de prueba autorizado a `contacto@sqh.cl` figura como Delivered en Resend. No se verificó visualmente su recepción en Zoho. Para recuperar el comportamiento anterior, revertir el PR mediante un nuevo cambio y verificar el despliegue.

## Rutas

- `/`: sitio one page.
- `/preview`: revisión rápida de componentes y dirección visual.
- `*`: 404 simple.

## Pendientes editoriales

- Reemplazar placeholders por fotos, posters y videos definitivos.
- Validar cifras institucionales de Red Implantología antes de publicarlas.
- Definir URLs reales de YouTube, Instagram, OG image y dominio final.
