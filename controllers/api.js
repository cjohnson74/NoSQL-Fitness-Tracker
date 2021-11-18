const router = require('express').Router();
const Workout = require('../models/workout.js');

router.get('/workouts', (req, res) => {
    // find all workouts in the db
    Workout.find({})
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
});

router.put('/workouts/:id', ({ body, params }, res) => {
    // find a workout in the db and update it
    Workout.findOneAndUpdate(params.id, body)
    .then((dbWorkout) => {
        res.json(dbWorkout)
    })
    .catch((err) => {
        res.status(500).json(err);
    });
});

router.post('/workouts', ({ body }, res) => {
    // create a workout and add it to the db
    Workout.create(body)
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
});

router.get('/workouts/range', (req, res) => {
    // get all workout data from back-end
    Workout.find({})
    .then((dbWorkout) => {
        res.json(dbWorkout)
    })
    .catch((err) => {
        res.status(500).json(err);
    });
});

module.exports = router;
