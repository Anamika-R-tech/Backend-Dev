const os = require('os');
const fs = require('fs');

// Log system info every 5 seconds
setInterval(() => {
    const info = `
Time: ${new Date().toLocaleString()}
Platform: ${os.platform()}
CPU: ${os.cpus()[0].model}
Number of Cores: ${os.cpus().length}
Total Memory: ${Math.round(os.totalmem() / (1024 * 1024))} MB
Free Memory: ${Math.round(os.freemem() / (1024 * 1024))} MB
-------------------------------------
`;

    // Append to systemInfo.log
    fs.appendFile('systemInfo.log', info, (err) => {
        if (err) console.error('Error writing to file:', err);
    });

    console.log('System info logged at', new Date().toLocaleTimeString());
}, 5000);
