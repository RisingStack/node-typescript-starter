import { Collection, MongoClient } from 'mongodb';
import Configuration from '../Configuration';

const { name: databaseName, url, maximumReconnectionAttempts }:
{name: string, url: string, maximumReconnectionAttempts: number} =
Configuration.database;

export default class DBHandleDispatcher {
  private static client: MongoClient;
  private static reconnectionAttempts: number = 0;

  public static async initialize() {
    this.attemptToReconnect();
  }

  public static async getCollection(collectionName: string): Promise<Collection> {
    if (!this.client.isConnected(databaseName)) {
      this.attemptToReconnect();
      return this.getCollection(collectionName);
    }
    const database = this.client.db(databaseName);
    return database.collection(collectionName);
  }

  private static async attemptToReconnect(): Promise<void> {
    if (this.reconnectionAttempts >= maximumReconnectionAttempts) {
      console.log('[FATAL] Connection to database was impossible.');
      process.exit(1);
    }
    else {
      try {
        this.client = await MongoClient.connect(url);
        this.reconnectionAttempts = 0;
      }
      catch (e) {
        const error: Error = e;
        console.log(`[ERROR] Connection to database failed. Attempt number ${this.reconnectionAttempts + 1}.`);
        this.reconnectionAttempts++;
        this.attemptToReconnect();
      }
    }
  }
}
