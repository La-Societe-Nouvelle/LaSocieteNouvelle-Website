// Autorise uniquement les requêtes provenant du propre domaine du site,
// pour éviter que ces routes ne servent de proxy ouvert vers l'API sinese
// (scraping du token d'accès par des tiers).
const ALLOWED_HOSTS = [
  'lasocietenouvelle.org',
  'www.lasocietenouvelle.org',
  'localhost',
];

export function isAllowedOrigin(request) {
  const origin = request.headers.get('origin') || request.headers.get('referer');

  // Appelées uniquement depuis le navigateur : pas de header = requête refusée.
  if (!origin) {
    return false;
  }

  try {
    const { hostname } = new URL(origin);
    return ALLOWED_HOSTS.includes(hostname);
  } catch {
    return false;
  }
}

export function forbiddenResponse() {
  return new Response(
    JSON.stringify({ error: 'Origine non autorisée' }),
    { status: 403, headers: { 'Content-Type': 'application/json' } }
  );
}
