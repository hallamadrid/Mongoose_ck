const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 5000
app.use(express.json())
mongoose.connect('mongodb+srv://abdallah:abdallah@cluster0.dvf3clu.mongodb.net/?retryWrites=true&w=majority',
()=>console.log('database is connected'));
app.use('/',require("./routes/userRoutes.js"));
app.listen(port,()=> console.log('server is work in port 5000' +port));