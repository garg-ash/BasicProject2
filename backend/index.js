import express from "express";
import cors from "cors"
import mongoose from "mongoose";

const app = express()
const port = 8000;

app.use(cors({
    origin: 'http://localhost:5173'
}))

mongoose.connect("mongodb://127.0.0.1:27017/firstDB").then(() => app.listen(port, () => console.log("server started at port " + port)))

//SCHEMA

const infoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
})

const userSchema = new mongoose.Schema({
    name: {
        type: "string",
        required : "true"
    },
    email :{
        type : "string",
        required: true
    },
    message : {
        type : "string",
        required : true
    }
})

const blogSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true
    },
    authorName: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required : true
    }
})

const infoModel = mongoose.model("information", infoSchema, "info");
const showModel = mongoose.model ("show", userSchema)
const blogModel = mongoose.model ("blog", blogSchema, "blogInfo" )

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/getdata", async (req, res) => {
    console.log(req.body)
    const dataToSave = new infoModel(req.body);
    // dataToSave.save().then(() => res.json("Data Submitted"))

    await dataToSave.save()
    res.json("Data Submitted")
}); 

app.get("/getAllData", async(req, res)=>{
    try {
        const dataFromDB = await showModel.find();
        res.json(dataFromDB)
    } catch(err){
        res.status(500).json({error: err})
    }
});

app.post("/addblog", (req, res)=>{
    const dataToSave = new blogModel(req.body)
    console.log(dataToSave)
    dataToSave.save().then(()=> res.json("Blog Added"))
})

app.get("/getblogs", async(req, res)=>{
    const savedData = await blogModel.find()
    if(savedData) res.json(savedData) 
});