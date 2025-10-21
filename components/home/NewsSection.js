"use client";

import { Container } from "react-bootstrap";
import Link from "next/link";
import LatestPosts from "../posts/LatestPosts";

export default function NewsSection() {
  return (
    <section className="section">
      <Container>
        <div className="section-header text-center mb-4 mb-md-5">
          <h4 className="section__title section__title--center">Nos actualités</h4>
        </div>
        <LatestPosts />
          <Link href="/blog" className="btn btn-primary mt-4 mt-md-5">
            Voir tous les articles
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>
      </Container>
    </section>
  );
}
