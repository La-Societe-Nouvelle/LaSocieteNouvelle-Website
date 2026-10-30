// Régénère lib/docsPages.json : pour chaque page de app/docs,
// la date de son dernier commit (« Mis à jour le »)
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const DOCS_DIR = path.join(ROOT, "app", "docs");
const MANIFEST_PATH = path.join(ROOT, "lib", "docsPages.json");

function findPages(dir, pages = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) findPages(full, pages);
    else if (/^page\.(js|mdx)$/.test(entry.name)) pages.push(dir);
  }
  return pages;
}

// Date du dernier commit touchant ces fichiers (AAAA-MM-JJ), ou null hors historique git
function lastCommitDate(files) {
  try {
    const date = execFileSync("git", ["log", "-1", "--format=%cs", "--", ...files], { cwd: ROOT, encoding: "utf8" }).trim();
    return date || null;
  } catch {
    return null;
  }
}

const pages = findPages(DOCS_DIR).map((dir) => {
  const relDir = path.relative(ROOT, dir).split(path.sep).join("/");
  const route = "/" + relDir.replace(/^app\//, "");
  // Segments dynamiques ([key]) : n'importe quel segment
  const pattern = "^" + route.replace(/\[[^\]]+\]/g, "[^/]+") + "$";
  // Fichiers de la page uniquement (le dossier contient aussi les sous-pages)
  const files = fs.readdirSync(dir).filter((f) => fs.statSync(path.join(dir, f)).isFile()).map((f) => `${relDir}/${f}`);
  return { route, pattern, updated: lastCommitDate(files) };
});

// Pages statiques avant les pages dynamiques
pages.sort((a, b) => a.route.includes("[") - b.route.includes("["));

fs.writeFileSync(MANIFEST_PATH, JSON.stringify(pages, null, 2) + "\n");
console.log(`docsPages.json : ${pages.length} pages`);
