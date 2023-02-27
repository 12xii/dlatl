const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('dotenv');
const { sequelize } = require('./models');

const app = express();

const port = process.env.PORT || 8080;
dotenv.config();

const corsOptions = {
    origin: '*',
    method: ['GET', 'POST', 'PATCH', 'DELETE'],
    Credential: true,
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors(corsOptions));
app.set('jwt-secret', process.env.SECRET);

app.use('/', router);

app.listen(port, () => {
    console.log('listening on port ', port);

    sequelize.sync({ force: false })
        .then(() => {
            console.log("Success to link database");
        })
        .catch((err) => {
            console.error(err);
        });
});