const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoutes=require('./routes/authRoutes')
const cors = require('cors');
const dotenv = require('dotenv');
const dbconnect = require('./config/conn');


const PORT = process.env.PORT;
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

dbconnect.dbconnect();
app.use(cors({origin: "http://localhost:3000",
methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
credentials: true,}));




app.use("/",(req,res,next)=>{console.log("data recieved")
  next()})
app.get("/",(req,res)=>res.send ("connectee"))
app.use('/api/', authRoutes);
app.listen(PORT, () => {
  console.log(`server is running  on http://localhost:${PORT}`);
});