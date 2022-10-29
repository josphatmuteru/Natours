const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const app = express();
const userRouter = require('./routes/userRoutes');
const tourRouter = require('./routes/tourRoutes');

// 1: MIDDLEWARE
// console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

// app.use((req, res, next) => {
//   console.log('Hello from the middleware 👋');
//   next();
// });

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();

  next();
});

//2:ROUTE HANDLERS

// 3. ROUTES

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users/', userRouter);

app.all('*', (req, res, next) => {
  // res.status(404).json({
  //   status: 'fail',
  //   message: `Can't find ${req.originalUrl} on this server!`,
  // });

  // const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  // err.status = 'fail';
  // err.statusCode = 404;

  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

// 4. START SERVER
module.exports = app;
