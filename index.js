const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose')

// import routes 
const userRouter = require('./routes/users')


mongoose.connect(process.env.DATABASE, {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true
})
.then(() =>  console.Console('DARABASE connected ...') )
.catch(() =>  console.log('not connect ...'))


// routes middleware 
app.use('/api/users', userRouter)



// server 
const port = process.env.PORT || 3000;
app.listen(port , () => { console.log(`connect server ...${port}`)})