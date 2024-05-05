
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, { 
});
const app = require('./app')

app.listen(PORT, ()=>{
  console.log(`Server running in port: ${PORT}`)
})
