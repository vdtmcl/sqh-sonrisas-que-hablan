export const relatedEpisodes: Record<string, string[]> = {
  "periodontitis-y-encias": ["regeneracion-osea-guiada", "dientes-fijos-en-48-horas", "ortodoncia-en-adultos"],
  "regeneracion-osea-guiada": ["periodontitis-y-encias", "dientes-fijos-en-48-horas"],
  "blanqueamiento-y-salud-dental": ["periodontitis-y-encias", "ortodoncia-en-adultos"],
  "dientes-fijos-en-48-horas": ["regeneracion-osea-guiada", "periodontitis-y-encias", "ortodoncia-en-adultos"],
  "kinesiologia-y-odontologia": ["ortodoncia-en-adultos", "periodontitis-y-encias"],
  "ortodoncia-en-adultos": ["kinesiologia-y-odontologia", "dientes-fijos-en-48-horas", "blanqueamiento-y-salud-dental"],
  "proveedores-de-excelencia": ["dientes-fijos-en-48-horas", "regeneracion-osea-guiada", "ortodoncia-en-adultos"]
};

// Fechas y horas originales de publicación, leídas de los metadatos de YouTube.
export const episodeVideoDates: Record<string, string> = {
  "periodontitis-y-encias": "2026-03-23T09:56:12-07:00",
  "regeneracion-osea-guiada": "2026-03-31T09:40:16-07:00",
  "blanqueamiento-y-salud-dental": "2026-03-04T07:38:58-08:00",
  "dientes-fijos-en-48-horas": "2026-05-02T17:07:21-07:00",
  "kinesiologia-y-odontologia": "2026-07-12T12:52:09-07:00",
  "ortodoncia-en-adultos": "2026-02-20T14:13:48-08:00",
  "proveedores-de-excelencia": "2026-11-16T10:43:19-08:00"
};
