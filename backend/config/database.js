const config = require('./config')
const mongoose = require('mongoose')

mongoose.connect(config.MONGODB, (err)=>{
    if (err) {
      console.log(err)
    }
    console.log('DB is connect!')
})