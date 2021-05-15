const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: " A String is Required",
      },
      name: {
        type: String,
        trim: true,
        required: " A String is Required",
      },
      durations: {
        type: Number,
      },
      distance: {
        type: Number,
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
    },
  ],

  // totalDuration: Number,
  // totalDistance: Number,
  // totalWeight: Number,
  // totalSets: Number,
  // totalReps: Number,
});

// WorkoutSchema.methods.addDurations = function () {
//     let totalDuration = 0;
//     for (var i = 0; i < exercises.length; i++) {
//         totalDuration += this.exercises[i].duration;
//     }
//     return totalDuration;
// }
// WorkoutSchema.methods.addDistance = function () {
//     let totalDistance = 0;
//     for (var i = 0; i < exercises.length; i++) {
//         totalDistance += this.exercises[i].duration;
//     }
//     return totalDistance;
// }
// WorkoutSchema.methods.addWeights = function () {
//     let totalWeights = 0;
//     for (var i = 0; i < exercises.length; i++) {
//         totalWeights += this.exercises[i].duration;
//     }
//     return totalWeights;
// }

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
