const mongoose = require("mongoose"); // What is mongoose? It’s a library to help us talk to MongoDB easily in Node.js.

// Connecting to MongoDB takes time — it's a network operation That means: it doesn’t give a result immediately It returns a Promise
// So, we mark the function async to allow waiting using await
// async lets a function use await & await pauses the function until the operation (mongoose.connect) finishes.

// 1. Define a function that connects to MongoDB : // That string gets passed into the function as the variable uri.
async function connectToMongo(url) {
  await mongoose.connect(url); // wait for Mongo to connect
}

module.exports = { connectToMongo }; //Maybe today you're only exporting connectToMongo..But tomorrow, you might add: disconnectMongo, checkMongoStatus
