import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/auth.js';
import './models/user.js';

const app = express();
const PORT = 5000;

app.use(express.json())
app.use(router);

const customMiddleware = (req,res,next) =>{
    console.log("middlawre Executed MTR");
    next();
}


app.get("/home",(req,res)=>{
    console.log("I AM FROM HOME PAGE MTR")  //HOME
    res.send("I AM  HOME PAGE MTR")
})

app.get("/login",customMiddleware,(req,res)=>{
    console.log("I AM FROM LOGIN PAGE MTR")   //LOGING
    res.send("I AM  LOGIN PAGE MTR")
})

app.listen(PORT,()=>{
    console.log("i am tafarak from server:",PORT)
})


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://socialnetwork:socialnetwork@cluster0.eyd0d.mongodb.net/instaMTR?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL).then(() => {
    console.log('SERVER connected to MongoDB from:',PORT);
})


