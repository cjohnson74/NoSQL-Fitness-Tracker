const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    // add code here
    type: Date,
    trim: true,
  },
  excercieses: [
    {
      type: {
        type: String,
        require: true,
      },
      name: {
        type: String,
        require: true,
      },
      duration: {
        type: Number,
        require: true,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      }
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
