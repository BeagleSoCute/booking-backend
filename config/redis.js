const redis = require("redis");

const redisClient = async () => {
    const client = redis.createClient({
        host: "localhost",
        port: 6379,
      });
      await client.connect();
      return client
}

module.exports = {redisClient}