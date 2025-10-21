export function cutString(str, nbChar) {
  if (str.length <= nbChar) return str;
  return str.substring(0, nbChar) + "...";
}



// COLOR UTILITIES

/**
 * Éclaircit une couleur hexadécimale
 * @param {string} colorHex - Couleur au format hexadécimal (ex: "#FA6804")
 * @param {number} lumFactor - Facteur d'éclaircissement (0-1)
 * @returns {string} Couleur éclaircie au format hexadécimal
 */
export const lightenColor = (colorHex, lumFactor) => {
  let r = parseInt(colorHex.substr(1, 2), 16);
  let g = parseInt(colorHex.substr(3, 2), 16);
  let b = parseInt(colorHex.substr(5, 2), 16);
  let total = r + g + b;

  let lighten_r = Math.min(255, parseInt(r + ((255 - r) / (765 - total)) * (lumFactor * (765 - total))));
  let lighten_g = Math.min(255, parseInt(g + ((255 - g) / (765 - total)) * (lumFactor * (765 - total))));
  let lighten_b = Math.min(255, parseInt(b + ((255 - b) / (765 - total)) * (lumFactor * (765 - total))));

  // Pad avec des zéros pour garantir 2 caractères hex
  const lightenedColor = "#" +
    lighten_r.toString(16).padStart(2, '0') +
    lighten_g.toString(16).padStart(2, '0') +
    lighten_b.toString(16).padStart(2, '0');

  return lightenedColor;
};
