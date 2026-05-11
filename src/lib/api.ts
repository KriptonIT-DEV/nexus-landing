const baseURL = import.meta.env.PUBLIC_API_BASE_URL ?? "http://localhost:8000"

export async function apiPost<T = unknown>(
  path: string,
  body: unknown,
): Promise<T> {
  const res = await fetch(`${baseURL}/api${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${await res.text()}`)
  }
  return res.json() as Promise<T>
}

export async function apiGet<T = unknown>(path: string): Promise<T> {
  const res = await fetch(`${baseURL}/api${path}`)
  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${await res.text()}`)
  }
  return res.json() as Promise<T>
}
