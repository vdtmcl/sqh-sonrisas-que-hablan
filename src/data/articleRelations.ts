export const relatedEpisodes: Record<string, string[]> = {
  "periodontitis-y-encias": ["regeneracion-osea-guiada", "dientes-fijos-en-48-horas", "ortodoncia-en-adultos"],
  "regeneracion-osea-guiada": ["periodontitis-y-encias", "dientes-fijos-en-48-horas"],
  "blanqueamiento-y-salud-dental": ["periodontitis-y-encias", "ortodoncia-en-adultos"],
  "dientes-fijos-en-48-horas": ["regeneracion-osea-guiada", "periodontitis-y-encias", "ortodoncia-en-adultos"],
  "kinesiologia-y-odontologia": ["ortodoncia-en-adultos", "periodontitis-y-encias"],
  "ortodoncia-en-adultos": ["kinesiologia-y-odontologia", "dientes-fijos-en-48-horas", "blanqueamiento-y-salud-dental"],
  "proveedores-de-excelencia": ["dientes-fijos-en-48-horas", "regeneracion-osea-guiada", "ortodoncia-en-adultos"]
};

// Fechas de publicación de los episodios indicadas en las fichas proporcionadas.
export const episodeVideoDates: Record<string, string> = {
  "periodontitis-y-encias": "2026-03-23",
  "regeneracion-osea-guiada": "2026-03-31",
  "blanqueamiento-y-salud-dental": "2026-03-04",
  "dientes-fijos-en-48-horas": "2026-05-03",
  "kinesiologia-y-odontologia": "2026-07-12",
  "ortodoncia-en-adultos": "2026-02-20",
  "proveedores-de-excelencia": "2026-11-16"
};
