# Bitácora SQH | Sonrisas que Hablan

## 2026-11-18 00:11 (America/Santiago) — Cierre de sesión

### Identidad y estado
- Sitio: https://sqh.cl/ · blog: https://sqh.cl/blog/
- Repositorio: https://github.com/vdtmcl/sqh-sonrisas-que-hablan
- Producción: Cloudflare Pages, proyecto `sqh-sonrisas-que-hablan`, rama `main`. Último cambio funcional publicado: `d79c49a41189cd8773189fa01657634d78cb202a`. Deployment de producción confirmado como exitoso: https://89918f00.sqh-sonrisas-que-hablan.pages.dev (alias https://sqh.cl).
- La rama de trabajo `notas-temporada-1` y el PR borrador #14 contienen una versión anterior de las notas. Los cambios funcionales ya llegaron a main por una secuencia de commits; no fusionar el borrador sin revisar su estado.

### Objetivo y resultado terminado
- Publicadas siete notas basadas en los documentos proporcionados por Agustín: seis de temporada 1 y el capítulo 7 general, identificado como temporada 2, capítulo 1.
- Se mantienen las rutas existentes `/episodios/<slug>`, con video y artículo en la misma página. Se incluyeron enlaces dentro de la redacción y una sección de notas relacionadas.
- Cada nota tiene el botón «¿Quieres participar en este podcast?», que apunta al formulario de contacto presente en el pie común de las páginas. El formulario conserva la validación del servidor y Turnstile configurado para mostrarse cuando requiera interacción.
- Se eliminó la animación que revelaba el contenido al desplazarse; imágenes, miniaturas y mapa se solicitaron desde el inicio.
- Se agregó estructura de artículo y video, títulos, descripciones y etiquetas HTML semánticas. Las fechas de video incluidas provienen de las fichas entregadas.
- Fuentes editoriales: https://drive.google.com/drive/folders/11kiMxu7GHzIpW4tnwmp0rV2nTsjCO6Ak . El usuario indicó que la redacción está validada y solo autorizó corregir posibles errores de transcripción; se corrigió Kitme por KINME.

### Archivos relevantes
- `src/data/articles.ts`, `src/data/seasonTwoArticle.ts`, `src/data/articleRelations.ts`, `src/data/episodes.ts`: textos, relaciones, fechas y episodios.
- `src/pages/EpisodePage.tsx`, `src/pages/Blog.tsx`, `src/components/layout/Footer.tsx`: presentación de notas, enlaces y contacto común.
- `src/lib/seo.ts`, `src/components/seo/SEOHead.tsx`, `src/ssr-render.tsx`, `public/sitemap.xml`: metadatos y renderizado para buscadores.
- `src/components/forms/ContactForm.tsx`, `functions/api/contact.ts`: formulario y verificación.

### Validación efectuada
- `npm run build` terminó correctamente antes del último despliegue funcional; `git diff --check` sin errores.
- Se inspeccionó el HTML generado de las siete notas: un H1 por nota, jerarquía H2/H3, enlaces internos y un formulario con un destino de contacto. Se revisó la lista del blog y la nota del capítulo 7 en producción; su botón llevó al formulario de la misma página.
- Cloudflare confirmó el deployment de producción y su alias. No se hizo envío de prueba del formulario.

### Limitaciones y próximos pasos
- Las fechas de publicación de los videos vienen de los documentos y no fueron contrastadas independientemente; verificarlas antes de considerarlas definitivas.
- La revisión visual en producción se centró en la nota del capítulo 7 y el blog; no se comprobó visualmente cada nota en todos los tamaños de pantalla.
- En una revisión anterior, el script externo de Turnstile no llegó a inicializar en la sesión de navegador usada; queda pendiente comprobar su funcionamiento y el envío real solo con autorización para una prueba de entrega.
- La indexación y el rendimiento en búsquedas no están garantizados ni fueron comprobados en Search Console durante este cierre.
- Próximo paso: atender las observaciones editoriales o de visualización que reporte Agustín; antes de otros cambios, revisar esta bitácora y contrastar el estado de main y del deployment activo.
