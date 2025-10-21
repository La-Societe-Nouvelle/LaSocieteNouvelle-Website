"use client";

export default function ImpactFactorCard({ factor }) {
  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  return (
    <div className="impact-factor-card">
      <div className="card-content">
        <div className="factor-info">
          <h3 className="factor-description">{factor.description}</h3>
          <div className="factor-meta">
            <div className="meta-item">
              <i className="bi bi-exclamation-circle me-2"></i>
              <span>Incertitude : <strong>{factor.uncertainty}%</strong></span>
            </div>
            <div className="meta-item">
              <i className="bi bi-calendar-event me-2"></i>
              <span>Dernière mise à jour : <strong>{formatDate(factor.lastupdate)}</strong></span>
            </div>
          </div>
        </div>
        <div className="factor-value">
          <div className="value-display">
            <span className="value-number">{factor.value}</span>
            <span className="value-unit">gCO₂e/€</span>
          </div>
        </div>
      </div>
    </div>
  );
}
