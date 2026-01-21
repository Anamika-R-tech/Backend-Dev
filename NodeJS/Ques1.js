const fs = require('fs');

// Read the file
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Count words
    const wordCount = data.split(/\s+/).filter(word => word.length > 0).length;

    // Write count to new file
    fs.writeFile('wordCount.txt', `Word Count: ${wordCount}`, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Word count written to wordCount.txt');
    });
});
