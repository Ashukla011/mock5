
const mongoose = require("mongoose")
require('dotenv').config()

const connection=mongoose.connect(`mongodb+srv://Avnish:avnish123@cluster0.vnjkv64.mongodb.net/KfcMenu`)
      .then(() => console.log('MongoDB Connected'))
      .catch(err => console.log(err));

      module.exports={connection}
