"use client";

export default function KeyFigureCardDatabrowser({ data }) {
  return (
    <div className="key-figure-card-databrowser">
      <div className="card-header">
        <div className="key-figure-icon">
          <i className={`bi bi-${data.icon}`}></i>
        </div>
        <div className="key-figure-period">{data.period}</div>
      </div>
      <div className="key-figure-value">
        <span className="value-number">{data.value}</span>
        <span className="value-unit">{data.unit}</span>
      </div>
      <div className="key-figure-title">{data.title}</div>
    </div>
  );
}
