import { data } from '../core/data';

export async function GET() {
  // const res = await fetch(process.env.DATA_JSON_URL as string);
  // if (!res.ok) {
  //   throw new Error('Failed to fetch data');
  // }
  // return res.json();
  // NOTE: use in project json data instead of UTL
  return data;
}
