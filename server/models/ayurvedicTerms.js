import mongoose from 'mongoose';

const ayurvedicSchema = new mongoose.Schema({
  commonName: { type: String, required: true, unique: true },
  ayurvedicTerms: { type: [String], required: true },
});

const AyurvedicTerms = mongoose.model('AyurvedicTerms', ayurvedicSchema);

export default AyurvedicTerms;