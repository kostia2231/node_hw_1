const fs = require("fs");
let index = 0;
function logMessage(message) {
  index += 1;
  const log = `${index} - ${message}\n`;
  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      console.log("error changing log file", err);
    }
  });
}
module.exports = { logMessage };
