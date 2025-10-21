import fs from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const filePath = searchParams.get('filename');

        if (!filePath) {
            return NextResponse.json(
                { error: 'Filename parameter required' },
                { status: 400 }
            );
        }

        // filename only (for the download header)
        const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);

        // Check if file exists
        if (!fs.existsSync(filePath)) {
            return NextResponse.json(
                { error: 'File not found' },
                { status: 404 }
            );
        }

        // Read file
        const fileBuffer = fs.readFileSync(filePath);

        // Return file with download header
        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Disposition': `attachment; filename="${fileName}"`,
                'Content-Type': 'application/octet-stream',
            },
        });
    } catch (error) {
        console.error('Error downloading file:', error);
        return NextResponse.json(
            { error: 'Error downloading file' },
            { status: 500 }
        );
    }
}