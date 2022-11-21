express = require('express');
const Tour = require('../models/tourModel');
const user = require('../models/userModel');
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

  if (!tour) {
    return next(new AppError('There is no tour with that name.', 404));
  }
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

exports.getAccount = catchAsync(async (req, res, next) => {
  res.status(200).render('account', {
    title: 'Your account',
  });
});

// exports.updateUserData = catchAsync(async (req, res, next) => {
//   const updatedUser = await user.findByIdAndUpdate(
//     req.user.id,
//     {
//       name: req.body.name,
//       email: req.body.email,
//     },
//     {
//       new: true,
//       runValidators: true,
//     }
//   );

//   res.status(200).render('account', {
//     title: 'Your account',
//     user: updatedUser,
//   });
// });
