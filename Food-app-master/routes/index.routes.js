const { Router } = require ('express');
const router = Router();
const mealController = require('../controllers/meal.controller');


router.get('/', mealController.list);

module.exports = router;