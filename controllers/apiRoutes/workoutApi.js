const express = require('express');
const router = express.Router();
const {Workout, Exercise} = require('../models');
const db = require('../models');

router.get('/', async (req, res) =>{
    try{
        const allWorkouts = await db.workout.find({}).populate('exercises');
        allWorkouts[allWorkouts.length -1].addDuration();
        allWorkouts[allWorkouts.length -1].addDistance();
        res.status(200).json(allWorkouts)
    }catch(err){
        res.status(500).json(err);
    }
})

