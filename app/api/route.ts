import { NextResponse } from 'next/server';

export async function GET() {
  // NOTE: disable and use object in ts file instead
  // const res = await fetch(process.env.DATA_JSON_URL as string);
  // if (!res.ok) {
  //   throw new Error('Failed to fetch data');
  // }

  return NextResponse.json({});
}
