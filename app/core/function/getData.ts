import { Data } from '../types/data';

export async function getData(): Promise<Data> {
  const res = await fetch(process.env.DATA_JSON_URL as string);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
