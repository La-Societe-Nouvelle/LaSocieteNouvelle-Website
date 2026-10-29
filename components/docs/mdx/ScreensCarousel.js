'use client';

import { useEffect, useState } from 'react';

export default function ScreensCarousel({ slides }) {
  const [current, setCurrent] = useState(0);
  // Sans JavaScript, toutes les captures restent affichées les unes sous les autres
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  const last = slides.length - 1;
  const go = (index) => setCurrent((index + slides.length) % slides.length);
  const onKeyDown = (event) => {
    if (event.key === 'ArrowLeft') go(current - 1);
    if (event.key === 'ArrowRight') go(current + 1);
  };

  return (
    <figure
      className="docs-screens"
      role="group"
      aria-roledescription="carrousel"
      tabIndex={ready ? 0 : undefined}
      onKeyDown={onKeyDown}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="docs-screens-slide"
          hidden={ready && index !== current}
          aria-label={`${index + 1} sur ${slides.length}`}
        >
          {slide.image}
          {slide.caption && <figcaption>{slide.caption}</figcaption>}
        </div>
      ))}
      {ready && slides.length > 1 && (
        <div className="docs-screens-nav">
          <button type="button" onClick={() => go(current - 1)} aria-label="Capture précédente" disabled={current === 0}>
            <i className="bi bi-chevron-left" aria-hidden="true"></i>
          </button>
          <div className="docs-screens-dots">
            {slides.map((slide, index) => (
              <button
                key={index}
                type="button"
                className={index === current ? 'active' : undefined}
                onClick={() => go(index)}
                aria-label={`Capture ${index + 1}`}
                aria-current={index === current}
              />
            ))}
          </div>
          <button type="button" onClick={() => go(current + 1)} aria-label="Capture suivante" disabled={current === last}>
            <i className="bi bi-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      )}
    </figure>
  );
}
