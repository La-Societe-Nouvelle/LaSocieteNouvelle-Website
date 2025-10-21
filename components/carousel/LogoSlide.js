import Image from "next/image";
import Link from "next/link";

export default function LogoSlide({ href, img, name, height }) {
  const content = (
    <div className="logo-card">
      <div className="section__logo-wrapper">
        <Image
          src={img}
          alt={`Logo ${name}`}
          width={height * 3}
          height={height}
          style={{ objectFit: "contain", height }}
        />
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={`Accéder au site ${name}`}
      >
        {content}
      </Link>
    );
  }

  return content;
}
