"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { lightenColor } from "@/lib/utils/utils";

/**
 * Carte d'affichage d'un indicateur de l'Empreinte Sociétale
 * @param {Object} props
 * @param {string} props.indic - Code de l'indicateur (ex: "eco", "ghg")
 * @param {Object} props.indicData - Données de l'indicateur depuis metaData
 */
const IndicCard = React.memo(({ indic, indicData }) => {
  // Mémoïser le calcul de couleur pour optimiser les performances
  const lightenedColor = useMemo(
    () => lightenColor(indicData.primaryColor, 0.7),
    [indicData.primaryColor]
  );

  return (
    <div className="indic-card">
      <div
        className="indic-visual-wrapper"
        style={{ backgroundColor: lightenedColor }}
      >
        {indicData.section && (
          <span className="indic-section-badge">
            {indicData.section}
          </span>
        )}
        <Image
          src={`/ESE/gen2/illustration-g2-${indic}.png`}
          alt={`Pictogramme ${indic}`}
          className="indic-visual"
          width={80}
          height={80}
          loading="lazy"
        />
      </div>

      <div className="indic-body">
        {/* Objectifs de Développement Durable (ODD) */}
        <div className="indic-odds">
          {indicData.odds.map((odd) => (
            <Image
              key={odd}
              src={`/images/odd/F-WEB-Goal-${odd}.png`}
              alt={`ODD ${odd}`}
              width={28}
              height={28}
              loading="lazy"
            />
          ))}
        </div>

        {/* Badges d'information */}
        <div className="indic-badges">
          <span className="badge badge-valid">Valide</span>
          {indicData.esrs && (
            <span className="badge badge-esrs">{indicData.esrs}</span>
          )}
          {indicData.hasTarget && (
            <span className="badge badge-target">Objectif sectoriel</span>
          )}
        </div>

        {/* Titre et description */}
        <h3 className="indic-title">
          <Link href={`/indicateurs/${indic}`} title={indicData.libelle}>
            {indicData.libelle}
          </Link>
        </h3>

        <p className="indic-description">
          {indicData.description}
        </p>

        {/* Footer avec lien */}
        <div className="indic-footer">
          <Link
            href={`/indicateurs/${indic}`}
            className="indic-btn"
            title="Voir les détails"
          >
            Détails
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
});

IndicCard.displayName = "IndicCard";

export default IndicCard;
