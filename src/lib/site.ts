export function getSiteUrl(): string {
  const envSiteUrl = process.env.SITE_URL;
  if (envSiteUrl && envSiteUrl.trim()) return envSiteUrl.replace(/\/+$/, "");

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl && vercelUrl.trim()) return `https://${vercelUrl}`.replace(/\/+$/, "");

  return "http://localhost:8080";
}
