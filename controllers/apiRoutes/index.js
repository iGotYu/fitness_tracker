const router = require('express').Router();
const workoutApi = require('./workoutApi.js')

router.use('/workouts',workoutApi);

module.exports = router;