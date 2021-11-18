const router = require('express').Router();
const Workout = require('../models/workout.js');

router.post('/workouts', (req, res) => {
    // add code here
    Workout.find({})
    .then(dbWorkout => {
        res.status(200).json(dbWorkout);
    })
    .cantch((err) => {
        res.status(500).json(err);
    })
});

router.put('/workouts/:id', ({ body, params }, res) => {
    // add code here
    Workout.findOneAndUpdate(params.id, body)
    .then(dbWorkout => {
        res.status(200).json(dbWorkout, "Workout successfully updated.")
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});



module.exports = router;
