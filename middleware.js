import { NextResponse } from 'next/server';

export function middleware(request) {
  const hostname = request.headers.get('host');

  // Si on est sur databrowser.lasocietenouvelle.org
  if (hostname?.startsWith('databrowser.')) {
    const url = request.nextUrl.clone();

    // Si on est à la racine ou sans /databrowser dans le path
    if (!url.pathname.startsWith('/databrowser')) {
      // Redirige vers /databrowser + le path actuel
      url.pathname = `/databrowser${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
