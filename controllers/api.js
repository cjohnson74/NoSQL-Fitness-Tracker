const router = require('express').Router();
const Workout = require('../models/workout.js');

router.post('/workouts', (req, res) => {
    // add code here
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    });
});

router.put('/workouts/:id', ({ body, params }, res) => {
    // add code here
    Workout.findOneAndUpdate(params.id, body)
});



module.exports = router;
