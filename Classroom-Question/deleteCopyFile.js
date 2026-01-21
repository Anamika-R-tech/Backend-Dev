const fs = require("fs");
fs.copyFileSync("test.txt","dest.txt")

fs.copyFile("test.txt","new_test.txt",(err) =>{
    if(err){
        console.log("Error while copy if ", err)
    }
    else{
        console.log("File is copied successfully");
    }
})
fs.copyFileSync("urgent.txt", "dest.txt")
console.log("file is copied")

fs.unlink("dest.txt",(err) =>{
    if(err){
        console.log("Error while deleting file",err, err)
    }
    else{
        console.log("File is deleted");
    }
})