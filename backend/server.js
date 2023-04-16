const express = require ("express");
const dotenv = require ('dotenv')
const app = express()
// const detail = require("./data/detail")
dotenv.config()
app.get("/",(req,res)=>{
    res.send("API running ");
})
// app.get("/api/detail",(req,res)=>{
// res.json(detail);
// })


const PORT =process.env.PORT || 5000;

app.listen(PORT,console.log(`Server starts in port 5000 ${PORT}`));