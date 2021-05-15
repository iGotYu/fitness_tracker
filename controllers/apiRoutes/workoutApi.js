const express = require("express");
const router = express.Router();
const {Workout} = require("../../Models");

router.get("/", async (req, res) => {
  try {
    const allWorkouts = await Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }
        }
    ])
    res.status(200).json(allWorkouts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/range", async (req, res) => {
    try {
      const allWorkouts = await Workout.aggregate([
          {
              $addFields: {
                  totalDuration: {
                      $sum: '$exercises.duration'
                  }
              }
          }
      ]).limit(7).sort({_id:-1})
      res.status(200).json(allWorkouts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post("/", async (req, res) => {
  try {
    const newWorkout = await db.Workout.create({});
    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const newExercise = await db.Exercise.create(req.body);

    const updateWorkout = await db.Workout.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $push: { exercises: newExercise._id },
      },
      {
        new: true,
      }
    );
    res.status(200).json(updateWorkout);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router