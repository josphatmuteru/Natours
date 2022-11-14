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
  //1) Get the data, for the requested tour (inlcuding reviews and guides)

  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'review',
    fields: 'review rating user',
  });
  //2) Build template

  //3) Render template using data from 1
  res.status(200).render('tour', {
    title: `${tour.name} Tour`,
    tour,
  });
});

exports.getloginForm = catchAsync(async (req, res, next) => {
  res.status(200).render('loginForm', {
    title: 'Log into your account',
  });
});
