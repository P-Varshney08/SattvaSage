import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
const app = express();
const MONGO_URL = 'mongodb+srv://priyavarshney081003:8qG74Fw44FTmyyra@cluster0.u9k14pt.mongodb.net/Ayurvedic-we?retryWrites=true&w=majority';
import authRoutes from './routes/authRoutes.js'
import diseaseRoutes from './routes/diseaseRoutes.js'

const corsOptions = {
    // origin: 'http://localhost:3000',
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors());

mongoose.connect(MONGO_URL)
.then(()=>{
    console.log('DB connected');
})
.catch((err)=>{
    console.log(`Error connecting to DB: ${err}`);
})



const PORT = 8080;
app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`);
})

app.use('/api/auth', authRoutes);
app.use('/api/use', diseaseRoutes);

app.get('/', (req, res)=> {
    res.send("Root Route");
})