const { MongoMemoryServer } = require('mongodb-memory-server');
const { MongoClient } = require('mongodb');

let database = null;

function initCollection(db) {
  db.createCollection('feedbacks');

  // create index because each player can only rate a given session once.
  db.collection('feedbacks').createIndex(
    { userId: 1, sessionId: 1 }, { unique: true });
}

async function startDatabase() {
  const mongoServer = await MongoMemoryServer.create();
  const mongoDBURL = mongoServer.getUri()

  const connection = await MongoClient.connect(mongoDBURL, { useNewUrlParser: true });
  database = connection.db();

  initCollection(database);
}

async function getDatabase() {
  if (!database) await startDatabase();
  return database;
}

module.exports = {
  getDatabase,
  startDatabase,
};