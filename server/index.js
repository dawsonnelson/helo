require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session')



const controller = require('./controller');


const app = express();
app.use(express.static(__dirname + '/public'));

const {
    SERVER_PORT,
    CONNECTION_STRING,
    SECRET,
} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})


app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(bodyParser.json());



app.post( '/api/register', controller.register);

app.post('/api/login', controller.login);

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))