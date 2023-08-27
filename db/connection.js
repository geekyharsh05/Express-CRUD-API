const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/Products", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDb Successfully!");
  })
  .catch((err) => {
    console.log(err);
  });
