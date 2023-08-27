const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 4500;
require("./db/connection");
const router = require("./router/Routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Create(POST) Product

app.post("/api", router);

// Read(GET) Product

app.get("/api", router);

// Update Product

app.put("/api", router);

// Delete(DELETE) Product

app.delete("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: http://localhost:${PORT}`);
});
