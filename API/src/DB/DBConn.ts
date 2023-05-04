import { MongoClient, ObjectId } from 'mongodb';

async function connect(): Promise<MongoClient> {
    const client = new MongoClient("uri");
    await client.connect();
    console.log('Connected to MongoDB');
    return client;
  }
  