const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

let indexRouter = require('./routes/index.routes.js');
let charactersRouter = require('./routes/characters.routes.js');
// let usersRouter = require('./routes/users.routes.js');

let app = express();

// Middleware para que CADA respuesta de la API sea en formato JSON, c/encoding UTF-8 (2-bytes)
app.use((req, res, next) => {
  res.setHeader('Content-type', 'application/json');
  res.setHeader('charset', 'utf-8');

  next();
});

app.use(cors()); // Headers CORS para poder consultar datos desde el front.

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

/************************
 *  Rutas de la API
 ***********************/
app.use('/', indexRouter);
app.use(['/chars', '/characters'], charactersRouter);
// app.use('/combos', combosRouter);
// app.use('/finishers', finishersRouter);
// app.use('/settings', settingsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.pug');
});

module.exports = app;
