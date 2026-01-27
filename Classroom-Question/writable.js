// const fs = require("fs");
// const path = require("path");

// const inputPath = path.join(__dirname, "input.txt");
// const outputPath = path.join(__dirname, "output.txt");

// const inputStream = fs.createReadStream(inputPath,"utf-8");
// inputStream.on("data",(chunk) =>{
//     console.log("Data is divided in chunks",chunk)
// })

// readStream.pipe(writeStream);

const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "input.txt");
const outputPath = path.join(__dirname, "output.txt");
const readStream = fs.createReadStream(inputPath,{encoding:"utf-8"});
const writeStream = fs.createWriteStream(outputPath);

readStream.pipe(writeStream);

writeStream.on("finish",()=>{
    console.log("write stream is end")
})