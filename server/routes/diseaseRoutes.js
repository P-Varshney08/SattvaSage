import express, { response } from 'express';
import User from '../models/User.js';
import Formulation from '../models/Formulation.js';
import FormulationCondition from '../models/FormulationCondition.js';
import SavedFormulation from '../models/SavedFormulations.js';
const router = express.Router();

router.get('/getTerms', async(req, res)=>{
    const data = await FormulationCondition.find();
    // const allTerms = data.map((sym)=>sym.therapeuticUses.map((item)=> item));
    const allTerms = data.map((sym)=>sym.name);
    console.log(allTerms);

})

router.post('/getSymptom', async(req, res)=>{
 
    const {age, gender, symptoms} = req.body;
    const allSymptom = symptoms.split(/s+/);
    console.log('all symptoms: ', allSymptom);
    try {
        const formulations = await FormulationCondition.find({
            symptomCuring: {$regex: new RegExp (allSymptom.join('|'), 'i')}
        }); 
        console.log('Matching formulation hai', formulations);
        res.status(200).json({formulations});
    } catch (error) {
        console.error('Error fetching data', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.get('/getFormulation', async (req, res) => {
    const { name } = req.query;
    const regexName = new RegExp(`^${name}$`, 'i');
    console.log(name);
    try {
        const formulation = await Formulation.findOne({name: {$regex: regexName}});
        return res.status(200).json(formulation);
    } catch (error) {
        console.log('Error finding Formulation', error);
        return res.status(500).json('Error finding Formulation');
    }
})

router.post('/saveFormulation', async(req, res)=> {
    const {userId, formulationId} = req.body;
    console.log(formulationId, userId);
    try {
        const userExist = await SavedFormulation.findOne({userId: userId});
        if(userExist){
            userExist.formulationIds.push(formulationId);
            await userExist.save();
            return res.status(200).json(userExist);
        }
        else{
            const newEntry = new SavedFormulation({
                userId, formulationIds: [formulationId]
            })
            await newEntry.save();
            return res.status(200).json(newEntry);
        }
    } catch (error) {
        return res.status(500).json('Error saving Formulation');
    }
})

router.get('/getSavedFormulations/:id', async(req, res) => {
    const userId = req.params.id;
    // console.log('aaya');
    console.log(userId);
    try {
        const allFormulations = await SavedFormulation.findOne({userId}).populate('formulationIds');
        if(!allFormulations) {
            return res.status(404).json({error: 'No saved formulations found for the user'});
        }
        const formulations = allFormulations.formulationIds;
        return res.status(200).json(formulations);
    } catch (error) {
        return res.status(500).json('Internal Server Error');
    }
})

router.post('/removeSavedFormulation', async(req, res) => {
    const {userId, fId} = req.body;
    try {
        const result = await SavedFormulation.findOneAndUpdate( 
            {userId}, 
            { $pull: {formulationIds: fId }},
            { new:true }
        ); 
        if (result) {
            return res.status(200).json({ message: 'Formulation removed successfully' });
        } else {
            return res.status(404).json({ error: 'User not found or formulation not saved' });
        }
    } catch (error) {
        console.log('Error removing Formulation', error);
        return res.status
    }
})

router.post('/saveDosha', async(req, res)=> {
    const {_id} = req.body;
    console.log('aa gya');
    console.log(_id);
    const { Frame, Weight, Eyes, Complexion, Hair, SleepPattern, Joints, BodyTemperature, Temperament, UnderStress, Tolerence, Veins, Digestion, Nails, Memory} = req.body;
    // console.log(Frame, Weight, Eyes, Complexion, Hair, SleepPattern, Joints, BodyTemperature, Temperament, UnderStress, Tolerence, Veins, Digestion, Nails, Memory);
    var vataScore=0; 
    var pittaScore=0; 
    var kaphaScore=0; 
    if (Frame == 'Vata') vataScore += 1; else if (Frame == 'Pitta') pittaScore += 1; else kaphaScore += 1;
    if (Weight == 'Vata') vataScore += 1; else if (Weight == 'Pitta') pittaScore += 1; else kaphaScore += 1;
    if (Eyes == 'Vata') vataScore += 1; else if (Eyes == 'Pitta') pittaScore += 1; else kaphaScore += 1;
    if (Complexion == 'Vata') vataScore += 1; else if (Complexion == 'Pitta') pittaScore += 1; else kaphaScore += 1;
    if (Hair == 'Vata') vataScore += 1; else if (Hair == 'Pitta') pittaScore += 1; else kaphaScore += 1;
    if (SleepPattern == 'Vata') vataScore += 1; else if (SleepPattern == 'Pitta') pittaScore += 1; else kaphaScore += 1;
    if (Joints == 'Vata') vataScore += 1; else if (Joints == 'Pitta') pittaScore += 1; else kaphaScore += 1;
    if (BodyTemperature == 'Vata') vataScore += 1; else if (BodyTemperature == 'Pitta') pittaScore += 1; else kaphaScore += 1;
    if (Temperament == 'Vata') vataScore += 1; else if (Temperament == 'Pitta') pittaScore += 1; else kaphaScore += 1;
    if (UnderStress == 'Vata') vataScore += 1; else if (UnderStress == 'Pitta') pittaScore += 1; else kaphaScore += 1;
    if (Tolerence == 'Vata') vataScore += 1; else if (Tolerence == 'Pitta') pittaScore += 1; else kaphaScore += 1;
    if (Veins == 'Vata') vataScore += 1; else if (Veins == 'Pitta') pittaScore += 1; else kaphaScore += 1;
    if (Digestion == 'Vata') vataScore += 1; else if (Digestion == 'Pitta') pittaScore += 1; else kaphaScore += 1;
    if (Nails == 'Vata') vataScore += 1; else if (Nails == 'Pitta') pittaScore += 1; else kaphaScore += 1;
    if (Memory == 'Vata') vataScore += 1; else if (Memory == 'Pitta') pittaScore += 1; else kaphaScore += 1;

    console.log("scores are: ", vataScore, pittaScore, kaphaScore );
    const doshaData = { vata:vataScore, pitta:pittaScore, kapha:kaphaScore };
    console.log(doshaData);
    try {
        
        const user = await User.findByIdAndUpdate({_id}, {$set: {dosha_scores: doshaData}});
        // console.log('found user', user);
        console.log('updated');
    } catch (error) {
        return res.status(400).json('hello');
    }
    return res.status(200).json({vataScore: vataScore, pittaScore: pittaScore, kaphaScore, kaphaScore});

})


export default router; 