import Image from "next/image";
import Link from "next/link";

export default function FeatureCard({ title, text, img, btn }) {
  return (
    <div className="text-center border border-2 p-4 d-flex flex-column justify-content-between bg-white h-100">
      <h3>{title}</h3>
      <p>{text}</p>
      {img && (
        <Image
          src={img}
          alt={title}
          width={250}
          height={150}
          style={{ margin: "auto", height: "auto", width: "250px" }}
        />
      )}
      {btn && (
        <Link
          href={btn.href}
          className="btn btn-outline-primary rounded-0 mt-3"
        >
          {btn.label}
        </Link>
      )}
    </div>
  );
}
