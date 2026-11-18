# Bitácora SQH

## 18 de noviembre de 2026, 00:36 (America/Santiago)

**Objetivo:** Diagnosticar y mejorar la indexación de sqh.cl en Google, incluyendo el blog y el episodio 7.

**Realizado:** Search Console, propiedad sc-domain:sqh.cl, cuenta vdtm.cl@gmail.com: sitemap https://sqh.cl/sitemap.xml reenviado y leído correctamente el 18 de noviembre, con nueve páginas descubiertas. Solicitada indexación del blog y proveedores-de-excelencia, ambas aceptadas en la cola. La inspección de regeneración ósea y periodontitis confirma páginas indexadas. El informe de indexación de vídeos del 15 de noviembre muestra seis vídeos indexados. El informe de datos estructurados registró seis errores por falta de uploadDate; la prueba en vivo de periodontitis detectó un elemento válido y se inició la validación de la corrección el 18 de noviembre. Sin acciones manuales ni problemas de seguridad detectados.

**Diagnóstico y limitaciones:** En una muestra, Google eligió la URL sin barra como canónica de periodontitis; la versión www de inicio redirige y Google seleccionó https://sqh.cl/ como canónica. Posteriormente, la inspección del blog y del episodio proveedores registró error de redirección en rastreos del 18 de noviembre a las 00:27 y 00:25 respectivamente. Una prueba en vivo posterior del blog indicó que estaba disponible e indexable. El navegador llega a /blog/ y /episodios/proveedores-de-excelencia/ desde rutas sin barra, mientras sitemap y canónicas declaran rutas sin barra. El origen exacto del error no está confirmado; no se modificó código ni se publicó. El informe agregado de páginas tenía fecha 12 de noviembre y no refleja el estado individual actualizado.

**Pendiente:** Investigar redirecciones HTTP reales, plataforma de publicación y coherencia entre URL finales, canónicas, sitemap y enlaces antes de elegir una corrección. Verificar individualmente indexación del blog y capítulo 7; comprobar resultado de validación de uploadDate y demás páginas relevantes. Si los errores persisten, preparar corrección revisable y obtener autorización antes de producción. No asumir que el rastreo o la indexación están garantizados.

**Repositorio y despliegue:** vdtmcl/sqh-sonrisas-que-hablan, main d79c49a al revisar; workflow indica GitHub Pages. Esta bitácora se guarda en rama documental docs/indexacion-20261118, sin despliegue productivo. Próxima revisión recomendada: 19 de noviembre de 2026 desde las 00:36 de Santiago; Google puede tardar más.
