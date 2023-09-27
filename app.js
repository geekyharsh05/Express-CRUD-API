import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT ?? 4500;

import "./db/connection.js";
import { router } from "./router/Routes.js";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: http://localhost:${PORT}`);
});
