
const mongoose = require('mongoose');


const connectionString = process.env.MONGODB_URI || "mongodb://localhost/soccer-players";


mongoose.connect(connectionString, { useNewUrlParser: true})
  .then(() => {
    console.log("connected to mongo at: " + connectionString);
  });


module.exports = mongoose
