const mongoose=require("mongoose")
const express=require("express")
var cors = require('cors') 
const routes=require("./routes")
require("dotenv").config();
const bodyParser = require("body-parser");
const app=express();
let port = 5000;
app.use(cors())
app.use("/",routes)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
const mongoAtlas = process.env.DATABASE
// mongoose.connect(mongoAtlas,{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
//     console.log("connected to db")
// })
mongoose.connect(mongoAtlas,)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
app.listen(port, () => console.log(`App listening on port https://localhost:${port}`))
//mongodb+srv://venkatasubbamma990:admin@cluster0.rii1xob.mongodb.net/TodoDB?retryWrites=true&w=majority&appName=Cluster0


//mongodb+srv://venkatasubbamma:sudha1454@cluster0.ucznbbk.mongodb.net/?retryWrites=true&w=majority