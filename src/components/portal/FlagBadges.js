import React from "react";
import { Badge } from "react-bootstrap";
import { getFlagLabel } from "../../utils/utils";

const flagConfig = {
  p: {
    bg: "secondary",
    title: "Valeur publiée par l'entreprise",
  },
  d: {
    bg: "primary",
    title: "Valeur proposée à partir de données statistiques",
  },
  e: {
    bg: "badge-light-secondary",
    title: "Valeur estimée à partir de données publiées par l'entreprise",
  },
  r: {
    bg: "badge-light-secondary",
    title: "Valeur issue d'un reporting",
  },
};

const FlagBadge = ({ flag }) => {
  const flagProps = flagConfig[flag];

  if (!flagProps) {
    return null;
  }

  return (
    <Badge pill bg={flagProps.bg} title={flagProps.title}>
      {getFlagLabel(flag)}
    </Badge>
  );
};

export default FlagBadge;
