// review / rating / createdAt / ref to tour / ref to user

const { mongoose } = require('mongoose');

const reviewSchema = new mongoose.schema(
  {
    review: {
      type: String,
      required: [true, 'You have to say something'],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, 'A review must have a rating'],
    },
    createdAt: { Date, default: Date.now() },
    tour: {
      type: mongoose.schema.ObjectId,
      ref: 'Tour',
      required: [true, 'Review must belong to a tour'],
    },
    user: {
      type: mongoose.schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
