import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: "https://accurate-lioness-33539.upstash.io",
  token: "AYMDASQgZGM1N2M0YTEtODNmMC00MDMwLTg5NDItNWFiNTg4Njg1MjM1NWQwMDc1MzMxNTAxNDMxNDliZWE4YjY5NThiODk5ZTA="
});
const get = async ({ params, clientAddress }) => {
  const { slug } = params ?? {};
  const ip = clientAddress;
  if (ip) {
    const buf = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(ip)
    );
    const hash = Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
    await redis.set(["deduplicate", hash, slug].join(":"), true, {
      nx: true,
      ex: 24 * 60 * 60
    });
  }
  const countView = await redis.incr(["pageviews", "all", slug].join(":"));
  return {
    body: JSON.stringify({
      views: countView
    })
  };
};

export { get };
