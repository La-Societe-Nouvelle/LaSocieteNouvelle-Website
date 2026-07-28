import { NextResponse } from 'next/server';
import { isAllowedOrigin, forbiddenResponse } from '../../../../lib/utils/apiProxy';

export async function GET(request, { params }) {
    if (!isAllowedOrigin(request)) {
        return forbiddenResponse();
    }

    const { dataset } = await params;
    const { searchParams } = new URL(request.url);

    const fetchPage = (page) => {
        const pageParams = new URLSearchParams(searchParams);
        pageParams.set('page', page);
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}/v2/macrodata/${dataset}?${pageParams}`, {
            headers: {
                'Authorization': `Bearer ${process.env.SINESE_API_TOKEN}`,
            },
            next: { revalidate: 600 },
        }).then((res) => res.json().then((body) => ({ res, body })));
    };

    try {
        const { res, body } = await fetchPage(1);
        if (!res.ok) {
            return NextResponse.json(body, { status: res.status });
        }

        const { totalPages } = body.meta?.pagination ?? {};
        if (!totalPages || totalPages <= 1) {
            return NextResponse.json(body);
        }

        const remainingPages = await Promise.all(
            Array.from({ length: totalPages - 1 }, (_, i) => fetchPage(i + 2))
        );
        const allData = [body, ...remainingPages.map((p) => p.body)].flatMap((b) => b.data ?? []);

        return NextResponse.json({ ...body, data: allData });
    } catch (error) {
        return NextResponse.json(
            { error: 'Erreur lors de la récupération des données' },
            { status: 500 }
        );
    }
}
