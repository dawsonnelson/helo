require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');



const controller = require('./controller');


const app = express();

const {
    SERVER_PORT,
    CONNECTION_STRING,
} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})


app.use(bodyParser.json());



app.post('/')



app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))