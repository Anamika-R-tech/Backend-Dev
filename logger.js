const fs = require("fs");

function logActivity(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `${message} - ${timestamp}\n`;

  fs.appendFile("activity.log", logMessage, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });
}


function readLogs() {
  fs.readFile(logFilePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading log file:", err);
      return;
    }
    console.log("Activity Logs");
    console.log(data);
  });
}

module.exports = { logActivity, readLogs };
