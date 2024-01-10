import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(process.env.DATA_JSON_URL as string);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return NextResponse.json(res);
}
