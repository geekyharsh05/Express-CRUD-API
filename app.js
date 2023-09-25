const express = require("express");
const bodyParser = require("body-parser");
const logReqRes = require("./middlewares");

const app = express();
const PORT = process.env.PORT || 4500;
require("./db/connection");
const router = require("./router/Routes");

app.use(logReqRes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: http://localhost:${PORT}`);
});