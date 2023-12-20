import { Data } from '../../type';

export async function getData(): Promise<Data> {
  const res = await fetch(process.env.DATA_JSON_URL as string);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
