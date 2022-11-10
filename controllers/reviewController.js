const AppError = require('../utils/appError');
// const catchAsync = require('../utils/catchAsync');
const User = require('../models/userModel');
const Tour = require('../models/tourModel');
const Review = require('../models/reviewModel');
const factory = require('../controllers/handlerFactory');

exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};
exports.createReview = factory.createOne(Review);
exports.getReview = factory.getOne(Review);
exports.getAllReviews = factory.getAll(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
