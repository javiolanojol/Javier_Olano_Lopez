const { Router } = require ('express');
const router = Router();
const mealController = require('../controllers/meal.controller');


router.get('/find_meals/:name', mealController.list_meals);


module.exports = router;