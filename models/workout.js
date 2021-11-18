const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        // add code here
    },
    exercieses: [
        {
            //add code here
        },
    ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;