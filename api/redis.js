import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

// TTL konstanty
export const TTL = {
  STREAMS: 60 * 60 * 24,      // 24 hodín
  SEARCH:  60 * 60 * 6,       // 6 hodín
  HISTORY: 60 * 60 * 24 * 30, // 30 dní
}
