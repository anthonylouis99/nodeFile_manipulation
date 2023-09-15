// var fs= require("fs");
// fs.readFile("./createdFiles/newFile.txt","utf8", (err,data)=>{
//     if(err)throw err;
//     console.log(data);
// });

// fs.writeFile("./createdFiles/respons.txt","\n wa a doga", (err, data) => {
//     if (err) throw err;
//     console.log("write complete");
// });
// fs.appendFile("./createdFiles/anotherRespons.txt", "\n wa a doga", (err, data) => {
//     if (err) throw err;
//     console.log("append complete");

//     fs.rename("./createdFiles/anotherRespons.txt", "new respons.txt", (err, data) => {
//         if (err) throw err;
//         console.log("rename complete");
//     });
// });
// Process.on("uncaughtException",err=>{
//     console.log("there was an uncaught err"+ err);
//     process.exit(1);
// })

let fsPromises=require("fs").promises;
let path= require("path");

const fileOps = async()=>{
    try {
        let data = await fsPromises.readFile(path.join(__dirname, "createdFiles", "newFile.txt"),"utf8");
       console.log(data);
        await fsPromises.writeFile(path.join(__dirname, "createdFiles", "newPromiseFile.txt"), "jesus is lord");
        await fsPromises.appendFile(path.join(__dirname, "createdFiles", "newPromiseFile.txt"), "\n\n hallelujah somebody");
        await fsPromises.rename(path.join(__dirname, "createdFiles", "newPromiseFile.txt"), "newPromiseFileComplete.txt");
        await fsPromises.unlink(path.join(__dirname, "newPromiseFileComplete.txt"));
        let newData = await fsPromises.readFile(path.join(__dirname, "createdFiles", "newPromiseFileComplete.txt"), "utf8");
        console.log(newData);
    } catch (error) {
        console.log(error);
    }
}
fileOps();