const BASE_URL = 'https://tnt-leads-backend.onrender.com'; // Render backend URL

export async function apiPost<TBody extends object, TResponse = unknown>(
  path: string,
  body: TBody
): Promise<TResponse> {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `Request failed with ${res.status}`);
  }

  return res.json() as Promise<TResponse>;
}

export async function apiGet<TResponse = unknown>(path: string): Promise<TResponse> {
  const res = await fetch(`${BASE_URL}${path}`);

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `Request failed with ${res.status}`);
  }

  return res.json() as Promise<TResponse>;
}
