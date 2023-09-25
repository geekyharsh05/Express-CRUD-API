const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

const logStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a"
});

morgan.token("getTimestamp", () => {
  return new Date().toLocaleString();
});

morgan.token("getUrlToken", (req) => {
  return req.originalUrl || req.url;
});

const logReqRes = morgan(":getTimestamp :method :getUrlToken :response-time ms", {
  stream: logStream
});

module.exports = logReqRes;
