const { json } = require('express');
const express = require('express');

const Tour = require('./../models/tourModel.js');

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price',
    });
  }
  next();
};
exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',

    // requestedAt: req.requestTime,
    // data: {
    //   tours,
    // },
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);

  // if (!tour) {
  //   res.status(404).json({
  //     status: 'fail',
  //     message: 'Invalid Id',
  //   });
  // }
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour,
  //   },
  // });
};

exports.createTour = (req, res) => {
  {
    res.status(201).json({
      status: 'success',
      // data: {
      //   tour: newTour,
      // },
    });
  }
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: { tour: '<Updated tour here...>' },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',

    data: null,
  });
};
