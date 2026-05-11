/**
 * Extracts the subdomain from a hostname.
 * "urbano.konnect-360.com"   → "urbano"
 * "some-tenant.example.com"  → "some"  (splits on "-", takes first segment)
 * "www.konnect-360.com"      → "www"
 * "localhost"                → "localhost"
 */
export function getParseDomain(value?: string): string | undefined {
  const hostname =
    value ?? (typeof window !== "undefined" ? window.location.hostname : null)
  if (!hostname) return undefined

  let [sub] = hostname.split(".")
  if (sub.includes("-")) sub = sub.split("-")[0]
  if (!sub) return undefined

  return sub
}
