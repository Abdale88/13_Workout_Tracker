const router = require("express").Router();
const Exercise = require("../../models");


router.get("/", async (req, res) => {
  try {
    const dbExercise = await Exercise.Workout.find({});

    dbExercise.forEach(element => {
      let sum = 0;
      element.exercises.forEach(workout => {
        sum += workout.duration
        
      });
      dbExercise.totalDuration = sum
    });
    res.json(dbExercise);
    
  } catch (error) {
    res.status(400).json(error); 
  }
});


router.post("/", async ({body}, res) => {
  try {
    const dbExercise = await Exercise.Workout.create(body)
    console.log(dbExercise)
      res.json(dbExercise);
    
  } catch (error) {
    res.status(400).json(error); 
  }
});


router.get("/range", async (req, res) => {
  try {
    const dbExercise = await Exercise.Workout.find({})
      res.json(dbExercise);
      console.log(dbExercise)
    
  } catch (error) {
    res.status(400).json(error); 
  }
});

router.put("/:id", async (req, res) => {
  try {
    const dbExercise = await Exercise.Workout.findOneAndUpdate(
      { _id: req.params.id },
      {
          $inc: { totalDuration: req.body.duration },
          $push: { exercises: req.body }
      },
      { new: true });

       res.json(dbExercise);
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;