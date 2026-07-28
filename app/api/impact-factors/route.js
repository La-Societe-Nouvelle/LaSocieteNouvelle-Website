import { NextResponse } from 'next/server';
import { isAllowedOrigin, forbiddenResponse } from '../../../lib/utils/apiProxy';

export async function GET(request) {
    if (!isAllowedOrigin(request)) {
        return forbiddenResponse();
    }

    const { search } = new URL(request.url);

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v2/impact-factors${search}`, {
            headers: {
                'Authorization': `Bearer ${process.env.SINESE_API_TOKEN}`,
            },
            next: { revalidate: 600 },
        });

        const text = await res.text();
        let body;
        try {
            body = text ? JSON.parse(text) : null;
        } catch {
            body = null;
        }

        if (body === null) {
            return NextResponse.json(
                { error: 'Réponse invalide de l\'API des facteurs d\'impact' },
                { status: 502 }
            );
        }

        return NextResponse.json(body, { status: res.status });
    } catch (error) {
        return NextResponse.json(
            { error: 'Erreur lors de la récupération des facteurs d\'impact' },
            { status: 500 }
        );
    }
}
