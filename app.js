const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 4500;
require("./db/connection");
const router = require("./router/Routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", router);

app.listen(PORT, (err) => {
  if(err) {
    console.log(err);
  }
  console.log(`Server is running on PORT: http://localhost:${PORT}`);
});
