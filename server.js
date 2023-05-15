const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! Shutting down..');
  console.log(err.name, err.message, err.stack);
  process.exit(1);
});

dotenv.config({ path: './config.env' });

const app = require('./app');
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// const DB =  'mongodb+srv://Josphat:2UrHBrLjiuO2UI5h@cluster0.m0kdoqh.mongodb.net';
const port = process.env.PORT || 3000;
const startServer = () =>
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });

mongoose
  // .connect(process.env.DATABASE_LOCAL, {
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log('DB connection successful');
    startServer();
  });

// console.log(process.env);

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION :/ SHUTTING DOWN');
  server.close(() => {
    process.exit(1);
  });
});
