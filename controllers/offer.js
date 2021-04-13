mongodb = require('../db/Mongolib');

function getProducts() {
  return mongodb.conn().then((client) => {
    console.log('connected');
    return client.db('tallertomas').collection('offers').find({}).toArray();
  });
}

function insertProduct(product) {
  return mongodb.conn().then((client) => {
    return client.db('tallertomas').collection('offers').insertOne(product); // Si no se provee un ID, este será generado automáticamente
  });
}

module.exports = [getProducts, insertProduct];
