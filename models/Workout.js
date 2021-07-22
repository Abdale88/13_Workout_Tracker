const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new  Schema({  
    day: {
        type:  Date,
        default: new Date()
    },
    exercises: [
      {
        type: {
            type: String, 
            require: true,
            },
        
            name: {
            type: String,
            require: 'Enter a name'
            },
        
            duration:{
            type: Number,
            require: true,
            default: 0
            },
        
            weight:{
            type: Number,
            trim: true,
            default: 0
            },
        
            reps:{
            type: Number,
            trim: true,
            default: 0
            },

            distance:{
                type: Number,
                trim: true,
                default: 0
            },

            sets:{
            type: Number,
            default: 0
            },
        }
    ],
    totalDuration:{
        type: Number,
        default: 0
    }
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
