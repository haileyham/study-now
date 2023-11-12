const { MongoClient } = require('mongodb');
import config from '@/util/config.json';

const url = config.mongodb_url;
const options = { useNewUrlParser: true };
let connectDB;

if (!url) {
  throw new Error('The MONGODB_URL environment variable is not defined');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}

export { connectDB };
