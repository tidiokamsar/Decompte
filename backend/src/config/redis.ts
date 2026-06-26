import redis from 'redis';
import config from './index';

const redisConfig = config.redis;

export const redisClient = redis.createClient({
  host: redisConfig.host,
  port: redisConfig.port,
  password: redisConfig.password,
  db: redisConfig.db,
  retry_strategy: (options) => {
    if (options.error && options.error.code === 'ECONNREFUSED') {
      return new Error('End of redis connection retries.');
    }
    if (options.total_retry_time > 1000 * 60 * 60) {
      return new Error('End of redis connection retries.');
    }
    if (options.attempt > 10) {
      return undefined;
    }
    return Math.min(options.attempt * 100, 3000);
  },
});

redisClient.on('connect', () => {
  console.log('✅ Redis connected');
});

redisClient.on('error', (error) => {
  console.error('❌ Redis error:', error);
});

export default redisClient;
