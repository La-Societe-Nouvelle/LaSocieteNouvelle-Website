import mdxImageSizes from "../mdxImageSizes.json";

// Lookup dans le manifeste généré par scripts/generate-mdx-image-sizes.js
export function getLocalImageSize(publicPath) {
  return mdxImageSizes[publicPath] || null;
}
