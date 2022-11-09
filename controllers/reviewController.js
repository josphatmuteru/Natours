const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/userModel');
const Tour = require('../models/tourModel');
const Review = require('../models/reviewModel');

exports.createReview = catchAsync(async (req, res, next) => {
  const newReview = await Review.create(req.body);

  res.status(201).json({
    status: 'Success',
    data: newReview,
  });
});

exports.getAllReviews = catchAsync(async (req, res, next) => {
  const review = await Review.find();

  res.status(201).json({
    status: 'Success',
    data: review,
  });
});