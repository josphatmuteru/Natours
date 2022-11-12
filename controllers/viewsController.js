express = require('express');
// const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getTour = (req, res) => {
  res.status(200).render('tour', {
    title: 'The Forest Hiker',
  });
};

exports.getOverView = (req, res) => {
  res.status(200).render('overview', {
    title: 'All Tours',
  });
};
