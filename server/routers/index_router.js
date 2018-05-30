const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const countriesRouter = require('./countries_router.js');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  const db = client.db('countries');
  const countriesNamesCollection = db.collection('countriesNames');
  router.use('/api/countriesNames', countriesRouter(countriesNamesCollection));
});

module.exports = router;
