/**
 * Lightens a hex color by a specified factor
 * @param {string} colorHex - Hex color code (e.g., "#191558")
 * @param {number} lumFactor - Lightening factor (0-1)
 * @returns {string} Lightened hex color
 */
export const lightenColor = (colorHex, lumFactor) => {
  let r = parseInt(colorHex.substr(1, 2), 16);
  let g = parseInt(colorHex.substr(3, 2), 16);
  let b = parseInt(colorHex.substr(5, 2), 16);
  let total = r + g + b;

  let lighten_r = parseInt(r + ((255 - r) / (765 - total)) * (lumFactor * (765 - total)));
  let lighten_g = parseInt(g + ((255 - g) / (765 - total)) * (lumFactor * (765 - total)));
  let lighten_b = parseInt(b + ((255 - b) / (765 - total)) * (lumFactor * (765 - total)));

  const lightenColor = "#" + lighten_r.toString(16).padStart(2, '0') + lighten_g.toString(16).padStart(2, '0') + lighten_b.toString(16).padStart(2, '0');
  return lightenColor;
};
