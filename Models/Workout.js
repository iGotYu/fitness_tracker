const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
    type: Date,
    default: Date.now,
},
exercises: [
    {
        type: Schema.Types.ObjectId,
        ref: "Exercise",
    }
],

totalDuration: Number,
totalDistance: Number,
totalWeight: Number,
totalSets: Number,
totalReps: Number,


});

WorkoutSchema.methods.addDurations = function () {
    let totalDuration = 0;
    
}