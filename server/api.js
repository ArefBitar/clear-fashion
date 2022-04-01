const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const PORT = 8092;
const app = express();
var database = express();

const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require("mongodb").ObjectID;

const URI = "mongodb+srv://arefbitar:admin@cluster0.8zdw6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const  DATABASE_NAME = "clear-fashion";
const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
module.exports = app;

app.use(require('body-parser').json());
app.use(cors());
app.use(helmet());

app.options('*', cors());

app.get('/', (request, response) => {
  response.send({'ack': true});
});



app.listen(PORT);



console.log(`📡 Running on port ${PORT}`);
