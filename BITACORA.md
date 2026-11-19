# Bitácora SQH

## 18 de noviembre de 2026, 00:36 (America/Santiago)

**Objetivo:** Diagnosticar y mejorar la indexación de sqh.cl en Google, incluyendo el blog y el episodio 7.

**Realizado:** Search Console, propiedad sc-domain:sqh.cl, cuenta vdtm.cl@gmail.com: sitemap https://sqh.cl/sitemap.xml reenviado y leído correctamente el 18 de noviembre, con nueve páginas descubiertas. Solicitada indexación del blog y proveedores-de-excelencia, ambas aceptadas en la cola. La inspección de regeneración ósea y periodontitis confirma páginas indexadas. El informe de indexación de vídeos mostraba seis vídeos indexados. Sin acciones manuales ni problemas de seguridad detectados.

**Diagnóstico inicial:** Google informó canónicas alternativas para variantes con barra final y una redirección desde www.sqh.cl a sqh.cl. La página principal del blog y el capítulo 7 registraron temporalmente errores de redirección durante rastreos del 18 de noviembre. No se hizo cambio de código ni publicación en esa revisión.

## Actualización: 19 de noviembre de 2026, 07:28 (America/Santiago)

**Comprobación en Search Console:** La inspección individual ahora confirma que https://sqh.cl/blog y https://sqh.cl/episodios/proveedores-de-excelencia están indexadas. La inspección del capítulo 7 también muestra un vídeo indexado. Por tanto, los errores de redirección vistos el 18 de noviembre ya no se reproducen en el estado actual. El informe agregado de páginas sigue con última actualización 15/11/26: 7 indexadas, 7 sin indexar, 6 por canónica alternativa y 1 por redirección; ese resumen es anterior a la indexación individual del blog y del capítulo 7. El sitemap se había procesado correctamente el 18/11 y mostraba 9 URLs descubiertas.

**Problema confirmado de datos estructurados:** Search Console mostró cuatro páginas con uploadDate sin zona horaria y cuatro con valor fecha/hora inválido. La captura del 19/11 también informa esos dos problemas. El código publicado enviaba fechas solo como YYYY-MM-DD. Revisé las fechas y horas originales de publicación directamente en los metadatos de los siete vídeos de YouTube.

**Corrección preparada:** src/data/articleRelations.ts ahora contiene las marcas de tiempo ISO 8601 originales con zona horaria para los siete episodios. La corrección está en la rama fix/sqh-video-upload-datetime, PR #16: https://github.com/vdtmcl/sqh-sonrisas-que-hablan/pull/16. El PR incluye esta bitácora y el cambio de metadatos. npm ci y npm run build terminaron correctamente; comprobé que el prerender produjo uploadDate con offset horario en las siete páginas de episodios. No se ha mezclado ni publicado en producción.

**Pendiente:** Revisar y aprobar el PR antes de fusionarlo y desplegarlo a producción. Tras el despliegue, solicitar la validación de los problemas de uploadDate en Search Console e inspeccionar las siete páginas de episodio. Google actualiza los informes con retraso; el resultado final de la validación y el índice no se puede forzar. Reabrir este seguimiento 24 horas después del despliegue, y seguir revisándolo si Google aún muestra una validación en curso.

**Repositorio, rama y despliegue:** vdtmcl/sqh-sonrisas-que-hablan; main d79c49a al revisar; README indica Cloudflare Pages. PR #16 abierto hacia main. Producción permanece sin cambios.

## Cierre de sesión: 19 de noviembre de 2026, 07:33 (America/Santiago)

**Estado verificado:** PR #16 continúa abierto, no fusionado y listo para revisión. Cloudflare Pages confirmó una implementación de vista previa exitosa para la rama fix/sqh-video-upload-datetime, commit 1fe6fe323089325d922733a9050015d7f5a8daba. La compilación de Cloudflare usó npm run build y generó las páginas HTML de los siete episodios. Vista previa: https://662f5425.sqh-sonrisas-que-hablan.pages.dev; alias de la rama: https://fix-sqh-video-upload-datetim.sqh-sonrisas-que-hablan.pages.dev. Es una vista previa; no es sqh.cl ni producción. main sigue en d79c49a y producción no se ha modificado.

**Recomendación de seguimiento:** Tras autorizar y desplegar el PR a producción, hacer el primer control en Search Console 24 horas después: comprobar el marcado público de las siete páginas, revisar el informe de vídeos y solicitar Validar corrección si no hay una validación en curso. Google indica que la validación suele tardar alrededor de dos semanas y puede tardar más; no volver a iniciar otra mientras la actual siga en curso.

**Pendiente para cerrar el objetivo:** autorización para fusionar/publicar el PR #16; luego comprobar el resultado publicado en sqh.cl, iniciar o verificar la validación de Search Console y confirmar individualmente el estado de indexación de las URLs objetivo. El resultado final depende del nuevo rastreo y procesamiento de Google.
