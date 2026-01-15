
// const {add, remove, areaOfCircle} = require("./math")
// console.log(add(1,4), remove(1,5), areaOfCircle(6))

// const fs = require("fs");
// fs.writeFileSync("./test.txt","This is sync file content")
// const file = fs.readFileSync("test.txt","base64url")
// console.log(file)

// const asyncFile = fs.readFile("test.txt","utf-8",(err,data) => {
//     if(err){
//         console.log("Error in file reading",err)
//     }
//     else{
//         console.log("File reading successfull", data)
//     }
// })
// const fs1 = require("fs");
// fs1.writeFileSync("./login.txt","Enter your login credential")
// const file = fs1.readFileSync("login.txt","utf-8")
// console.log(file)

// const logger = require("./logger");

// logger.logActivity("User logged in");


// const http = require("http");

// const Server = http.createServer((req, res) =>{
//     res.writeHead(200,{"Content-Type":"application/json"});
//     res.end("Response is closed")
// })
// Server.listen(8000,()=>{
//     console.log("Server is running");
// });


// const http = require("http");

// const server = http.createServer((req, res) => {
//     switch (req.url) {
//         case "/":
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.end("<h1>Welcome to home page</h1>");
//             break;

//         case "/about":
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.end("<h1>Welcome to about page</h1>");
//             break;

//         default:
//             res.writeHead(404, { "Content-Type": "application/json" });
//             res.end({username:"",phone:""});
//             break;
//     }
// });

// server.listen(8000, () => {
//     console.log("Server running at http://localhost:8000");
// });

const http = require("http")
const url = require("url");
const fs = require("fs");
const Server = http.createServer((req,res) =>{
    const parsedurl = url.parse(req.url, true);
    const {name,email} = parsedurl.query;
    console.log(name,email);
    
    // fs.appendFile("log.txt", log + "\n", (err,date) => { 
    //     if (err) {
    //     console.error("Error writing to log file", err);
    //     }
    //     else{
    //         console.log("log generated");
    //     }
    // });
    switch (req.url){
        case "/":
            // res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>Welcome to home page</h1>");
            break;

        case "/about-us":
            //const name = query.name
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(`<h1>Hello, I am ${name} email: ${email} </h1> `);
            break;

        default:
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end({"Page not found":404});
            break;

    }
})
Server.listen(8000, () => {
    console.log("Server running at http://localhost:8000");
});
