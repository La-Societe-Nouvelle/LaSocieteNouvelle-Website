import { NextResponse } from 'next/server';
import { isAllowedOrigin, forbiddenResponse } from '../../../../lib/utils/apiProxy';

export async function GET(request, { params }) {
    if (!isAllowedOrigin(request)) {
        return forbiddenResponse();
    }

    const { dataset } = await params;
    const { search } = new URL(request.url);

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v2/macrodata/${dataset}${search}`, {
            headers: {
                'Authorization': `Bearer ${process.env.SINESE_API_TOKEN}`,
            },
            next: { revalidate: 600 },
        });

        const body = await res.json();
        return NextResponse.json(body, { status: res.status });
    } catch (error) {
        return NextResponse.json(
            { error: 'Erreur lors de la récupération des données' },
            { status: 500 }
        );
    }
}
