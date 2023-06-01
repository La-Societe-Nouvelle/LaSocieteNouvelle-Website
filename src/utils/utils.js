export function cutString(str, nbChar) {
  if (str.length <= nbChar) return str;
  return str.substring(0, nbChar) + "...";
}

// FLAG

export const getFlagLabel = (flag) => {
  const flagLabels = {
    p: "Valeur publiée",
    e: "Valeur estimée",
    r: "Valeur issue d'un reporting",
    d: "Valeur par défaut",
  };

  return flagLabels[flag] || "Valeur par défaut";
};

