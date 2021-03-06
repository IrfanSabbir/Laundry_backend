const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

const preferenceSchema = new Schema({
  detergent:{
    type:String,
    default:"Tide"
  },
  fabricSoftener:{
    type:String,
    default:"Gain"
  },
  bleachForWhites:{
    type:String,
    default:"Don't Use Bleach"
  },
  waterTempDark:{
    type:String,
    default:'Cold'
  },
  waterTempLight:{
    type:String,
    default:'Cold'
  },
  waterTempWhite:{
    type:String,
    default:'Cold'
  },
  drying:{
    type:String,
    default:'Medium'
  },
  dryerSheets:{
    type:String,
    default:'Bounce'
  },
  foldingPants:{
    type:String,
    default:'Fold'
  },
  foldingDressShirts:{
    type:String,
    default:'Hang'
  },
  foldingJeans:{
    type:String,
    default:'Fold'
  },
  foldingGolfShirts:{
    type:String,
    default:'Fold'
  },
  laundryInstructions:{
    type:String,
    default:''
  },
  dryCleaningInstructions:{
    type:String,
    default:''
  },
  foldingInstructions:{
    type:String,
    default:''
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: 'true'
  },
})

module.exports = mongoose.model('Preference',preferenceSchema)