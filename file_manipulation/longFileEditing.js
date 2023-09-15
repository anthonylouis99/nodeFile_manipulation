// <.....this style is more efficient for larger files.....>

let fs = require("fs");
let path=require("path");

let rs =fs.createReadStream(path.join(__dirname,"createdFiles","longFile.txt"),{encoding:"utf-8"});
let ws = fs.createWriteStream(path.join(__dirname, "createdFiles", "newLongFile.txt"));

// rs.on("data",(datachunk)=>{
//     ws.write(datachunk);
// })     <.....this works,but this would be better....>

rs.pipe(ws);