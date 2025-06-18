const mongoose = require('mongoose');

// Connect to MongoDB
function connect(url) {
    return mongoose
      .connect(url)
      .then(() => console.log("Connected to MongoDB"))
      .catch((e) => console.log("Error connecting:", e));
}

module.exports = {connect};