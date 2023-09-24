const fs = require("fs");
const path = require("path");

const logReqRes = (filename) => {
  return (req, res, next) => {
    const logData = `${Date.now()}: ${req.method}:${req.ip}: ${req.path}\n`;
    const filePath = path.join(__dirname, filename);

    fs.promises
      .appendFile(filePath, logData)
      .then(() => {
        next();
      })
      .catch((err) => {
        console.error("Error appending to log file:", err);
        next(err);
      });
  };
};
module.exports = logReqRes;
