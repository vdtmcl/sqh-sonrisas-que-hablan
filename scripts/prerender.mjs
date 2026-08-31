import { createServer } from "vite";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const routes = [
  "/",
  "/episodios/ortodoncia-en-adultos",
  "/episodios/kinesiologia-y-odontologia",
  "/episodios/blanqueamiento-y-salud-dental",
  "/episodios/regeneracion-osea-guiada",
  "/episodios/periodontitis-y-encias",
  "/episodios/dientes-fijos-en-48-horas",
  "/preview"
];

const vite = await createServer({
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true }
});

try {
  const { renderPath } = await vite.ssrLoadModule("/src/ssr-render.tsx");
  const template = await readFile(resolve("dist/index.html"), "utf8");

  for (const route of routes) {
    const rendered = renderPath(route);
    const page = template
      .replace(/<!-- SEO_HEAD_START -->[\s\S]*?<!-- SEO_HEAD_END -->/, rendered.seoMarkup)
      .replace('<div id="root"></div>', `<div id="root">${rendered.body}</div>`);
    const outputPath = route === "/" ? resolve("dist/index.html") : resolve("dist", route.slice(1), "index.html");

    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, page, "utf8");
  }
} finally {
  await vite.close();
}
