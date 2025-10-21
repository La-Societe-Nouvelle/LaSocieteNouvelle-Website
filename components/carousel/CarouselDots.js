export default function CarouselDots({ scrollSnaps, selectedIndex, onSelect }) {
  return (
    <div className="embla__dots">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          className={`embla__dot ${index === selectedIndex ? "embla__dot--selected" : ""}`}
          type="button"
          onClick={() => onSelect(index)}
          aria-label={`Aller à la slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
