// N'autorise que les requêtes same-origin, pour éviter que ces routes ne
// servent de proxy ouvert vers l'API sinese.
export function isAllowedOrigin(request) {
  const origin = request.headers.get('origin') || request.headers.get('referer');
  const host = request.headers.get('host');

  // Appelées uniquement depuis le navigateur : pas de header = requête refusée.
  if (!origin || !host) {
    return false;
  }

  try {
    return new URL(origin).host === host;
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
