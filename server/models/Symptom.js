import mongoose from 'mongoose';

const symptomSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, },
  synonyms: { type: [String] },
  description: { type: String },

  // severity: {
  //   type: String,
  //   enum: ['Mild', 'Moderate', 'Severe', 'Variable'],
  //   required: true,
  // },
  // duration: {
  //   type: String,
  //   required: true,
  // },
});

const Symptom = mongoose.model('Symptom', symptomSchema);

export default Symptom;
