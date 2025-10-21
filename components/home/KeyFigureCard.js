"use client";

export default function KeyFigureCard({ data }) {
  return (
    <div className="key-figure-card">
      <div className="key-figure-icon">
        <i className={`bi bi-${data.icon}`}></i>
      </div>
      <div className="key-figure-period">{data.period}</div>
      <div className="key-figure-value">
        <span className="value-number">{data.value}</span>
        <span className="value-unit">{data.unit}</span>
      </div>
      <div className="key-figure-title">{data.title}</div>
    </div>
  );
}
