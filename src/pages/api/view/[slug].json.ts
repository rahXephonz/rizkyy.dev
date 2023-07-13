/* eslint-disable import/no-extraneous-dependencies */
import {type APIRoute} from "astro";
import {Redis} from "@upstash/redis";

const redis = new Redis({
  url: import.meta.env.UPSTASH_REDIS_REST_URL,
  token: import.meta.env.UPSTASH_REDIS_REST_TOKEN,
});

export const get: APIRoute = async ({params, clientAddress}) => {
  const {slug} = params ?? {};
  const ip = clientAddress;

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

  return {
    body: JSON.stringify({
      views: countView,
    }),
  };
};
