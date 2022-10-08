const express = require('express');
// const fs = require('fs');
const userController = require('../controllers/userController');
const router = express.Router();

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);
// app.route('/api/v1/users/').get(getAllUsers).post(createUser);

module.exports = router;
