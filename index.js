const express = require("./node_modules/express")
const expressGraphQL = require("./node_modules/express-graphql/dist")
const path = require('path')
const mongoose = require("mongoose")
const cors = require("./node_modules/cors/lib")
// import 'babel-polyfill';
require("./node_modules/dotenv/lib/main").config();

const schema =  require("./graphql");

const PORT = process.env.PORT || "4000";
const app = express();
require("./db/db");

const corsOptions = {
 origin: 'https://my-government.herokuapp.com',
 credentials: true,
 optionsSuccessStatus: 200 // some legacy browsers, and options requests
};

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.use(
  "/graphql",
  cors(corsOptions),
  express.json(),
  expressGraphQL({ schema, graphiql: true })
);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
