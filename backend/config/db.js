/**
 * MongoDB connection helper — Serverless-safe with connection caching,
 * fail-fast cooldown, and DNS lookup timeout guard.
 */

'use strict';

const mongoose = require('mongoose');

let cached = global._mongooseConnection;

if (!cached) {
  cached = global._mongooseConnection = {
    conn: null,
    promise: null,
    lastFailedAt: 0
  };
}

const COOLDOWN_MS = 25000;      // 25s cooldown after failure before retrying
const CONNECT_TIMEOUT_MS = 2500; // 2.5s timeout guard against DNS SRV hangs

async function connectDB() {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    throw new Error('MONGO_URI environment variable is not defined.');
  }

  // Active connected state (1 = connected)
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  // Fail-fast if recently failed within cooldown window to prevent blocking requests
  if (Date.now() - cached.lastFailedAt < COOLDOWN_MS) {
    throw new Error('MongoDB connection cooling down after a recent failure.');
  }

  const doConnect = async () => {
    if (!cached.promise || mongoose.connection.readyState !== 2) {
      const opts = {
        serverSelectionTimeoutMS: 2000,
        socketTimeoutMS: 15000,
        maxPoolSize: 10,
        bufferCommands: false,
      };

      cached.promise = mongoose.connect(uri, opts).then((mongooseInstance) => {
        console.log(`✅ MongoDB connected: ${mongooseInstance.connection.host}`);
        cached.lastFailedAt = 0;
        return mongooseInstance;
      });
    }
    return await cached.promise;
  };

  try {
    // Race with timeout so offline DNS SRV resolution never freezes requests
    cached.conn = await Promise.race([
      doConnect(),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('MongoDB connection attempt timed out.')), CONNECT_TIMEOUT_MS)
      ),
    ]);
  } catch (err) {
    cached.promise = null;
    cached.conn = null;
    cached.lastFailedAt = Date.now();
    throw err;
  }

  return cached.conn;
}

module.exports = connectDB;
