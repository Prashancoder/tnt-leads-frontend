export function getApiBaseUrl(): string {
  const envUrl = import.meta.env.VITE_API_URL as string | undefined;
  return envUrl && envUrl.length > 0 ? envUrl : 'http://localhost:5000';
}

export async function apiPost<TBody extends object, TResponse = unknown>(
  path: string,
  body: TBody
): Promise<TResponse> {
  const res = await fetch(`${getApiBaseUrl()}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `Request failed with ${res.status}`);
  }
  return res.json() as Promise<TResponse>;
}

export async function apiGet<TResponse = unknown>(path: string): Promise<TResponse> {
  const res = await fetch(`${getApiBaseUrl()}${path}`);
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `Request failed with ${res.status}`);
  }
  return res.json() as Promise<TResponse>;
}


