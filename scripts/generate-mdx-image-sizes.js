// Régénère lib/mdxImageSizes.json à partir des images référencées dans les .mdx
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const MANIFEST_PATH = path.join(ROOT, "lib", "mdxImageSizes.json");
const IMG_REGEX = /!\[[^\]]*\]\((\/[^)]+\.(?:png|jpe?g))\)/g;

function pngSize(buf) {
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function jpegSize(buf) {
  let offset = 2;
  while (offset < buf.length) {
    if (buf[offset] !== 0xff) {
      offset++;
      continue;
    }
    const marker = buf[offset + 1];
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      offset += 2;
      continue;
    }
    const len = buf.readUInt16BE(offset + 2);
    if (
      (marker >= 0xc0 && marker <= 0xc3) ||
      (marker >= 0xc5 && marker <= 0xc7) ||
      (marker >= 0xc9 && marker <= 0xcb) ||
      (marker >= 0xcd && marker <= 0xcf)
    ) {
      return { width: buf.readUInt16BE(offset + 7), height: buf.readUInt16BE(offset + 5) };
    }
    offset += 2 + len;
  }
  return null;
}

function readSize(publicPath) {
  const full = path.join(PUBLIC_DIR, publicPath);
  if (!fs.existsSync(full)) return null;
  const buf = fs.readFileSync(full);
  const ext = path.extname(full).toLowerCase();
  if (ext === ".png") return pngSize(buf);
  if (ext === ".jpg" || ext === ".jpeg") return jpegSize(buf);
  return null;
}

function findMdxFiles(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".next") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) findMdxFiles(full, acc);
    else if (entry.name.endsWith(".mdx")) acc.push(full);
  }
  return acc;
}

function main() {
  const mdxFiles = findMdxFiles(path.join(ROOT, "app"));
  const referenced = new Set();

  for (const file of mdxFiles) {
    const text = fs.readFileSync(file, "utf8");
    for (const match of text.matchAll(IMG_REGEX)) {
      referenced.add(match[1]);
    }
  }

  const manifest = {};
  const missing = [];
  for (const publicPath of referenced) {
    const size = readSize(publicPath);
    if (size) manifest[publicPath] = size;
    else missing.push(publicPath);
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");

  console.log(`${Object.keys(manifest).length} image(s) référencée(s) dans ${mdxFiles.length} fichier(s) .mdx -> lib/mdxImageSizes.json`);
  if (missing.length) {
    console.warn("Non résolues (fichier introuvable ou format non supporté) :");
    missing.forEach((m) => console.warn(`  - ${m}`));
  }
}

main();
