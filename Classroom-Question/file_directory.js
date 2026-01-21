const fs = require("fs");
fs.mkdir("newDirectory", (err) => {
    if (err) console.log(err);
    else console.log("newDirectory created");
});
fs.mkdir("folders/folder1/folder2",{recursive : true },(err) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Directory is created");
})
fs.rmdir("newDirectory", (err) =>{
    if(err){
        console.log(err);
        return
    }
    console.log("Directory is Deleted");
})