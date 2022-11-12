express = require('express');
const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getOverView = catchAsync(async (req, res) => {
  //1) Get tour data from collection
  const tours = await Tour.find();
  //2)Build template
  //3)Render that template using pug
  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  res.status(200).render('tour', {
    title: 'The Forest Hiker',
  });
});
