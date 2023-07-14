import {Redis} from "@upstash/redis";

export const redis = new Redis({
  url: import.meta.env.UPSTASH_REDIS_REST_URL,
  token: import.meta.env.UPSTASH_REDIS_REST_TOKEN,
});

// TODO: Not work if using static files

export const getViews = async (slug: string) => {
  const fetchIp = await fetch("https://api.ipify.org?format=json");
  const {ip} = await fetchIp.json();

  if (ip) {
    // Hash the IP in order to not store it directly in your db.
    const buf = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(ip)
    );
    const hash = Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    // deduplicate the ip for each slug
    await redis.set(["deduplicate", hash, slug].join(":"), true, {
      nx: true,
      ex: 24 * 60 * 60,
    });
  }

  const countView = await redis.incr(["pageviews", "all", slug].join(":"));

  return countView;
};
