import mongoose from 'mongoose';

const formulationSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  ingredients: { type: [String], require: true },
  dosage: { type: String, required: true },
  anupana: { type: String },
  therapeuticUses: { type: [String] },
  referenceBook: { type: String, required: true },
  instructions: {type: String},
});

const Formulation = mongoose.model('Formulation', formulationSchema);

export default Formulation;
