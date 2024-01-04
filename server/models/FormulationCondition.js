import mongoose from 'mongoose';

const ayurvedicFormulationSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  prakritiType: { type: String, required: true },
  symptomCuring: { type: [String], required: true },
  dosage: {
    child: { type: String, required: true },
    adult: { type: String, required: true },
    elder: { type: String, required: true }
  },
  doshaBalancing: { type: String, required: true },
  form: { type: String, required: true }
});

const FormulationCondition = mongoose.model('FormulationCondition', ayurvedicFormulationSchema);

export default FormulationCondition;
