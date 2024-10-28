import { NextResponse } from 'next/server';
import { data } from '../../core/data';

export async function GET() {
  return NextResponse.json(data);
}
