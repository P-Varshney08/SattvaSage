import express from 'express';
const router = express.Router();
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from '../models/User.js';
import cookieParser from 'cookie-parser';
import Symptom from '../models/Symptom.js';

var secretKey = 'GovindUpadhyay';
router.use(cookieParser());

router.post('/register', async(req, res)=>{
    const {username, email, password, gender, age} = req.body;
    const hashedPassword = await bcryptjs.hashSync(password, 10);
    const newUser = new User({
        username, email, password: hashedPassword, gender, age, dosha_scores: {vata:0, pitta:0, kapha: 0}
    });
    try {
        await newUser.save();
        console.log('New User created');
        res.status(201).json(newUser);
        
    } catch (error) {
        console.log('Error Signing Up', error.message);
        if (!err.message.includes("E11000")) {      // trying to make a duplicate key
            // throw err;
            return res.status(500).json({message: err})
        } else {
            return res.status(409).send("Error: Email already in use");
        }
    }

})

router.post('/signin', async(req, res, next)=>{
    const {email, password} = req.body;
    try {
        const validUser = await User.findOne({email: email});
        console.log('neeche')
        console.log(validUser);
        if(!validUser){
            return res.status(404).json({message: 'User not found'});
        }
        
        const validPassword = await bcryptjs.compare(password, validUser.password);
        if(!validPassword){
            return res.status(401).json({message: 'Invalid Credentials'});
        }
        const {_id, password: hashedPassword, ...userInfo} = validUser._doc;
        const token = jwt.sign({id: _id}, secretKey);
        console.log('Generated token', token); 
        console.log('userInfo : ', userInfo);
        return res.cookie('jwt', token, {httpOnly: true}).status(200).json({token: token, user: validUser._doc});
        // return res.status(200).json({message: 'User logged in successfully'});

    } catch (error) {
        console.log('Error Signing In', error.message);
        return res.status(500).json({message: "Internal Server Error"});
    }
})

router.get('/getSymptom', async(req, res)=>{
    const data = await Symptom.find();
    return res.status(200).json(data);
})

export default router;
 