import mongoose from 'mongoose';

const savedSchema = new mongoose.Schema({
   userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
    },
    formulationIds: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Formulation"
        }
    ],
});

const SavedFormulation = mongoose.model('SavedFormulation', savedSchema);

export default SavedFormulation;
