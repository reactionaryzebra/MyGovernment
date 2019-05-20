const mongoose = require("mongoose");

const connectionString = process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost/test';

mongoose.connect(
  connectionString,
  { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false }
);
mongoose.connection.on("connected", () => {
  console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on("error", err => {
  console.log(`Mongoose connected error ${err}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});
