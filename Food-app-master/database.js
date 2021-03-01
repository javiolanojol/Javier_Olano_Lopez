'use strict';

const mongoose = require('mongoose');

const {FOOD_APP_HOST, FOOD_APP_DATABASE} = process.env;
const MONGODB = `mongodb://${FOOD_APP_HOST}/${FOOD_APP_DATABASE}`;

mongoose.connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

.then(db => console.log('Database is CONNECTED'))

.catch(err => console.log(err));