const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

const countriesRouter = function (countriesNamesCollection) {

  router.get('/', (req, res) => {
    countriesNamesCollection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
  });

  // router.get('/:id', (req, res) => {
  //   const id = req.params.id;
  //   countriesNamesCollection
  //     .findOne({ _id: ObjectID(id) })
  //     .then((docs) => res.json(docs));
  // });
  //
  router.post('/', (req, res) => {
    const newCountry = req.body.country;
    countriesNamesCollection
      .insertOne(newCountry)
      .then(() => {
        countriesNamesCollection
          .find()
          .toArray()
          .then((docs) => res.json(docs));
      });
  });

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    countriesNamesCollection
      .deleteOne({ _id: ObjectID(id) })
      .then(() => {
        countriesNamesCollection
          .find()
          .toArray()
          .then((docs) => res.json(docs));
      });
  });
  //
  // router.put('/:id', (req, res) => {
  //   const id = req.params.id;
  //   const updatedSighting = req.body.sighting;
  //   sightingsCollection
  //     .updateOne(
  //       { _id: ObjectID(id) },
  //       { $set: updatedSighting }
  //     )
  //     .then(() => {
  //       sightingsCollection
  //       .find()
  //       .toArray()
  //       .then((docs) => res.json(docs));
  //     });
  // });
  //
  return router;

};

module.exports = countriesRouter;
