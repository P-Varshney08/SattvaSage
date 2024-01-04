const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  symptoms: {
    type: String,
    required: true,
  },
  agniFactor: {
    type: Number,
    required: true,
  },
  durationValue: {
    type: Number,
    required: true,
  },
  durationUnit: {
    type: String,
    enum: ['days', 'weeks', 'months', 'years'],
    required: true,
  },
  doshaImbalance: {
    vata: {
      type: Number,
      required: true,
    },
    pitta: {
      type: Number,
      required: true,
    },
    kapha: {
      type: Number,
      required: true,
    },
  },
  climate: {
    type: String,
    required: true,
  },
  diagnosis: {
    diagnosisName: {
      type: String,
      required: true,
    },
    diagnosisDetails: {
      type: String,
      required: true,
    },
  },
  formulation: {
    formulationName: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [String],
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
  },
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
