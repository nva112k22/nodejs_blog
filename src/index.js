const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const routes = require('./routes');
const methodOverride = require('method-override');
const db = require('./config/db');


//Connect to DB
db.connect();

//http logger morgan
app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, '/public/')));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(methodOverride('_method'));
app.use(express.json());

// XMLHttpRequest, fetch, axios
//--------------------------------------------//
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ 
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a+b,
  }
});
// TEMPLATE ENGINE
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); // cách mình tìm đến file, hệ điều hành window

//console.log('PATH: ', path.join(__dirname, 'resources/views')) //xem đường dẫn

//
//HTTP logger
//Routes init
routes(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
