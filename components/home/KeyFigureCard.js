"use client";

import Link from "next/link";

export default function KeyFigureCard({ data }) {
  const cardContent = (
    <>
      <div className="key-figure-icon">
        <i className={`bi bi-${data.icon}`}></i>
      </div>
      <div className="key-figure-period">{data.period}</div>
      <div className="key-figure-value">
        <span className="value-number">{data.value}</span>
        <span className="value-unit">{data.unit}</span>
      </div>
      <div className="key-figure-title">{data.title}</div>
    </>
  );

  if (data.href) {
    return (
      <Link
        href={data.href}
        className="key-figure-card key-figure-card--link"
        title={data.tooltip || "Voir le détail"}
      >
        {cardContent}
      </Link>
    );
  }

  return <div className="key-figure-card">{cardContent}</div>;
}
