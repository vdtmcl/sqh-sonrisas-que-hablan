export type ArticleBlock = { type: "heading" | "question" | "paragraph" | "list"; text: string } | { type: "table"; rows: string[][] };
export type Article = { title: string; metaTitle: string; description: string; blocks: ArticleBlock[] };
export const articles: Record<string, Article> = {
  "periodontitis-y-encias": {
    "title": "¿La periodontitis tiene cura? Claves clínicas sobre estabilidad periodontal, controles y salud de las encías",
    "metaTitle": "¿La periodontitis tiene cura? Guía clínica de tus encías",
    "description": "Descubre si la periodontitis tiene cura, en qué se diferencia de la gingivitis y cada cuánto debes ir a control según la Dra. Yufon Chau en el podcast SQH.",
    "blocks": [
      {
        "type": "paragraph",
        "text": "La periodontitis no tiene una cura definitiva que devuelva el tejido perdido de forma espontánea, pero sí es una enfermedad controlable y estabilizable. A diferencia de la gingivitis —que es una inflamación superficial y completamente reversible—, la periodontitis implica pérdida de hueso alveolar. El tratamiento periodontal busca frenar esa pérdida ósea y mantener la enfermedad estable a largo plazo mediante controles periódicos."
      },
      {
        "type": "paragraph",
        "text": "Esta fue la premisa central del primer episodio del podcast de SQH, emitido por Red Implantología, titulado ¿La periodontitis tiene cura? Todo sobre tus encías. En la conversación, la periodoncista y docente universitaria Dra. Yufon Chau Kram desglosó los fundamentos diagnósticos, la lógica detrás de las clasificaciones actuales y el rol decisivo de la educación del paciente para conservar dientes e implantes sanos."
      },
      {
        "type": "heading",
        "text": "Gingivitis vs. periodontitis: dónde está el límite de la reversibilidad"
      },
      {
        "type": "paragraph",
        "text": "Desde el punto de vista clínico, distinguir entre inflamación superficial y destrucción de soporte es fundamental para establecer expectativas terapéuticas realistas:"
      },
      {
        "type": "list",
        "text": "Gingivitis (reversible): Corresponde a las etapas iniciales de inflamación gingival, sin pérdida de hueso alveolar. Con intervención oportuna y control de placa bacteriana, los tejidos pueden revertir el cuadro inflamatorio y volver a un estado de salud íntegro."
      },
      {
        "type": "list",
        "text": "Periodontitis (controlable, no reversible en pérdida ósea generalizada): Cuando la inflamación avanza y se produce pérdida de hueso alrededor de las piezas dentales, ese tejido óseo perdido no se recupera de manera natural. Aunque en defectos óseos muy específicos y localizados es posible evaluar técnicas de regeneración, en cuadros generalizados el objetivo clínico es frenar la progresión de la pérdida ósea y controlar los factores de riesgo."
      },
      {
        "type": "paragraph",
        "text": "Para explicar este concepto a los pacientes sin tecnicismos innecesarios, la Dra. Chau recurre en el episodio a una analogía médica directa: la enfermedad periodontal se comporta de forma similar a la diabetes. No se \"cura\" de manera definitiva para luego olvidar los cuidados, sino que se controla y se mantiene estable en el tiempo."
      },
      {
        "type": "heading",
        "text": "Estadios y grados: por qué se clasifica la enfermedad periodontal"
      },
      {
        "type": "paragraph",
        "text": "Uno de los puntos que suele generar confusión entre los pacientes es pensar que la enfermedad periodontal \"muta\" o cambia de naturaleza cuando los especialistas hablan de distintas clasificaciones. Según explicó la Dra. Chau en el capítulo 1 de SQH, la clasificación por estadios y grados no responde a una mutación de la patología, sino a una herramienta diagnóstica para:"
      },
      {
        "type": "list",
        "text": "1. Simplificar la comprensión clínica de la severidad y el estado actual del paciente."
      },
      {
        "type": "list",
        "text": "2. Monitorear si la enfermedad está estable o activa a lo largo del tiempo."
      },
      {
        "type": "list",
        "text": "3. Empoderar al paciente en su propio tratamiento, dejándole claro que la estabilidad depende en gran medida de su adherencia a los controles y al mantenimiento periodontal."
      },
      {
        "type": "paragraph",
        "text": "Como resumió la especialista durante la entrevista: \"El conocimiento es poder\". Cuando el paciente comprende qué ocurre en sus encías y por qué su condición requiere seguimiento, la tasa de retorno a controles de mantención aumenta de forma sostenida."
      },
      {
        "type": "heading",
        "text": "¿Cada cuánto debe asistir a control un paciente periodontal y un paciente sano?"
      },
      {
        "type": "paragraph",
        "text": "La frecuencia de las visitas de mantenimiento no es única; se ajusta de acuerdo con los factores de riesgo individuales, las enfermedades de base y la respuesta biológica tras la fase activa del tratamiento de periodoncia."
      },
      {
        "type": "table",
        "rows": [
          [
            "Perfil clínico del paciente",
            "Frecuencia inicial recomendada",
            "Evolución tras estabilidad comprobada",
            "Criterio clínico principal"
          ],
          [
            "Paciente periodontal complejo o en fase inicial",
            "Cada 3 a 4 meses",
            "Cada 6 meses una vez lograda la estabilidad",
            "Control estricto de factores de riesgo, placa y respuesta tisular"
          ],
          [
            "Paciente periodontal estabilizado a largo plazo",
            "Cada 6 meses",
            "Cada 8 meses o 1 vez al año (según evolución de años)",
            "Mantención de estabilidad sin signos de progresión; algunos pacientes optan por seguir cada 6 meses por confianza clínica"
          ],
          [
            "Paciente sin diagnóstico previo (estado de salud)",
            "Cada 6 meses",
            "1 vez al año",
            "Higiene impecable, mínima acumulación de cálculo/sarro y varios controles consecutivos sin caries"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Nota clínica: Incluso en pacientes que alcanzan criterios para pasar a controles anuales, la preferencia personal por controles cada 4 o 6 meses sigue siendo válida cuando brinda mayor seguridad y refuerza la prevención."
      },
      {
        "type": "heading",
        "text": "Más allá de la limpieza: periodoncia quirúrgica, estética dental e implantología"
      },
      {
        "type": "paragraph",
        "text": "La conversación también abordó dimensiones menos conocidas de la especialidad que van más allá del control de la infección periodontal:"
      },
      {
        "type": "list",
        "text": "Cirugía plástica periodontal y recubrimiento radicular: Muchos pacientes presentan recesiones gingivales con exposición de la raíz dental. El manejo quirúrgico permite cubrir raíces expuestas, corregir secuelas gingivales y mejorar el entorno mucogingival."
      },
      {
        "type": "list",
        "text": "Sinergia con rehabilitación estética: En pacientes que buscan tratamientos como carillas dentales, el periodoncista interviene previamente para armonizar y corregir la arquitectura de la encía, asegurando un resultado estético natural y biológicamente estable."
      },
      {
        "type": "list",
        "text": "Preparación y cuidado de implantes dentales: La periodoncia optimiza las condiciones del tejido blando y óseo para que el implante quede en una posición favorable y, sobre todo, higienizable a largo plazo."
      },
      {
        "type": "paragraph",
        "text": "En términos de impacto cotidiano, la Dra. Chau destacó que uno de los momentos más gratificantes de su práctica ocurre tras el tratamiento inicial, cuando los pacientes —y muchas veces sus parejas o acompañantes— perciben la desaparición de síntomas concretos como la halitosis (mal aliento matutino), el sangrado de encías y las molestias al cepillado o masticación."
      },
      {
        "type": "heading",
        "text": "Perfil de la especialista: docencia universitaria y vocación clínica"
      },
      {
        "type": "paragraph",
        "text": "El episodio también permitió conocer el recorrido personal y académico de la Dra. Yufon Chau Kram, viñamarina de origen chileno-chino (padre chino, madre chilena), exalumna del colegio Saint Dominic y formada íntegramente en la Universidad de Valparaíso, tanto en el pregrado de Odontología como en la especialidad de Periodoncia."
      },
      {
        "type": "paragraph",
        "text": "Aunque en su etapa escolar llegó a descartar la odontología, descubrió en la universidad una afinidad natural por la periodoncia debido al dinamismo de su evidencia científica y a los resultados clínicos inmediatos en los tejidos. Paralelamente a su práctica clínica en Red Implantología, ejerce como docente en la Universidad de Valparaíso, vocación que atribuye a su abuela —profesora de una escuela rural en el sur de Chile— y a la convicción de que enseñar obliga a mantenerse actualizado y a traducir conceptos complejos a un lenguaje claro para estudiantes y pacientes. En el plano personal, compartió además su reciente matrimonio y su vida cotidiana en Viña del Mar junto a sus dos perritas, Lupe y Estela."
      },
      {
        "type": "heading",
        "text": "Preguntas frecuentes sobre periodontitis y cuidado de las encías"
      },
      {
        "type": "question",
        "text": "¿La periodontitis se cura para siempre?"
      },
      {
        "type": "paragraph",
        "text": "No. A diferencia de la gingivitis, la periodontitis conlleva pérdida de hueso de soporte que no se recupera de manera espontánea. Sin embargo, mediante tratamiento periodontal y controles periódicos es posible frenar la pérdida ósea y mantener la enfermedad completamente estable, de forma comparable al control crónico de la diabetes."
      },
      {
        "type": "question",
        "text": "¿Cuál es la diferencia entre gingivitis y periodontitis?"
      },
      {
        "type": "paragraph",
        "text": "La gingivitis es una inflamación superficial de la encía sin pérdida de hueso y es 100 % reversible con tratamiento oportuno e higiene adecuada. La periodontitis ocurre cuando la inflamación afecta los tejidos profundos de soporte y provoca pérdida ósea; en ese estadio el objetivo es detener el avance y estabilizar la salud bucal."
      },
      {
        "type": "question",
        "text": "¿Cada cuántos meses debe ir al dentista una persona con periodontitis?"
      },
      {
        "type": "paragraph",
        "text": "En pacientes complejos o recién tratados, los controles periodontales suelen indicarse cada 3 a 4 meses. Una vez estabilizados, la mayoría asiste cada 6 meses, y tras varios años de estabilidad sostenida algunos casos pueden espaciarse a cada 8 meses o 1 vez al año según criterio clínico."
      },
      {
        "type": "question",
        "text": "¿El tratamiento periodontal elimina el mal aliento y el sangrado de encías?"
      },
      {
        "type": "paragraph",
        "text": "Sí. Al controlar la inflamación y los factores locales que perpetúan la enfermedad periodontal, síntomas frecuentes como el sangrado gingival, las molestias en las encías y la halitosis (mal aliento, especialmente matutino) suelen resolverse tras el tratamiento."
      },
      {
        "type": "question",
        "text": "¿Qué hace un periodoncista además de tratar encías inflamadas?"
      },
      {
        "type": "paragraph",
        "text": "Además del control de gingivitis y periodontitis, el periodoncista realiza procedimientos quirúrgicos como el recubrimiento de raíces expuestas (recesiones gingivales), corrección estética de encías previa a carillas y preparación de tejidos para que los implantes dentales sean estables y fáciles de higienizar."
      },
      {
        "type": "heading",
        "text": "Ficha técnica del episodio fuente"
      },
      {
        "type": "list",
        "text": "Programa: Podcast SQH — sqh.cl"
      },
      {
        "type": "list",
        "text": "Capítulo: Temporada 1, Capítulo 1 — ¿La periodontitis tiene cura? Todo sobre tus encías"
      },
      {
        "type": "list",
        "text": "Especialista invitada: Dra. Yufon Chau Kram, Especialista en Periodoncia (Red Implantología)"
      },
      {
        "type": "list",
        "text": "Fecha de publicación en YouTube: 23 de marzo de 2026"
      },
      {
        "type": "list",
        "text": "Duración: 11 minutos y 18 segundos"
      }
    ]
  },
  "regeneracion-osea-guiada": {
    "title": "¿Qué es la regeneración ósea guiada y cuándo se necesita? Análisis clínico del Dr. Pablo González Rojas",
    "metaTitle": "Regeneración ósea guiada: qué es y cuándo se indica | SQH",
    "description": "El Dr. Pablo González Rojas, cirujano maxilofacial de Red Implantología, explica qué es la regeneración ósea guiada, sus indicaciones y su rol en implantes.",
    "blocks": [
      {
        "type": "paragraph",
        "text": "La regeneración ósea guiada (ROG) es una cirugía reconstructiva destinada a recuperar volumen y sustento óseo en maxilares que han perdido hueso por traumatismos, infecciones o reabsorción tras perder piezas dentales. Mediante injertos y membranas colágenas que evitan la reabsorción ósea, permite crear una base anatómica segura para instalar implantes dentales y rehabilitar al paciente con dientes fijos."
      },
      {
        "type": "paragraph",
        "text": "Este procedimiento fue el eje del segundo capítulo del podcast SQH de Red Implantología, titulado ¿Qué es la Regeneración Ósea Guiada y cuándo se necesita?. En la entrevista, el cirujano maxilofacial Dr. Pablo González Rojas abordó los fundamentos clínicos de la cirugía reconstructiva previa o simultánea a los implantes, el manejo de terceros molares y la importancia del trabajo multidisciplinario en pabellón."
      },
      {
        "type": "heading",
        "text": "¿Por qué se pierde hueso maxilar y cuándo se indica la regeneración ósea guiada?"
      },
      {
        "type": "paragraph",
        "text": "La pérdida de soporte óseo en los maxilares es un fenómeno frecuente que compromete directamente el pronóstico de la implantología oral. Según explicó el Dr. Pablo González Rojas, las tres causas principales de este déficit son:"
      },
      {
        "type": "list",
        "text": "Traumatismos dentoalveolares o faciales que fracturan o dañan las tablas óseas."
      },
      {
        "type": "list",
        "text": "Infecciones dentales o periodontales previas que destruyen el hueso circundante."
      },
      {
        "type": "list",
        "text": "Reabsorción fisiológica por el paso del tiempo tras la pérdida de piezas dentales sin reemplazo oportuno."
      },
      {
        "type": "paragraph",
        "text": "Cuando un paciente consulta —como recalca el especialista, \"al final los pacientes consultan por rehabilitaciones, no por implantes\"—, el objetivo es lograr una base ósea capaz de sostener la futura prótesis. La regeneración ósea guiada se vuelve indispensable cuando las tablas óseas están muy delicadas o existe un déficit de volumen que dificultaría la estabilidad primaria del implante."
      },
      {
        "type": "heading",
        "text": "Cómo se ejecuta el protocolo quirúrgico: extracciones complejas, membranas colágenas y seno maxilar"
      },
      {
        "type": "paragraph",
        "text": "En la práctica clínica de Red Implantología, muchos casos complejos se planifican de manera coordinada entre el Dr. Pablo González Rojas (cirugía maxilofacial) y el Dr. Tomás Cruzat (director quirúrgico e implantología). Dependiendo de la anatomía del paciente, el abordaje incluye:"
      },
      {
        "type": "table",
        "rows": [
          [
            "Escenario clínico",
            "Procedimiento indicado",
            "Objetivo biológico y rehabilitador"
          ],
          [
            "Dientes incluidos o con mal pronóstico y tablas óseas delicadas",
            "Extracción atraumática + colocación inmediata de implante + ROG",
            "Preservar la arquitectura alveolar en el mismo acto quirúrgico"
          ],
          [
            "Riesgo de colapso o pérdida de volumen post-extracción",
            "Uso de membranas colágenas de barrera",
            "Prevenir la reabsorción ósea y guiar la formación de nuevo hueso"
          ],
          [
            "Déficit de altura ósea en molares superiores (zona antral)",
            "Elevación de seno maxilar",
            "Ganar altura ósea vertical para mejorar el pronóstico de los implantes posteriores"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "La ventaja operativa de ejecutar estos procedimientos en el pabellón de cirugía menor integrado en la propia clínica —con un equipo de asistentes (TENS) entrenado específicamente en flujo quirúrgico— es que el paciente no necesita trasladarse a otro recinto: inicia la anestesia en el box y pasa directamente a pabellón, optimizando tiempos y confort."
      },
      {
        "type": "heading",
        "text": "Motivos de consulta más frecuentes en cirugía maxilofacial"
      },
      {
        "type": "paragraph",
        "text": "Más allá de la regeneración ósea guiada, el Dr. Pablo González Rojas detalló cuáles son las derivaciones habituales que recibe en consulta:"
      },
      {
        "type": "list",
        "text": "Extracción de terceros molares (muelas del juicio): Uno de los motivos más frecuentes en Maxilofacial Viña, tanto por sintomatología como por indicación preventiva."
      },
      {
        "type": "list",
        "text": "Dientes incluidos derivados por ortodoncia: Evaluación conjunta para decidir entre rescatar y traccionar la pieza dental o proceder a su extracción quirúrgica."
      },
      {
        "type": "list",
        "text": "Cirugía de alta complejidad asociada a implantes: Coordinación directa con implantología y rehabilitación oral (como el trabajo conjunto con el Dr. Cruzat y el Dr. Jiménez)."
      },
      {
        "type": "heading",
        "text": "Vocación de alta complejidad: trauma, cirugía ortognática y fisura labiopalatina"
      },
      {
        "type": "paragraph",
        "text": "Al ser consultado sobre las áreas que más lo apasionan dentro de la cirugía maxilofacial, el Dr. Pablo González Rojas destacó tres ámbitos de alto impacto humano y funcional:"
      },
      {
        "type": "list",
        "text": "1. Trauma maxilofacial, especialmente vinculado a su labor en urgencias hospitalarias."
      },
      {
        "type": "list",
        "text": "2. Cirugía ortognática, orientada a corregir discrepancias esqueletales de los maxilares."
      },
      {
        "type": "list",
        "text": "3. Cirugía en pacientes con fisura labiopalatina, área que desarrolla en el ámbito hospitalario público y que también ha permitido planificar rehabilitaciones específicas en clínica privada junto a los equipos de implantología y rehabilitación para transformar la calidad de vida del paciente."
      },
      {
        "type": "heading",
        "text": "Perfil del protagonista: Dr. Pablo González Rojas"
      },
      {
        "type": "paragraph",
        "text": "El Dr. Pablo González Rojas es cirujano dentista y especialista en Cirugía Maxilofacial egresado de la Universidad de Valparaíso (pregrado y posgrado). Oriundo de la región de Viña del Mar, descubrió su vocación quirúrgica en tercer año de carrera al realizar pasantías en la unidad de urgencia del Hospital Dr. Gustavo Fricke, institución donde actualmente se desempeña como cirujano maxilofacial de planta en la Urgencia de Adultos y en el Servicio de Fisurados."
      },
      {
        "type": "paragraph",
        "text": "En Red Implantología (Viña del Mar), atiende los días martes (mañana y parte de la tarde) y viernes (mañana), liderando extracciones complejas, regeneraciones óseas guiadas y cirugía reconstructiva en pabellón propio."
      },
      {
        "type": "heading",
        "text": "Preguntas frecuentes sobre regeneración ósea guiada"
      },
      {
        "type": "question",
        "text": "¿Qué es la regeneración ósea guiada en odontología?"
      },
      {
        "type": "paragraph",
        "text": "La regeneración ósea guiada es un procedimiento quirúrgico que permite recuperar hueso perdido en el maxilar o la mandíbula mediante injertos y membranas colágenas. Su propósito es restablecer el volumen óseo necesario para instalar implantes dentales con buen pronóstico a largo plazo."
      },
      {
        "type": "question",
        "text": "¿Cuándo se necesita una regeneración ósea guiada?"
      },
      {
        "type": "paragraph",
        "text": "Se indica cuando el hueso alveolar se ha reabsorbido por el paso del tiempo tras perder un diente, por infecciones previas, traumatismos o tras extracciones de piezas con tablas óseas muy delgadas. También se emplea en conjunto con elevaciones de seno maxilar en el sector posterior superior."
      },
      {
        "type": "question",
        "text": "¿Se puede colocar el implante dental en la misma cirugía de regeneración ósea?"
      },
      {
        "type": "paragraph",
        "text": "Sí, en muchos casos planificados tras extracciones de dientes con mal pronóstico o piezas incluidas, el cirujano maxilofacial y el implantólogo realizan la extracción, la instalación del implante y la regeneración ósea con membrana colágena en un mismo acto quirúrgico."
      },
      {
        "type": "question",
        "text": "¿Qué otros tratamientos realiza el Dr. Pablo González Rojas en Red Implantología?"
      },
      {
        "type": "paragraph",
        "text": "Además de la regeneración ósea guiada y elevaciones de seno maxilar, el Dr. Pablo González Rojas realiza extracciones de terceros molares (muelas del juicio), manejo de dientes incluidos derivados de ortodoncia, cirugía de implantes complejos y planificación reconstructiva en pabellón."
      },
      {
        "type": "heading",
        "text": "Ficha técnica del episodio fuente"
      },
      {
        "type": "list",
        "text": "Programa: Podcast SQH — sqh.cl"
      },
      {
        "type": "list",
        "text": "Capítulo: Temporada 1, Capítulo 2 — ¿Qué es la Regeneración Ósea Guiada y cuándo se necesita?"
      },
      {
        "type": "list",
        "text": "Especialista protagonista: Dr. Pablo González Rojas, Cirujano Maxilofacial (Red Implantología / Maxilofacial Viña)"
      },
      {
        "type": "list",
        "text": "Fecha de publicación en YouTube: 31 de marzo de 2026"
      },
      {
        "type": "list",
        "text": "Duración: 6 minutos y 33 segundos"
      }
    ]
  },
  "blanqueamiento-y-salud-dental": {
    "title": "¿El blanqueamiento debilita tus dientes? Protocolos clínicos, mitos y ciencia con la Dra. Daniela Lorca",
    "metaTitle": "¿El blanqueamiento debilita los dientes? Dra. Daniela Lorca",
    "description": "La Dra. Daniela Lorca explica en el podcast SQH si el blanqueamiento dental debilita el esmalte, cómo evitar la sensibilidad y qué mitos son falsos.",
    "blocks": [
      {
        "type": "paragraph",
        "text": "No, el blanqueamiento dental supervisado no debilita ni adelgaza los dientes ni provoca fracturas. Los peróxidos producen únicamente una deshidratación temporal del tejido dentario que se revierte de forma natural mediante rehidratación y remineralización. Con protocolos actuales y evaluación clínica previa, el aclaramiento dental es un procedimiento seguro y con tasas mínimas de sensibilidad."
      },
      {
        "type": "paragraph",
        "text": "Así lo explicó la especialista en estética dental y profesora adjunta de la Universidad de Valparaíso Dra. Daniela Lorca en el tercer episodio del podcast Sonrisas que Hablan (SQH), conducido por el Dr. Max Lizana Rudolf en Red Implantología. Durante la conversación titulada ¿El blanqueamiento debilita tus dientes?, la especialista desmontó mitos históricos y detalló cómo han evolucionado los materiales y protocolos clínicos."
      },
      {
        "type": "heading",
        "text": "Aclaramiento vs. blanqueamiento: precisión técnica y agentes químicos"
      },
      {
        "type": "paragraph",
        "text": "Desde el punto de vista odontológico, la Dra. Daniela Lorca aclaró que el término técnicamente correcto es aclaramiento dental: el diente no se vuelve artificialmente blanco (\"blanco tiza\"), sino que aclara su tonalidad manteniendo un aspecto natural y rejuvenecedor del rostro."
      },
      {
        "type": "paragraph",
        "text": "Los principios activos utilizados varían según indicación, concentración y frecuencia:"
      },
      {
        "type": "list",
        "text": "Peróxido de hidrógeno: Protagonista principal en procedimientos clínicos de alta concentración y baja frecuencia (en consulta), así como en ciertos protocolos internos."
      },
      {
        "type": "list",
        "text": "Peróxido de carbamida: Utilizado habitualmente en protocolos ambulatorios (en casa) de menor concentración y mayor frecuencia de aplicación."
      },
      {
        "type": "list",
        "text": "Perborato de sodio: Agente clásico de elección para blanqueamiento interno en dientes no vitales."
      },
      {
        "type": "heading",
        "text": "Tipos de blanqueamiento según vitalidad dentaria y lugar de aplicación"
      },
      {
        "type": "paragraph",
        "text": "No todos los casos se abordan igual. La Dra. Daniela Lorca estructuró la clasificación clínica en dos ejes fundamentales:"
      },
      {
        "type": "table",
        "rows": [
          [
            "Criterio clínico",
            "Modalidad",
            "Mecanismo y protocolo"
          ],
          [
            "Diente vital",
            "Externo (generalizado)",
            "Se aplica en toda la arcada dental desde la superficie del esmalte"
          ],
          [
            "Diente desvital (con endodoncia)",
            "Interno (unitario)",
            "Se desobtura parcialmente la restauración (sin comprometer el sellado del conducto) y se coloca peróxido de hidrógeno o perborato de sodio desde dentro hacia afuera; suele combinarse con blanqueamiento externo para homogeneizar el tono"
          ],
          [
            "En consulta (oficina)",
            "Alta concentración / baja frecuencia",
            "Resultados rápidos bajo control clínico directo y protección gingival"
          ],
          [
            "En casa (ambulatorio)",
            "Baja concentración / alta frecuencia",
            "Uso diario con cubetas personalizadas; es el protocolo que ha demostrado mayor longevidad en el tiempo cuando se combina o aplica con disciplina"
          ]
        ]
      },
      {
        "type": "heading",
        "text": "Evaluación previa obligatoria: restauraciones, carillas y encías sanas"
      },
      {
        "type": "paragraph",
        "text": "Uno de los mayores riesgos de los tratamientos sin supervisión profesional (como los módulos comerciales en centros comerciales) es ignorar las contraindicaciones previas. La Dra. Daniela Lorca enfatizó dos condiciones ineludibles antes de indicar un aclaramiento:"
      },
      {
        "type": "list",
        "text": "1. Presencia de restauraciones previas (resinas, coronas o cerámicas): El peróxido actúa únicamente sobre el tejido dentario natural, nunca sobre cerámica, zirconio, feldespato, disilicato de litio o resinas compuestas. Si el paciente tiene tapaduras o coronas en el sector anterior, deberá considerar su recambio posterior para homogeneizar el color."
      },
      {
        "type": "list",
        "text": "2. Salud periodontal y dental íntegra: El paciente debe estar libre de caries, gingivitis, periodontitis y cálculo supra o subgingival. En consulta, la encía se aísla con una barrera gingival de resina para evitar quemaduras químicas superficiales por contacto directo con el peróxido."
      },
      {
        "type": "heading",
        "text": "Tecnología clínica actual y control de la sensibilidad"
      },
      {
        "type": "paragraph",
        "text": "En Red Implantología, la Dra. Daniela Lorca y el Dr. Max Lizana han incorporado el sistema de activación lumínica Beyond Polus Advance (mencionado en el episodio junto al protocolo Smile Flash). Frente a técnicas tradicionales que requerían dos sesiones de 20 minutos separadas por semanas, este sistema permite ciclos de 10 + 10 minutos (20 minutos en total) con mejoras significativas en el pH de los geles y agentes desensibilizantes integrados:"
      },
      {
        "type": "list",
        "text": "Más del 95 % de los pacientes atendidos bajo este protocolo reportan ausencia de dolor postoperatorio, y las molestias puntuales suelen resolverse en 1 a 2 horas."
      },
      {
        "type": "list",
        "text": "Para pacientes con hipersensibilidad previa (por ejemplo, cuellos expuestos o abfracciones), se realiza primero el sellado o restauración de la zona, fluoración previa y desensibilización con nitrato de potasio, además de utilizar el modo de intensidad moderada del equipo."
      },
      {
        "type": "heading",
        "text": "Mitos y verdades sobre el blanqueamiento dental"
      },
      {
        "type": "paragraph",
        "text": "En la sección central del episodio, la Dra. Daniela Lorca respondió con evidencia clínica a las dudas más frecuentes de los pacientes:"
      },
      {
        "type": "list",
        "text": "¿El blanqueamiento debilita o fractura los dientes? Mito. No adelgaza ni debilita el esmalte; la deshidratación inicial es transitoria y el diente se remineraliza."
      },
      {
        "type": "list",
        "text": "¿Si me blanqueo quedaré con sensibilidad permanente? Mito. Con evaluación previa, pH estabilizado y protocolos desensibilizantes actuales, la sensibilidad es mínima y transitoria."
      },
      {
        "type": "list",
        "text": "¿Es obligatoria la \"dieta blanca\" sin café, vino ni bebidas cola? Mito. Múltiples estudios con grupos control han demostrado que restringir café, té, vino o bebidas oscuras tras el blanqueamiento no altera la eficacia final del aclaramiento. Incluso en pacientes fumadores, la evidencia indica que el aclaramiento químico sigue siendo efectivo, aunque se recomiende evitar el tabaco por salud general y periodontal."
      },
      {
        "type": "list",
        "text": "¿Hay que repetirlo cada 6 meses? No es necesario. La recidiva del color suele tomar un par de años (e incluso más con buenos hábitos). Lo recomendable es un control odontológico anual de mantención preventiva."
      },
      {
        "type": "heading",
        "text": "Perfil de la protagonista: Dra. Daniela Lorca"
      },
      {
        "type": "paragraph",
        "text": "La Dra. Daniela Lorca es cirujano dentista egresada de la Universidad de Valparaíso, donde además ejerce como Profesora Adjunta de la Facultad de Odontología. Posee un Magíster en Docencia, múltiples postítulos en odontología digital y restaurativa, pasantías internacionales en Brasil y Alemania, y certificación como usuaria CEREC para restauraciones en una sola sesión. Desde 2019 forma parte del equipo de Red Implantología en Viña del Mar, liderando tratamientos de estética dental, rehabilitación adhesiva y aclaramiento clínico."
      },
      {
        "type": "heading",
        "text": "Preguntas frecuentes sobre blanqueamiento dental"
      },
      {
        "type": "question",
        "text": "¿El blanqueamiento dental debilita el esmalte de los dientes?"
      },
      {
        "type": "paragraph",
        "text": "No. Según la evidencia clínica explicada por la Dra. Daniela Lorca, el peróxido genera únicamente una deshidratación temporal que se revierte por completo mediante la rehidratación salival y la remineralización natural, sin adelgazar ni fracturar el diente."
      },
      {
        "type": "question",
        "text": "¿Es verdad que no se puede tomar café ni vino después de un blanqueamiento?"
      },
      {
        "type": "paragraph",
        "text": "No es necesario seguir una \"dieta blanca\" estricta. Estudios clínicos con grupos control demostraron que consumir café, té, vino o bebidas oscuras después del procedimiento no compromete el resultado del aclaramiento dental."
      },
      {
        "type": "question",
        "text": "¿Qué pasa si tengo tapaduras o coronas en los dientes delanteros?"
      },
      {
        "type": "paragraph",
        "text": "Los geles de blanqueamiento solo aclaran el tejido dentario natural, no las resinas ni las cerámicas. Por ello es indispensable una evaluación previa para planificar el eventual recambio de esas restauraciones tras el aclaramiento y lograr un color homogéneo."
      },
      {
        "type": "question",
        "text": "¿Puedo hacerme un blanqueamiento si ya tengo dientes sensibles?"
      },
      {
        "type": "paragraph",
        "text": "Sí, siempre que un especialista trate la causa primero. Se deben sellar cuellos expuestos o abfracciones, aplicar flúor y agentes desensibilizantes como nitrato de potasio, y emplear protocolos clínicos de menor intensidad y pH controlado."
      },
      {
        "type": "question",
        "text": "¿Cada cuánto tiempo se recomienda repetir el blanqueamiento dental?"
      },
      {
        "type": "paragraph",
        "text": "No se recomienda hacerlo cada 6 meses, ya que no es necesario. Los resultados suelen mantenerse estables durante un par de años o más, bastando un control odontológico anual para verificar la salud bucal y la estabilidad del tono."
      },
      {
        "type": "heading",
        "text": "Ficha técnica del episodio fuente"
      },
      {
        "type": "list",
        "text": "Programa: Podcast SQH — Sonrisas que Hablan (sqh.cl)"
      },
      {
        "type": "list",
        "text": "Capítulo: Temporada 1, Capítulo 3 — ¿El blanqueamiento debilita tus dientes?"
      },
      {
        "type": "list",
        "text": "Especialista protagonista: Dra. Daniela Lorca, Estética Dental y Odontología Restauradora (Red Implantología)"
      },
      {
        "type": "list",
        "text": "Conducción: Dr. Max Lizana Rudolf (Red Implantología)"
      },
      {
        "type": "list",
        "text": "Fecha de publicación en YouTube: 4 de marzo de 2026"
      },
      {
        "type": "list",
        "text": "Duración: 26 minutos y 59 segundos"
      }
    ]
  },
  "dientes-fijos-en-48-horas": {
    "title": "¿Dientes fijos en 48 horas o puro marketing? El criterio clínico y digital detrás del protocolo según el Dr. Max Lizana Rudolf",
    "metaTitle": "¿Dientes fijos en 48 horas o marketing? Dr. Max Lizana | SQH",
    "description": "El Dr. Max Lizana Rudolf explica en SQH cuándo es posible tener dientes fijos en 48 horas con flujo digital, cuánto dura un full arch y qué revisar antes de operar.",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Recuperar dientes fijos en 48 horas no es puro marketing: es clínicamente posible mediante implantología digital de arco completo (full arch) cuando existe una adecuada planificación 3D y condiciones óseas favorables. Sin embargo, la tecnología por sí sola no reemplaza la habilidad quirúrgica ni el criterio clínico, y tampoco todos los casos califican para carga rápida si requieren injertos óseos previos."
      },
      {
        "type": "paragraph",
        "text": "Esta distinción entre promesa comercial y realidad biológica fue el centro del cuarto capítulo del podcast SQH (Sonrisas que Hablan), titulado ¿Dientes fijos en 48 horas o puro marketing?. En una dinámica invertida, el protagonista entrevistado fue el director del área digital de Red Implantología, el Dr. Max Lizana Rudolf, quien respondió a las preguntas del personaje corporativo de la clínica, el Dr. Titán."
      },
      {
        "type": "heading",
        "text": "Implantología digital vs. analógica: qué cambió realmente y qué sigue dependiendo del cirujano"
      },
      {
        "type": "paragraph",
        "text": "Frente a la proliferación de anuncios en redes sociales, el Dr. Max Lizana Rudolf fue categórico: las herramientas digitales transformaron la precisión, la velocidad y la comodidad del paciente, pero el criterio clínico, la experiencia y la destreza quirúrgica siguen siendo insustituibles."
      },
      {
        "type": "paragraph",
        "text": "El salto de la implantología analógica a la digital se traduce en mejoras concretas:"
      },
      {
        "type": "list",
        "text": "Adiós a las masillas e impresiones incómodas: Los escáneres intraorales digitales eliminaron los moldes con silicona o alginato que generaban náuseas y pérdida de precisión al pasar por múltiples etapas manuales (yeso, pruebas metálicas)."
      },
      {
        "type": "list",
        "text": "Velocidad de captura clínica: Hoy es posible escanear un maxilar completo en menos de 1 minuto. En rehabilitaciones full arch sobre implantes mediante escaneo con iPad, un caso simple de 4 implantes toma cerca de 30 segundos, y uno de 6 implantes entre 1 minuto y 1 minuto 30 segundos (frente a los 20 a 30 minutos de boca abierta de los métodos antiguos)."
      },
      {
        "type": "list",
        "text": "Coronas digitales en dos sesiones: En rehabilitación unitaria sobre implantes, el flujo 100 % digital en zirconio permitió pasar de 4 sesiones con pruebas engorrosas a terminar la corona definitiva en 2 sesiones con ajustes oclusales mínimos."
      },
      {
        "type": "heading",
        "text": "Dientes fijos en 48 horas: cuándo es viable y qué pasa si falta hueso"
      },
      {
        "type": "paragraph",
        "text": "En pacientes que utilizan prótesis removibles o presentan una dentición terminal (piezas remanentes que deben extraerse), el método digital de boca completa (full arch) permite instalar implantes y entregar una rehabilitación fija en 48 horas —e incluso en 24 horas en casos seleccionados—, siempre que la evaluación del hueso en 3D lo permita."
      },
      {
        "type": "list",
        "text": "¿Existe límite de edad? No. El Dr. Max Lizana Rudolf señaló que han rehabilitado con éxito a pacientes de hasta 96 años, siendo el único requisito contar con un estado de salud general óptimo (con pase médico si corresponde) para una cirugía menor mínimamente invasiva, ejecutada en equipo con el Dr. Tomás Cruzat."
      },
      {
        "type": "list",
        "text": "¿Qué ocurre si me dijeron que no tengo hueso? La falta de hueso no descarta la recuperación de dientes fijos, sino que modifica los tiempos. Mediante técnicas avanzadas de injertos óseos, es posible reconstruir el soporte necesario; el proceso tomará algunos meses más antes de la rehabilitación definitiva, pero el paciente recupera sus dientes fijos igualmente."
      },
      {
        "type": "heading",
        "text": "¿Un tratamiento full arch dura \"para toda la vida\"? La verdad sobre materiales y longevidad"
      },
      {
        "type": "paragraph",
        "text": "El Dr. Max Lizana Rudolf rechazó el uso comercial de promesas como \"garantía de por vida\" o \"dura para siempre\", sustituyéndolas por el concepto honesto de largo plazo:"
      },
      {
        "type": "table",
        "rows": [
          [
            "Generación / Material",
            "Durabilidad estimada",
            "Comportamiento clínico e higiénico"
          ],
          [
            "Técnicas antiguas (acrílico o metal-porcelana)",
            "Alrededor de 5 años antes de requerir recambio",
            "Mayor desgaste superficial y acumulación de placa/sarro"
          ],
          [
            "Arco de circonio con barra de titanio (actual)",
            "Más de 10 años (con planificación, laboratorio y mantención adecuados)",
            "Menor acumulación de sarro, menor mal olor, mejor estética e integración con la encía"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Además, un paciente que ya tiene implantes sanos en boca pero porta una prótesis removible antigua o de acrílico puede someterse a un escáner 3D para verificar el estado óseo y actualizar su estructura a una prótesis fija de circonio con barra de titanio."
      },
      {
        "type": "heading",
        "text": "Cómo elegir una clínica de implantes y no caer en publicidad engañosa"
      },
      {
        "type": "paragraph",
        "text": "Ante la saturación de ofertas en internet, el Dr. Max Lizana Rudolf entregó cuatro filtros concretos que todo paciente debería verificar antes de operarse:"
      },
      {
        "type": "list",
        "text": "1. Registro en la Superintendencia de Salud: Confirmar que el profesional cuenta con formación acreditada y posgrado real en implantología."
      },
      {
        "type": "list",
        "text": "2. Trayectoria, historial y testimonios reales: Revisar la web y redes sociales de la clínica para validar casos documentados y experiencia comprobable."
      },
      {
        "type": "list",
        "text": "3. Vanguardia tecnológica real: Verificar que integren planificación computarizada 3D y escáneres intraorales."
      },
      {
        "type": "list",
        "text": "4. Equipo estable y de cabecera (sin \"cirujanos viajeros\"): Desconfiar de modelos donde un profesional viaja esporádicamente a instalar implantes sin seguimiento. La implantología exige rehabilitadores e implantólogos de cabecera que aseguren mantenimiento a largo plazo."
      },
      {
        "type": "heading",
        "text": "Perfil del protagonista: Dr. Max Lizana Rudolf"
      },
      {
        "type": "paragraph",
        "text": "El Dr. Max Lizana Rudolf es cirujano dentista egresado de la Universidad de Valparaíso, especialista en Implantología Oral y Rehabilitación sobre Implantes, y Director del Área Digital de Red Implantología en Viña del Mar (donde lidera junto al Dr. Tomás Cruzat). Con más de 15 años de trayectoria en implantología, ha impulsado la transición hacia flujos digitales completos en rehabilitaciones unitarias y de arco completo (full arch), manteniendo seguimiento clínico de pacientes tratados hace 4 a 7 años bajo estándares equiparables a centros de Europa y Estados Unidos."
      },
      {
        "type": "heading",
        "text": "Preguntas frecuentes sobre dientes fijos en 48 horas"
      },
      {
        "type": "question",
        "text": "¿Es real recuperar los dientes fijos en 48 horas o es solo marketing?"
      },
      {
        "type": "paragraph",
        "text": "Es clínicamente real mediante protocolos digitales de arco completo (full arch) cuando la evaluación ósea 3D y la salud general del paciente son favorables. No es un eslogan mágico: requiere planificación computarizada, cirugía mínimamente invasiva y un laboratorio digital integrado."
      },
      {
        "type": "question",
        "text": "¿Cuál es la edad máxima para colocarse implantes dentales en 48 horas?"
      },
      {
        "type": "paragraph",
        "text": "No existe una edad límite cronológica. Según el Dr. Max Lizana Rudolf, en Red Implantología han rehabilitado pacientes de hasta 96 años con dientes fijos en 48 horas; lo determinante es tener un estado de salud compatible con cirugía menor y pase médico cuando se requiera."
      },
      {
        "type": "question",
        "text": "¿Cuánto dura una prótesis fija full arch sobre implantes?"
      },
      {
        "type": "paragraph",
        "text": "Mientras las prótesis antiguas de acrílico requerían recambio cerca de los 5 años, los arcos actuales de circonio con barra de titanio —bien planificados y con mantención periódica— superan los 10 años de duración, conservando la base biológica del implante."
      },
      {
        "type": "question",
        "text": "¿Qué pasa si me dijeron que no tengo hueso para implantes?"
      },
      {
        "type": "paragraph",
        "text": "La falta de hueso no impide recuperar los dientes fijos, pero sí puede impedir la carga inmediata en 48 horas. En esos casos se aplican técnicas de injertos óseos previas, lo que extiende el proceso algunos meses para luego rehabilitar con seguridad."
      },
      {
        "type": "question",
        "text": "¿Qué debe revisar un paciente antes de elegir una clínica de implantes dentales?"
      },
      {
        "type": "paragraph",
        "text": "Debe verificar que el especialista esté inscrito con su especialidad en la Superintendencia de Salud, revisar testimonios reales de pacientes, confirmar el uso de tecnología digital 3D y asegurarse de que la clínica tenga un equipo estable de cabecera para el mantenimiento a largo plazo."
      },
      {
        "type": "heading",
        "text": "Ficha técnica del episodio fuente"
      },
      {
        "type": "list",
        "text": "Programa: Podcast SQH — Sonrisas que Hablan (sqh.cl)"
      },
      {
        "type": "list",
        "text": "Capítulo: Temporada 1, Capítulo 4 — ¿Dientes fijos en 48 horas o puro marketing?"
      },
      {
        "type": "list",
        "text": "Especialista protagonista: Dr. Max Lizana Rudolf, Implantología y Área Digital (Red Implantología)"
      },
      {
        "type": "list",
        "text": "Fecha de publicación en YouTube: 3 de mayo de 2026"
      },
      {
        "type": "list",
        "text": "Duración: 15 minutos y 57 segundos"
      }
    ]
  },
  "kinesiologia-y-odontologia": {
    "title": "Kinesiología & Odontología: el vínculo clínico entre la mandíbula, el cuello y el dolor orofacial con el Klgo. Mario Páez García",
    "metaTitle": "Kinesiología y Odontología: ATM y dolor | Klgo. Mario Páez",
    "description": "El kinesiólogo Mario Páez García y el Dr. Max Lizana explican en SQH la relación entre cuello, postura, ATM y bruxismo, y cuándo derivar entre kinesiología y dentista.",
    "blocks": [
      {
        "type": "paragraph",
        "text": "La articulación temporomandibular (ATM), la columna cervical y la cintura escapular forman una unidad funcional interconectada, por lo que un dolor mandibular puede tener origen cervical y viceversa. El abordaje transdisciplinario entre odontología y kinesiología permite pesquisar factores como el estrés laboral, los trastornos temporomandibulares y las limitaciones de movilidad que impiden resolver el bruxismo o el dolor solo con un plano de relajación."
      },
      {
        "type": "paragraph",
        "text": "Esta mirada integral del paciente fue el eje del quinto capítulo del podcast SQH (Sonrisas que Hablan), conducido por el Dr. Max Lizana Rudolf en Red Implantología, junto al kinesiólogo especialista en sistema musculoesquelético y Magíster en Terapia Manual Mario Páez García (Kinesiología & Odontología)."
      },
      {
        "type": "heading",
        "text": "Ver a la persona como un todo: por qué dolor no siempre equivale a daño estructural"
      },
      {
        "type": "paragraph",
        "text": "Uno de los conceptos clínicos más relevantes que desarrolló el Klgo. Mario Páez García es la ruptura del modelo fragmentado tradicional —donde se trataba aisladamente \"un hombro\", \"un cuello\" o \"un tercer molar\"— para entender el dolor como una experiencia compleja del paciente, no siempre proporcional a un hallazgo en imágenes médicas (como una resonancia sin lesión visible que igualmente duele)."
      },
      {
        "type": "paragraph",
        "text": "En la práctica clínica cotidiana, esta desconexión se manifiesta en dos direcciones:"
      },
      {
        "type": "list",
        "text": "Dolor cervical vinculado a la ATM: Pacientes que consultan por dolor de cuello crónico y que, al ser entrevistados, llevan años sin acudir al dentista pese a presentar disfunción mandibular o bruxismo."
      },
      {
        "type": "list",
        "text": "Limitación funcional que afecta la salud bucal: El caso ilustrativo planteado por el Klgo. Mario Páez García: un paciente (como una persona mayor) con dolor severo de hombro que no logra elevar el brazo para cepillarse los dientes o usar hilo dental, deteriorando su higiene oral sin que el odontólogo lo pesquise si no pregunta por movilidad cervical o de extremidades."
      },
      {
        "type": "heading",
        "text": "¿Por qué a veces falla el plano de relajación en pacientes con bruxismo?"
      },
      {
        "type": "paragraph",
        "text": "El Dr. Max Lizana Rudolf planteó un escenario clínico frecuente: pacientes con bruxismo (apretamiento dental inconsciente, habitualmente asociado a estrés) que reciben un plano de estabilización o relajación, pero continúan con dolor, limitación para abrir la boca, chasquidos mandibulares o molestia al masticar."
      },
      {
        "type": "paragraph",
        "text": "Según explicó el Klgo. Mario Páez García, cuando el plano no resuelve por sí solo la sintomatología, es necesario ampliar la mirada clínica:"
      },
      {
        "type": "list",
        "text": "Factores contextuales y estrés laboral: Si el desencadenante primario es una carga sostenida de estrés, el dispositivo oclusal no bastará sin estrategias de regulación del estrés y manejo musculoesquelético."
      },
      {
        "type": "list",
        "text": "Control y ajuste dinámico del plano: Tanto el odontólogo como el kinesiólogo coincidieron en cuestionar los planos planteados como \"irreversibles o permanentes sin control\", ya que tanto los dientes como el propio plano sufren desgaste y requieren seguimiento periódico."
      },
      {
        "type": "heading",
        "text": "El mito de la \"postura correcta\": el verdadero problema es el tiempo sostenido"
      },
      {
        "type": "paragraph",
        "text": "Al abordar la relación entre postura, uso de pantallas y sistema mandibular (como la anteposición de cabeza y cuello frente al computador, el teléfono o al conducir), el Klgo. Mario Páez García derribó una creencia extendida en redes sociales:"
      },
      {
        "type": "paragraph",
        "text": "No existe una postura universalmente \"correcta\" ni \"incorrecta\" porque cada cuerpo es distinto; el problema clínico no es la postura en sí, sino mantener una misma posición durante muchas horas seguidas."
      },
      {
        "type": "paragraph",
        "text": "Incluso forzar una espalda completamente erguida durante 8 horas sin pausa resulta perjudicial si el cuerpo no está adaptado a ella. La recomendación práctica basada en evidencia clínica actual es incorporar pausas saludables cada 1 hora a 1 hora y 30 minutos: levantarse del escritorio o detenerse en el trayecto, realizar estiramientos simples de brazos y movilidad cervical durante 3 a 5 minutos y retomar la actividad."
      },
      {
        "type": "heading",
        "text": "¿Cuándo ir al odontólogo y cuándo derivar al kinesiólogo maxilofacial?"
      },
      {
        "type": "paragraph",
        "text": "Para orientar tanto a pacientes como a profesionales sobre la derivación cruzada —especialmente considerando el auge de la kinesiología maxilofacial en los últimos 10 años—, el Klgo. Mario Páez García y el Dr. Max Lizana Rudolf definieron preguntas clave de pesquisa:"
      },
      {
        "type": "table",
        "rows": [
          [
            "Motivo principal de consulta",
            "Pregunta de pesquisa en entrevista clínica",
            "Acción / Derivación recomendada"
          ],
          [
            "Dolor o chasquido mandibular, bruxismo, traba al abrir o masticar",
            "¿Ha tenido también dolor o rigidez en el cuello o en los hombros?",
            "Evaluación odontológica (ATM / oclusión) + derivación a kinesiología maxilofacial o musculoesquelética si existe componente cervical"
          ],
          [
            "Dolor cervical crónico o limitación de hombro",
            "¿Aprieta los dientes de noche (bruxismo), le duele la mandíbula al comer o le cuesta cepillarse?",
            "Manejo kinésico + derivación oportuna a odontología para evaluación de ATM, bruxismo o higiene oral"
          ]
        ]
      },
      {
        "type": "heading",
        "text": "Perfil del protagonista: Klgo. Mario Páez García"
      },
      {
        "type": "paragraph",
        "text": "El Klgo. Mario Páez García es kinesiólogo especialista en sistema musculoesquelético y Magíster en Terapia Manual, con 14 años de experiencia profesional y 12 años de práctica independiente en su centro clínico en Viña del Mar, donde atiende disfunciones desde tobillo y rodilla hasta columna, hombro, cuello y cabeza."
      },
      {
        "type": "paragraph",
        "text": "En el ámbito académico, ha ejercido docencia de pregrado en la Universidad de Playa Ancha, la Universidad Viña del Mar y proyecta colaboración en la Universidad Andrés Bello. Además, junto a dos colegas lidera la empresa de formación y capacitación continua KINME (kitme.cl), impartiendo cursos de ecografía clínica y punción seca en diversas ciudades de Chile (Viña del Mar, Temuco, Coquimbo, Talca y Santiago), conduce el podcast Lo que callamos los kines y divulga contenido clínico en Instagram a través de @kine.mariopaez."
      },
      {
        "type": "heading",
        "text": "Preguntas frecuentes sobre kinesiología y odontología"
      },
      {
        "type": "question",
        "text": "¿Qué relación tiene la kinesiología con la odontología?"
      },
      {
        "type": "paragraph",
        "text": "La mandíbula (articulación temporomandibular) está conectada biomecánica y neurológicamente con la columna cervical y los músculos del cuello y hombros. El trabajo conjunto entre odontólogos y kinesiólogos permite tratar de forma integral el bruxismo, el dolor orofacial y los dolores cervicales asociados."
      },
      {
        "type": "question",
        "text": "¿Por qué me sigue doliendo la mandíbula si uso plano de relajación?"
      },
      {
        "type": "paragraph",
        "text": "El plano de relajación protege los dientes, pero si el dolor persiste o hay dificultad para abrir la boca o masticar, puede existir un componente muscular, cervical o de estrés sostenido que requiere evaluación kinésica y manejo multidisciplinario."
      },
      {
        "type": "question",
        "text": "¿Qué es mejor para la postura: sentarse derecho todo el día o hacer pausas?"
      },
      {
        "type": "paragraph",
        "text": "Hacer pausas activas. Según el Klgo. Mario Páez García, mantener cualquier postura fija por muchas horas —incluso estar completamente derecho— genera sobrecarga. Se recomienda hacer pausas de 3 a 5 minutos con estiramientos suaves cada 60 a 90 minutos."
      },
      {
        "type": "question",
        "text": "¿Cómo sé si debo consultar primero al dentista o al kinesiólogo por dolor de mandíbula y cuello?"
      },
      {
        "type": "paragraph",
        "text": "Si el dolor mandibular o el bruxismo se acompaña de dolor o rigidez cervical, ambos especialistas deben intervenir de manera coordinada: el odontólogo evalúa la oclusión y la ATM, mientras el kinesiólogo aborda la musculatura cervical, mandibular y la movilidad."
      },
      {
        "type": "heading",
        "text": "Ficha técnica del episodio fuente"
      },
      {
        "type": "list",
        "text": "Programa: Podcast SQH — Sonrisas que Hablan (sqh.cl)"
      },
      {
        "type": "list",
        "text": "Capítulo: Temporada 1, Capítulo 5 — Kinesiología & Odontología"
      },
      {
        "type": "list",
        "text": "Especialista protagonista: Klgo. Mario Páez García, Kinesiólogo Musculoesquelético y Magíster en Terapia Manual (@kine.mariopaez)"
      },
      {
        "type": "list",
        "text": "Conducción: Dr. Max Lizana Rudolf (Red Implantología)"
      },
      {
        "type": "list",
        "text": "Fecha de publicación en YouTube: 12 de julio de 2026"
      },
      {
        "type": "list",
        "text": "Duración: 19 minutos y 8 segundos"
      }
    ]
  },
  "ortodoncia-en-adultos": {
    "title": "Ortodoncia en adultos: mitos, alineadores digitales y coordinación con implantes según el Dr. Julián Lillo Daza",
    "metaTitle": "Ortodoncia en adultos: mitos y verdades | Dr. Julián Lillo",
    "description": "El Dr. Julián Lillo Daza (Ortodoncia Viña) y el Dr. Max Lizana explican en SQH la ortodoncia en adultos, alineadores invisibles, cirugía ortognática e implantes.",
    "blocks": [
      {
        "type": "paragraph",
        "text": "No existe límite de edad para realizarse un tratamiento de ortodoncia en adultos, siempre que el paciente cuente con encías y hueso periodontal sanos. Gracias a los arcos de titanio y a los alineadores invisibles planificados mediante escáner 3D, hoy es posible corregir maloclusiones, coordinar espacios previos a implantes dentales y resolver casos complejos en un promedio de 18 meses."
      },
      {
        "type": "paragraph",
        "text": "Este cambio de paradigma fue el tema central del sexto capítulo del podcast SQH (Sonrisas que Hablan), titulado Ortodoncia en Adultos, donde el Dr. Max Lizana Rudolf conversó con su colega y vecino clínico de edificio, el especialista en ortodoncia Dr. Julián Lillo Daza, director de Ortodoncia Viña."
      },
      {
        "type": "heading",
        "text": "Ortodoncia tradicional vs. alineadores invisibles: ¿cuál elegir en adultos?"
      },
      {
        "type": "paragraph",
        "text": "Actualmente, cerca del 40 % de los pacientes en la consulta del Dr. Julián Lillo Daza utiliza alineadores invisibles —especialmente adultos que ya tuvieron ortodoncia en el pasado, sufrieron recidivas y buscan una alternativa estética rápida—. Sin embargo, el especialista subrayó que la elección se decide caso a caso comparando las ventajas de ambos sistemas:"
      },
      {
        "type": "table",
        "rows": [
          [
            "Sistema de ortodoncia",
            "Características y ventajas clínicas",
            "Condicionante principal"
          ],
          [
            "Ortodoncia tradicional (brackets metálicos, zafiro o resina)",
            "Mayor previsibilidad y eficiencia en casos complejos; la biomecánica no depende de que el paciente se ponga o saque el aparato",
            "Mayor visibilidad estética (aunque existen opciones transparentes de zafiro) y requiere higiene meticulosa"
          ],
          [
            "Alineadores invisibles (férulas transparentes 3D)",
            "Alta estética, comodidad al comer (se retiran) y ausencia de roces; permite simular el resultado final en 3D con un 87 % a 90 % de certeza antes de fabricar las placas",
            "Exige un compromiso estricto del paciente para usarlos entre 20 y 22 horas diarias"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Para el flujo digital con alineadores, el equipo de Ortodoncia Viña utiliza escáner intraoral 3D (evitando moldes de alginato) bajo el Método RÍE (Rapidez, Invisible y Eficiente), lo que permite al paciente visualizar cómo quedará su sonrisa antes de iniciar el tratamiento."
      },
      {
        "type": "heading",
        "text": "Por qué la ortodoncia y los implantes dentales deben planificarse juntos"
      },
      {
        "type": "paragraph",
        "text": "Uno de los puntos técnicos más valiosos del episodio fue la sinergia clínica entre Ortodoncia Viña y Red Implantología. El Dr. Julián Lillo Daza y el Dr. Max Lizana Rudolf explicaron por qué la evaluación conjunta es decisiva:"
      },
      {
        "type": "list",
        "text": "El implante es un pilar fijo que no se mueve: Si un paciente se coloca un implante antes de evaluar su mordida, el ortodoncista deberá adaptar todo el movimiento dental futuro a ese implante inamovible."
      },
      {
        "type": "list",
        "text": "Corrección de dientes vecinos e intrusión de extruidos: Cuando falta un diente hace años, los dientes adyacentes suelen inclinarse hacia el espacio vacío y el diente antagonista (superior o inferior) tiende a extruirse o \"alargarse\". Mediante movimientos ortodóncicos simples —que en muchos casos toman alrededor de 6 meses—, es posible paralelizar las raíces, intruir la pieza extruida y devolver el espacio ideal para que la futura corona sobre implante tenga tamaño y función correctos."
      },
      {
        "type": "list",
        "text": "La oclusión como engranaje: Tal como una cadena de bicicleta, la mordida debe engranar con precisión para evitar sobrecargas que comprometan incluso los mejores implantes a futuro."
      },
      {
        "type": "heading",
        "text": "Ortodoncia quirúrgica y cirugía virtual 3D para casos esqueletales complejos"
      },
      {
        "type": "paragraph",
        "text": "Cuando el problema no radica solo en la posición de los dientes, sino en el tamaño o posición de los huesos maxilares (como prognatismo mandibular, mentón retruido o escalones severos entre arcadas), alinear los dientes por sí solo no basta. En esos casos interviene la ortodoncia quirúrgica coordinada con cirugía maxilofacial (cirugía ortognática)."
      },
      {
        "type": "paragraph",
        "text": "El Dr. Julián Lillo Daza destacó que su equipo maneja una casuística superior a 80 pacientes operados al año, apoyados en cirugía virtual 3D: mediante escáneres dentales y óseos se simula la cirugía y el perfil facial antes de entrar a pabellón, reduciendo el tiempo quirúrgico y optimizando la recuperación."
      },
      {
        "type": "heading",
        "text": "Mitos y verdades sobre la ortodoncia en adultos"
      },
      {
        "type": "paragraph",
        "text": "En el bloque de cierre, el Dr. Julián Lillo Daza respondió de forma directa a siete afirmaciones habituales:"
      },
      {
        "type": "list",
        "text": "1. \"La ortodoncia es solo para adolescentes\": Mito total. No hay límite de edad mientras exista salud periodontal."
      },
      {
        "type": "list",
        "text": "2. \"Si ya tengo implantes, no puedo hacerme ortodoncia\": Falso. Sí se puede, aunque requiere planificación especializada considerando que el implante no se desplaza."
      },
      {
        "type": "list",
        "text": "3. \"La ortodoncia es solo estética\": Mito. Es ante todo una especialidad funcional: optimiza la mordida, la articulación temporomandibular, la musculatura, la posición lingual y el habla."
      },
      {
        "type": "list",
        "text": "4. \"La ortodoncia alarga innecesariamente los tratamientos\": Subjetivo / Mito. En su clínica la duración promedio ronda los 18 meses (frente a los 2 años y medio habituales de antaño); los casos quirúrgicos complejos pueden extenderse a 36 meses, y los alargamientos innecesarios suelen deberse a inasistencia a los controles mensuales (que desactivan los brackets)."
      },
      {
        "type": "list",
        "text": "5. \"Mover dientes en adultos es peligroso o daña raíces cortas\": Mito en pacientes controlados. Con periodonto sano (sin enfermedad periodontal activa), los alambres de titanio y alineadores modernos aplican fuerzas lentas y progresivas amigables con el hueso y las raíces."
      },
      {
        "type": "list",
        "text": "6. \"Ortodoncia e implantes deben planificarse juntos\": Verdad absoluta."
      },
      {
        "type": "heading",
        "text": "Perfil del protagonista: Dr. Julián Lillo Daza"
      },
      {
        "type": "paragraph",
        "text": "El Dr. Julián Lillo Daza es cirujano dentista egresado de la Universidad de Valparaíso, especialista en Ortodoncia y subespecializado en Ortodoncia Quirúrgica. Dirige el centro Ortodoncia Viña, ubicado en Avenida Libertad 269, Oficina 307, Viña del Mar, en el mismo piso que Red Implantología, lo que permite interconsultas inmediatas entre ortodoncia, implantología y cirugía maxilofacial. Su clínica atiende de lunes a sábado."
      },
      {
        "type": "heading",
        "text": "Preguntas frecuentes sobre ortodoncia en adultos"
      },
      {
        "type": "question",
        "text": "¿Hasta qué edad se puede usar frenillos o alineadores invisibles?"
      },
      {
        "type": "paragraph",
        "text": "No existe una edad límite para iniciar un tratamiento de ortodoncia. Cualquier adulto puede alinear sus dientes y corregir su mordida siempre que cuente con encías y hueso alveolar sanos, sin enfermedad periodontal activa."
      },
      {
        "type": "question",
        "text": "¿Cuánto dura en promedio un tratamiento de ortodoncia en adultos?"
      },
      {
        "type": "paragraph",
        "text": "Según la estadística clínica del Dr. Julián Lillo Daza en Ortodoncia Viña, los tratamientos duran en promedio 18 meses. Movimientos previos para abrir espacio a un implante pueden tomar alrededor de 6 meses, mientras que casos quirúrgicos complejos pueden extenderse hasta 36 meses."
      },
      {
        "type": "question",
        "text": "¿Qué se hace primero: ortodoncia o implantes dentales?"
      },
      {
        "type": "paragraph",
        "text": "Idealmente se realiza una evaluación conjunta antes de instalar el implante. Como el implante dental es fijo y no puede moverse con brackets ni alineadores, suele convenir corregir primero la mordida y generar el espacio adecuado mediante ortodoncia."
      },
      {
        "type": "question",
        "text": "¿Puedo hacerme ortodoncia si me dijeron que tengo raíces cortas?"
      },
      {
        "type": "paragraph",
        "text": "En pacientes con encías sanas y parámetros controlados, las tecnologías actuales —como los alineadores digitales y los arcos de titanio— permiten aplicar fuerzas suaves y progresivas que cuidan el hueso y minimizan riesgos sobre raíces cortas, previo diagnóstico especialista."
      },
      {
        "type": "question",
        "text": "¿Qué diferencia hay entre brackets tradicionales y alineadores invisibles?"
      },
      {
        "type": "paragraph",
        "text": "Los brackets van cementados al diente y ofrecen control continuo sin depender de que el paciente se los coloque, resultando muy eficientes en casos complejos. Los alineadores invisibles son férulas removibles muy estéticas que permiten simular el resultado en 3D, pero requieren usarse de 20 a 22 horas al día."
      },
      {
        "type": "heading",
        "text": "Ficha técnica del episodio fuente"
      },
      {
        "type": "list",
        "text": "Programa: Podcast SQH — Sonrisas que Hablan (sqh.cl)"
      },
      {
        "type": "list",
        "text": "Capítulo: Temporada 1, Capítulo 6 — Ortodoncia en Adultos"
      },
      {
        "type": "list",
        "text": "Especialista protagonista: Dr. Julián Lillo Daza, Especialista en Ortodoncia y Ortodoncia Quirúrgica (Ortodoncia Viña)"
      },
      {
        "type": "list",
        "text": "Conducción: Dr. Max Lizana Rudolf (Red Implantología)"
      },
      {
        "type": "list",
        "text": "Fecha de publicación en YouTube: 20 de febrero de 2026"
      },
      {
        "type": "list",
        "text": "Duración: 18 minutos y 27 segundos"
      }
    ]
  }
};
