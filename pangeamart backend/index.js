//standard server initialization
const express = require('express');
const server = express();
//database connection
const mongoose = require('mongoose');
main().catch(err=> console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
  }

//api path
server.get('/',(req,res)=>{
    res.json({status:'success'})
})

//listen function for status
server.listen(8080, ()=>{
    console.log('server started...');
})