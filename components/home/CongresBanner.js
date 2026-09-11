"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Fermeture mémorisée pour la session en cours uniquement : le bandeau
// réapparaît à la prochaine ouverture du navigateur.
const DISMISS_KEY = "congres-oec-2026-banner-dismissed";

export default function CongresBanner() {
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === "1") {
        setDismissed(true);
      }
    } catch (e) {
      // sessionStorage indisponible : on affiche le bandeau normalement
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch (e) {
      // pas de persistance possible, le bandeau réapparaîtra au prochain chargement
    }
  };

  if (!mounted || dismissed) {
    return null;
  }

  return (
    <div className="congres-banner">
      <div className="congres-banner-inner">
        <div className="congres-banner-content">
          <img
            src="/images/congres-2026-batiment.png"
            alt=""
            aria-hidden="true"
            className="congres-banner-icon"
          />
          <span className="congres-banner-text">
            <span className="congres-banner-lead">
              La Société Nouvelle sera au Congrès de l'Ordre des Experts-Comptables.
            </span>
            <span className="congres-banner-coords">
              Rendez-vous <b>du 16 au 18 septembre, zone Orange, stand R17</b>.
            </span>
          </span>
          <Link
            href="/blog/81e-congres-ordre-experts-comptables-2026"
            className="congres-banner-link"
          >
            En savoir plus
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>
          <button
            type="button"
            className="congres-banner-close"
            onClick={handleDismiss}
            aria-label="Fermer le bandeau"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
