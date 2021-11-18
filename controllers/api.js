const router = require('express').Router();
const Workout = require('../models/workout.js');

router.get('/workouts', (req, res) => {
    // find all workouts in the db
    Workout.find({})
    .then((dbWorkout) => {
        res.status(200).json(dbWorkout);
    })
    .cantch((err) => {
        res.status(500).json(err);
    });
});

router.put('/workouts/:id', ({ body, params }, res) => {
    // find a workout in the db and update it
    Workout.findOneAndUpdate(params.id, body)
    .then((dbWorkout) => {
        res.status(200).json(dbWorkout, "Workout successfully updated.")
    })
    .catch((err) => {
        res.status(500).json(err);
    });
});

router.post('/workouts', ({ body }, res) => {
    // create a workout and add it to the db
    Workout.create(body)
    .then((dbWorkout) => {
        res.status(200).json(dbWorkout);
    })
});

module.exports = router;
