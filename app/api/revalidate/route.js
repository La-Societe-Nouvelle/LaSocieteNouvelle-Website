import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const secret = request.headers.get('x-revalidate-secret');

    if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
        return NextResponse.json(
            { error: 'Secret invalide' },
            { status: 401 }
        );
    }

    revalidateTag('posts');

    return NextResponse.json({ revalidated: true, now: Date.now() });
}
