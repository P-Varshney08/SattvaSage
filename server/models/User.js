import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender:{
        type :String,  //M or F
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    dosha_scores: {
        vata: {type: Number},
        pitta: {type: Number},
        kapha: {type: Number},
    }
}, {timestamps: true})

const User = new mongoose.model('User', userSchema);
export default User;