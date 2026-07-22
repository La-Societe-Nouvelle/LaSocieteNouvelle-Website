import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v2/system/analytics`, {
            headers: {
                'X-Admin-Key': process.env.SINESE_ADMIN_API_KEY,
            },
            next: { revalidate: 600 },
        });

        if (!res.ok) {
            return NextResponse.json(
                { error: 'Erreur lors de la récupération des statistiques' },
                { status: res.status }
            );
        }

        const { data } = await res.json();
        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json(
            { error: 'Erreur lors de la récupération des statistiques' },
            { status: 500 }
        );
    }
}
