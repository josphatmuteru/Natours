const express = require('express');
const viewsController = require('../controllers/viewsController');
const router = express.Router();

router.get('/', viewsController.getTour);
router.get('/tour', viewsController.getOverView);

module.exports = router;
