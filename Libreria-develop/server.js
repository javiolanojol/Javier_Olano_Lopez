const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const morgan = require('morgan');
require('./connection');

app.engine('hbs',exphbs({

    layoutsDir:  __dirname +'/views/layouts',
    partialsDir:  __dirname +'/views/partials',
    extname: 'hbs'

}));

app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

app.use(require('./routes/indexRouter'));
app.use(require('./routes/bookRouter'));
app.use(require('./routes/discRouter'));
app.listen(3000);
